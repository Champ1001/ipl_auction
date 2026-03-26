const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, unique: true, uppercase: true },
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Public or private room
    isPrivate: { type: Boolean, default: false },

    // Auction mode: "points" = Points Based, "ai" = Smart AI (coming soon)
    mode: {
      type: String,
      enum: ['points', 'ai'],
      default: 'points',
    },

    // Members who joined the room
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    // Auction state
    status: {
      type: String,
      enum: ['waiting', 'active', 'paused', 'completed'],
      default: 'waiting',
    },

    // Index of the player currently being auctioned
    currentPlayerIndex: { type: Number, default: 0 },

    // Current bid info
    currentBid: { type: Number, default: 0 },
    currentBidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    currentBidderName: { type: String, default: '' },

    // Chat messages (last 10 stored)
    messages: [
      {
        user: { type: String },
        userId: { type: String },
        text: { type: String },
        time: { type: Date, default: Date.now },
      },
    ],

    // Timer per player in seconds
    timerDuration: { type: Number, default: 10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', roomSchema);
