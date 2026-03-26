const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    // Guest users only have a name; no password required
    isGuest: {
      type: Boolean,
      default: true,
    },
    // Optional password for registered users
    password: {
      type: String,
      select: false,
    },
    // Track which rooms this user has joined
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  },
  { timestamps: true }
);

// Hash password before saving (if provided)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
