const { calculateTop12Points, getSquadRequirements, getTop12 } = require('../utils/squadRules');

exports.getLeaderboard = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    if (room.mode === 'ai') {
      return res.json({ leaderboard: [], message: 'Leaderboard coming soon for AI mode' });
    }

    const teams = await Team.find({ room: req.params.roomId })
      .populate('owner', 'name')
      .populate('playersBought.player')
      .sort({ totalPoints: -1 });

    const leaderboard = teams.map((team, idx) => {
      const players = team.playersBought.map(pb => pb.player).filter(Boolean);
      const top12   = getTop12(players);
      const reqs    = getSquadRequirements(players);

      return {
        rank: idx + 1,
        teamName: team.name,
        ownerName: team.owner?.name,
        totalPoints: team.totalPoints,       // top 12 points
        top12Players: top12.map(p => p.name),
        budget: team.budget,
        playerCount: players.length,
        overseas: reqs.overseas,
        requirements: reqs.requirements,
        meetsMinimum: reqs.meetsMinimum,
      };
    });

    res.json({ leaderboard });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};