const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema(
  {
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bidderName: { type: String, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bid', bidSchema);
