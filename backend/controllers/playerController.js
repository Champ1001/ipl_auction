const Player = require('../models/Player');

/**
 * GET /api/players/:roomId
 * Get all players in a room
 */
exports.getPlayersByRoom = async (req, res) => {
  try {
    const players = await Player.find({ room: req.params.roomId }).populate('soldTo', 'name');
    res.json({ players });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
