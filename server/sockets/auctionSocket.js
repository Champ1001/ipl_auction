const Room = require('../models/Room');
const Player = require('../models/Player');
const Team = require('../models/Team');
const Bid = require('../models/Bid');
const { canBuyPlayer, calculateTop12Points, isOverseas } = require('../utils/squadRules');
// In-memory auction timers per room: { roomId: { timer, timeLeft } }
const auctionTimers = {};
/**
 * Build and emit real-time leaderboard for a room
 */
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

/**
 * Move auction to the next unsold player.
 * If all players are sold, end the auction.
 */
const moveToNextPlayer = async (io, roomId) => {
  // Clear any existing timer
  if (auctionTimers[roomId]) {
    clearInterval(auctionTimers[roomId].timer);
    delete auctionTimers[roomId];
  }

  const room = await Room.findById(roomId);
  if (!room || room.status !== 'active') return;

  const players = await Player.find({ room: roomId });
  let nextIndex = room.currentPlayerIndex;

  // Find next unsold player
  while (nextIndex < players.length && players[nextIndex].sold) {
    nextIndex++;
  }

  if (nextIndex >= players.length) {
    // All players auctioned — end auction
    room.status = 'completed';
    await room.save();
    io.to(roomId).emit('auction:ended', { message: '🏆 Auction completed!' });
    await emitLeaderboard(io, roomId);
    return;
  }

  room.currentPlayerIndex = nextIndex;
  room.currentBid = players[nextIndex].basePrice;
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

  // Start countdown timer
  startAuctionTimer(io, roomId, currentPlayer);
};

/**
 * Start the 10-second countdown timer for a player
 */
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

/**
 * Mark a player as sold and update team/leaderboard
 */
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
    // Get all players this team has bought so far
    const boughtPlayers = team.playersBought.map(pb => pb.player);

    // Check squad rules (only in points mode)
    if (room.mode === 'points') {
      const check = canBuyPlayer(team, player, boughtPlayers);
      if (!check.allowed) {
        // Player can't be bought — notify and skip
        io.to(roomId).emit('player:rulefail', {
          player,
          team: team.name,
          reason: check.reason,
        });
        toast && console.log(`Squad rule blocked: ${check.reason}`);
        // Still mark as sold but don't add to team — treat as unsold
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

    // Recalculate top 12 points for points mode
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

/**
 * Register all socket event handlers
 */
const registerSocketHandlers = (io, socket) => {
  // Join a room's socket channel
  socket.on('room:join', async ({ roomId, userId, userName }) => {
    socket.join(roomId);
    socket.to(roomId).emit('user:joined', { userName, message: `${userName} joined the room` });

    // Send current auction state to reconnecting user
    try {
      const room = await Room.findById(roomId);
      if (room && room.status === 'active') {
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
          // Send remaining timer
          const remaining = auctionTimers[roomId]?.timeLeft || 0;
          socket.emit('auction:timer', { timeLeft: remaining });
        }
      }
    } catch (e) {
      console.error('Reconnect state error:', e.message);
    }
  });

  // Host starts the auction
  socket.on('auction:start', async ({ roomId }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room || room.status !== 'active') return;
      await moveToNextPlayer(io, roomId);
    } catch (e) {
      socket.emit('error', { message: e.message });
    }
  });

  // User places a bid
  socket.on('bid:place', async ({ roomId, userId, userName, teamId, amount }) => {
    try {
      const room = await Room.findById(roomId);
      if (!room || room.status !== 'active') {
        return socket.emit('bid:error', { message: 'Auction is not active' });
      }
      if (room.currentBidder && room.currentBidder.toString() === userId.toString()) {
        return socket.emit('bid:error', { message: '⚠️ You are already the highest bidder! Wait for someone else to bid.' });
      }
      // Validate bid amount
      if (amount <= room.currentBid) {
        return socket.emit('bid:error', {
          message: `Bid must be higher than current bid of ₹${room.currentBid}L`,
        });
      }

      // Check team budget
      const team = await Team.findOne({ owner: userId, room: roomId });
      if (!team || team.budget < amount) {
        return socket.emit('bid:error', { message: 'Insufficient budget!' });
      }
      // In bid:place handler
      if (auctionTimers[roomId] && auctionTimers[roomId].timeLeft <= 1) {
        return socket.emit('bid:error', { message: '⏱️ Bidding closed!' });
      }
      // Update current bid in room
      room.currentBid = amount;
      room.currentBidder = userId;
      room.currentBidderName = userName;
      await room.save();

      const players = await Player.find({ room: roomId });
      const currentPlayer = players[room.currentPlayerIndex];

      // Record bid in DB
      await Bid.create({
        room: roomId,
        player: currentPlayer._id,
        bidder: userId,
        bidderName: userName,
        team: team._id,
        amount,
      });

      // Broadcast updated bid to all in room
      io.to(roomId).emit('bid:update', {
        amount,
        bidderName: userName,
        bidderId: userId,
        player: currentPlayer.name,
      });

      // Reset timer on new bid
      if (auctionTimers[roomId]) {
        clearInterval(auctionTimers[roomId].timer);
        delete auctionTimers[roomId];
      }
      startAuctionTimer(io, roomId, currentPlayer);
    } catch (e) {
      socket.emit('bid:error', { message: e.message });
    }
  });

  // Chat message
  socket.on('chat:message', async ({ roomId, userId, userName, text }) => {
    if (!text?.trim()) return;

    try {
      const room = await Room.findById(roomId);
      if (!room) return;

      const message = { user: userName, userId, text: text.trim(), time: new Date() };

      // Keep only last 10 messages
      room.messages.push(message);
      if (room.messages.length > 10) room.messages.shift();
      await room.save();

      io.to(roomId).emit('chat:message', message);
    } catch (e) {
      console.error('Chat error:', e.message);
    }
  });

  // Team update broadcast
  socket.on('team:update', async ({ roomId }) => {
    try {
      const teams = await Team.find({ room: roomId }).populate('owner', 'name').populate('playersBought.player');
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
