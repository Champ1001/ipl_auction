const Room = require('../models/Room');
const Player = require('../models/Player');
const Team = require('../models/Team');
const Bid = require('../models/Bid');
const { canBuyPlayer, calculateTop12Points } = require('../utils/squadRules');

const bidLocks = {};
const auctionTimers = {};

const emitLeaderboard = async (io, roomId) => {
  const teams = await Team.find({ room: roomId })
    .populate('owner', 'name')
    .sort({ totalPoints: -1 });

  const leaderboard = teams.map((t, i) => ({
    rank: i + 1,
    teamName: t.name,
    ownerName: t.owner?.name,
    totalPoints: t.totalPoints,
    budget: t.budget,
    playerCount: t.playersBought.length,
  }));

  io.to(roomId).emit('leaderboard:update', { leaderboard });
};

const moveToNextPlayer = async (io, roomId) => {
  if (auctionTimers[roomId]) {
    clearInterval(auctionTimers[roomId].timer);
    delete auctionTimers[roomId];
  }

  const room = await Room.findById(roomId);
  if (!room || room.status !== 'active') return;

  const players = await Player.find({ room: roomId });
  let nextIndex = room.currentPlayerIndex;

  while (nextIndex < players.length && players[nextIndex].sold) {
    nextIndex++;
  }

  if (nextIndex >= players.length) {
    room.status = 'completed';
    await room.save();
    io.to(roomId).emit('auction:ended', { message: '🏆 Auction completed!' });
    await emitLeaderboard(io, roomId);
    return;
  }

  room.currentPlayerIndex = nextIndex;
  room.currentBid = players[nextIndex].basePrice; // first bid = base price
  room.currentBidder = null;
  room.currentBidderName = '';
  await room.save();

  const currentPlayer = players[nextIndex];
  io.to(roomId).emit('player:change', {
    player: currentPlayer,
    currentBid: currentPlayer.basePrice,
    currentBidder: null,
    currentBidderName: '',
    playerIndex: nextIndex,
    totalPlayers: players.length,
  });

  startAuctionTimer(io, roomId, currentPlayer);
};

const startAuctionTimer = (io, roomId, player, duration = 10) => {
  let timeLeft = duration;
  io.to(roomId).emit('auction:timer', { timeLeft });

  const timer = setInterval(async () => {
    timeLeft--;
    io.to(roomId).emit('auction:timer', { timeLeft });

    if (timeLeft <= 0) {
      clearInterval(timer);
      delete auctionTimers[roomId];
      await handlePlayerSold(io, roomId, player._id);
    }
  }, 1000);

  auctionTimers[roomId] = { timer, timeLeft };
};

const handlePlayerSold = async (io, roomId, playerId) => {
  const room = await Room.findById(roomId);
  if (!room) return;

  const player = await Player.findById(playerId);
  if (!player || player.sold) return;

  if (!room.currentBidder) {
    io.to(roomId).emit('player:unsold', { player, message: `${player.name} went unsold` });
    room.currentPlayerIndex++;
    await room.save();
    await moveToNextPlayer(io, roomId);
    return;
  }

  player.sold = true;
  player.soldPrice = room.currentBid;

  const team = await Team.findOne({ owner: room.currentBidder, room: roomId })
    .populate('playersBought.player');

  if (team) {
    const boughtPlayers = team.playersBought.map(pb => pb.player);

    if (room.mode === 'points') {
      const check = canBuyPlayer(team, player, boughtPlayers);
      if (!check.allowed) {
        io.to(roomId).emit('player:rulefail', {
          player,
          team: team.name,
          reason: check.reason,
        });
        player.sold = false;
        await player.save();
        room.currentPlayerIndex++;
        await room.save();
        await moveToNextPlayer(io, roomId);
        return;
      }
    }

    player.soldTo = team._id;
    await player.save();

    team.budget -= room.currentBid;
    team.playersBought.push({ player: player._id, pricePaid: room.currentBid });

    if (room.mode === 'points') {
      const allBoughtPlayers = [...boughtPlayers, player];
      team.totalPoints = calculateTop12Points(allBoughtPlayers);
    }

    await team.save();
  } else {
    await player.save();
  }

  io.to(roomId).emit('player:sold', {
    player,
    soldTo: room.currentBidderName,
    soldPrice: room.currentBid,
    team: team ? { name: team.name, budget: team.budget } : null,
  });

  if (room.mode === 'points') {
    await emitLeaderboard(io, roomId);
  }

  room.currentPlayerIndex++;
  await room.save();
  setTimeout(() => moveToNextPlayer(io, roomId), 2000);
};

