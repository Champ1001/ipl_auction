const Room = require('../models/Room');
const Player = require('../models/Player');
const Team = require('../models/Team');
const DEFAULT_PLAYERS = require('../config/defaultPlayers');

/** Generate a random 6-char room code */
const generateCode = () =>
  Math.random().toString(36).substring(2, 8).toUpperCase();

/**
 * POST /api/rooms
 * Create a new room (host only)
 */
exports.createRoom = async (req, res) => {
  try {
    const { name, isPrivate, mode, teamName } = req.body;

    if (!name || !teamName) {
      return res.status(400).json({ message: 'Room name and team name are required' });
    }

    // Generate unique code
    let code = generateCode();
    while (await Room.findOne({ code })) {
      code = generateCode();
    }

    // Create the room
    const room = await Room.create({
      name: name.trim(),
      code,
      host: req.user._id,
      isPrivate: isPrivate || false,
      mode: mode === 'ai' ? 'ai' : 'points',
      members: [req.user._id],
    });

    // Seed default players for this room
    const playerDocs = DEFAULT_PLAYERS.map((p) => ({ ...p, room: room._id }));
    await Player.insertMany(playerDocs);

    // Create the host's team
    await Team.create({
      name: teamName.trim(),
      owner: req.user._id,
      room: room._id,
    });

    res.status(201).json({ room, code });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * POST /api/rooms/join
 * Join a room by code
 */
exports.joinRoom = async (req, res) => {
  try {
    const { code, teamName } = req.body;

    if (!code || !teamName) {
      return res.status(400).json({ message: 'Room code and team name are required' });
    }

    const room = await Room.findOne({ code: code.toUpperCase() });
    if (!room) return res.status(404).json({ message: 'Room not found' });

    // Add user to members if not already
    if (!room.members.includes(req.user._id)) {
      room.members.push(req.user._id);
      await room.save();
    }

    // Create team if user doesn't already have one in this room
    const existingTeam = await Team.findOne({ owner: req.user._id, room: room._id });
    if (!existingTeam) {
      await Team.create({
        name: teamName.trim(),
        owner: req.user._id,
        room: room._id,
      });
    }

    res.json({ room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET /api/rooms
 * Get public rooms
 */
exports.getPublicRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isPrivate: false, status: { $ne: 'completed' } })
      .populate('host', 'name')
      .sort({ createdAt: -1 })
      .limit(20);
    res.json({ rooms });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET /api/rooms/:id
 * Get room by ID
 */
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('host', 'name').populate('members', 'name');
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json({ room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * PATCH /api/rooms/:id/start
 * Host starts the auction
 */
exports.startAuction = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    if (room.host.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Only the host can start the auction' });
    }

    if (room.mode === 'ai') {
      return res.status(400).json({ message: '🚀 AI Auction Mode coming soon!' });
    }

    room.status = 'active';
    await room.save();

    res.json({ room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
