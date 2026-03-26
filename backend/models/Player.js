const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    basePrice: { type: Number, required: true, default: 100 }, // in lakhs
    points: { type: Number, required: true, default: 100 },    // fantasy points value
    role: { type: String, enum: ['Batsman', 'Bowler', 'All-Rounder', 'Wicket-Keeper'], default: 'Batsman' },
    country: { type: String, default: 'India' },
    ipl_team: { type: String, default: 'N/A' },
    image: { type: String, default: '' },

    // Auction state
    sold: { type: Boolean, default: false },
    soldTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', default: null },
    soldPrice: { type: Number, default: 0 },

    // Which room this player belongs to
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Player', playerSchema);