const registerSocketHandlers = (io, socket) => {

  // ── Join room ──
  socket.on('room:join', async ({ roomId, userId, userName }) => {
    socket.join(roomId);
    socket.to(roomId).emit('user:joined', { userName, message: `${userName} joined the room` });

    try {
      const room = await Room.findById(roomId);
      if (room && (room.status === 'active' || room.status === 'paused')) {
        const players = await Player.find({ room: roomId });
        const currentPlayer = players[room.currentPlayerIndex];
        if (currentPlayer) {
          socket.emit('player:change', {
            player: currentPlayer,
            currentBid: room.currentBid,
            currentBidder: room.currentBidder,
            currentBidderName: room.currentBidderName,
            playerIndex: room.currentPlayerIndex,
            totalPlayers: players.length,
          });
          const remaining = auctionTimers[roomId]?.timeLeft || 0;
          socket.emit('auction:timer', { timeLeft: remaining });
        }
        // Send pause state to reconnecting user
        if (room.status === 'paused') {
          socket.emit('auction:paused', { message: '⏸️ Auction is paused' });
        }
      }
    } catch (e) {
      console.error('Reconnect state error:', e.message);
    }
  });

  // ── Host starts auction ──
  socket.on('auction:start', async ({ roomId }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room || room.status !== 'active') return;
      io.to(roomId).emit('auction:started', { message: '🏏 Auction started!' });
      await moveToNextPlayer(io, roomId);
    } catch (e) {
      socket.emit('error', { message: e.message });
    }
  });

  // ── Host pauses auction ──
  socket.on('auction:pause', async ({ roomId, userId }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return;
      if (room.host.toString() !== userId) {
        return socket.emit('bid:error', { message: 'Only host can pause' });
      }

      if (auctionTimers[roomId]) {
        clearInterval(auctionTimers[roomId].timer);
        delete auctionTimers[roomId];
      }

      room.status = 'paused';
      await room.save();

      io.to(roomId).emit('auction:paused', { message: '⏸️ Auction paused by host' });
    } catch (e) {
      socket.emit('error', { message: e.message });
    }
  });

  // ── Host resumes auction ──
  socket.on('auction:resume', async ({ roomId, userId }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return;
      if (room.host.toString() !== userId) {
        return socket.emit('bid:error', { message: 'Only host can resume' });
      }

      room.status = 'active';
      await room.save();

      io.to(roomId).emit('auction:resumed', { message: '▶️ Auction resumed!' });

      const players = await Player.find({ room: roomId });
      const currentPlayer = players[room.currentPlayerIndex];
      if (currentPlayer && !currentPlayer.sold) {
        startAuctionTimer(io, roomId, currentPlayer);
      } else {
        await moveToNextPlayer(io, roomId);
      }
    } catch (e) {
      socket.emit('error', { message: e.message });
    }
  });

  // ── Host ends auction ──
  socket.on('auction:end', async ({ roomId, userId }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return;
      if (room.host.toString() !== userId) {
        return socket.emit('bid:error', { message: 'Only host can end auction' });
      }

      if (auctionTimers[roomId]) {
        clearInterval(auctionTimers[roomId].timer);
        delete auctionTimers[roomId];
      }

      room.status = 'completed';
      await room.save();

      io.to(roomId).emit('auction:ended', { message: '🏁 Auction ended by host' });
      await emitLeaderboard(io, roomId);
    } catch (e) {
      socket.emit('error', { message: e.message });
    }
  });

  // ── Host kicks a player ──
  socket.on('room:kick', async ({ roomId, userId, kickUserId }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return;
      if (room.host.toString() !== userId) {
        return socket.emit('bid:error', { message: 'Only host can kick players' });
      }
      if (room.host.toString() === kickUserId) {
        return socket.emit('bid:error', { message: 'Cannot kick yourself!' });
      }

      room.members = room.members.filter(m => m.toString() !== kickUserId);
      await room.save();

      io.to(roomId).emit('room:kicked', {
        kickedUserId: kickUserId,
        message: 'A player was removed by the host',
      });
    } catch (e) {
      socket.emit('error', { message: e.message });
    }
  });

  // ── Place bid ──
  socket.on('bid:place', async ({ roomId, userId, userName, teamId, amount }) => {
    try {
      // Prevent simultaneous bids
      if (bidLocks[roomId]) {
        return socket.emit('bid:error', { message: 'Another bid is being processed, try again!' });
      }
      bidLocks[roomId] = true;

      const room = await Room.findById(roomId);
      if (!room || room.status !== 'active') {
        bidLocks[roomId] = false;
        return socket.emit('bid:error', { message: 'Auction is not active' });
      }

      // Block bids at 1 second remaining
      if (auctionTimers[roomId] && auctionTimers[roomId].timeLeft <= 1) {
        bidLocks[roomId] = false;
        return socket.emit('bid:error', { message: '⏱️ Bidding closed!' });
      }

      // Prevent same team bidding twice in a row
      if (room.currentBidder && room.currentBidder.toString() === userId.toString()) {
        bidLocks[roomId] = false;
        return socket.emit('bid:error', { message: '⚠️ You are already the highest bidder!' });
      }

      // First bid can be at base price, subsequent must be higher
      if (room.currentBidder && amount <= room.currentBid) {
        bidLocks[roomId] = false;
        return socket.emit('bid:error', {
          message: `Bid must be higher than ₹${room.currentBid}L`,
        });
      }

      // Check team budget
      const team = await Team.findOne({ owner: userId, room: roomId });
      if (!team || team.budget < amount) {
        bidLocks[roomId] = false;
        return socket.emit('bid:error', { message: 'Insufficient budget!' });
      }

      room.currentBid = amount;
      room.currentBidder = userId;
      room.currentBidderName = userName;
      await room.save();

      const players = await Player.find({ room: roomId });
      const currentPlayer = players[room.currentPlayerIndex];

      await Bid.create({
        room: roomId,
        player: currentPlayer._id,
        bidder: userId,
        bidderName: userName,
        team: team._id,
        amount,
      });

      io.to(roomId).emit('bid:update', {
        amount,
        bidderName: userName,
        bidderId: userId,
        player: currentPlayer.name,
      });

      // Reset timer to 5 seconds after each bid
      if (auctionTimers[roomId]) {
        clearInterval(auctionTimers[roomId].timer);
        delete auctionTimers[roomId];
      }
      startAuctionTimer(io, roomId, currentPlayer, 5);

    } catch (e) {
      socket.emit('bid:error', { message: e.message });
    } finally {
      bidLocks[roomId] = false;
    }
  });

  // ── Chat ──
  socket.on('chat:message', async ({ roomId, userId, userName, text }) => {
    if (!text?.trim()) return;
    try {
      const room = await Room.findById(roomId);
      if (!room) return;

      const message = { user: userName, userId, text: text.trim(), time: new Date() };
      room.messages.push(message);
      if (room.messages.length > 10) room.messages.shift();
      await room.save();

      io.to(roomId).emit('chat:message', message);
    } catch (e) {
      console.error('Chat error:', e.message);
    }
  });

  // ── Team update ──
  socket.on('team:update', async ({ roomId }) => {
    try {
      const teams = await Team.find({ room: roomId })
        .populate('owner', 'name')
        .populate('playersBought.player');
      io.to(roomId).emit('team:update', { teams });
    } catch (e) {
      console.error('Team update error:', e.message);
    }
  });

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
};

module.exports = { registerSocketHandlers };