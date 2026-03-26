const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },

    // Starting budget in crores (e.g., 100 crores)
    budget: { type: Number, default: 10000 }, // stored in lakhs = 100 crores

    // Players bought in auction
    playersBought: [
      {
        player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
        pricePaid: { type: Number },
      },
    ],

    // Total fantasy points (used in "Points Based" mode leaderboard)
    totalPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Team', teamSchema);
