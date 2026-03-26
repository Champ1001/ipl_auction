const Team = require('../models/Team');

/**
 * GET /api/teams/:roomId
 * Get all teams in a room
 */
exports.getTeamsByRoom = async (req, res) => {
  try {
    const teams = await Team.find({ room: req.params.roomId })
      .populate('owner', 'name')
      .populate('playersBought.player');
    res.json({ teams });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET /api/teams/my/:roomId
 * Get the current user's team in a room
 */
exports.getMyTeam = async (req, res) => {
  try {
    const team = await Team.findOne({ owner: req.user._id, room: req.params.roomId })
      .populate('playersBought.player');
    if (!team) return res.status(404).json({ message: 'Team not found' });
    res.json({ team });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
