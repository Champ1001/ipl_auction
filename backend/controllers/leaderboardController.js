const Team = require('../models/Team');
const Room = require('../models/Room');

/**
 * GET /api/leaderboard/:roomId
 * Get sorted leaderboard for a room (Points Based mode only)
 */
exports.getLeaderboard = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    if (room.mode === 'ai') {
      return res.json({ leaderboard: [], message: 'Leaderboard coming soon for AI mode' });
    }

    const teams = await Team.find({ room: req.params.roomId })
      .populate('owner', 'name')
      .populate('playersBought.player', 'name points')
      .sort({ totalPoints: -1 }); // Sort by points descending

    const leaderboard = teams.map((team, idx) => ({
      rank: idx + 1,
      teamName: team.name,
      ownerName: team.owner?.name,
      totalPoints: team.totalPoints,
      budget: team.budget,
      playerCount: team.playersBought.length,
    }));

    res.json({ leaderboard });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
