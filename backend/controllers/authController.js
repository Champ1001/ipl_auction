const jwt = require('jsonwebtoken');
const User = require('../models/User');

/** Generate a signed JWT */
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

/**
 * POST /api/auth/guest
 * Guest login — just a name, no password
 */
exports.guestLogin = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ message: 'Name must be at least 2 characters' });
    }

    // Create a new guest user each time (they're ephemeral)
    const user = await User.create({ name: name.trim(), isGuest: true });
    const token = generateToken(user._id);

    res.status(201).json({
      token,
      user: { _id: user._id, name: user.name, isGuest: user.isGuest },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET /api/auth/me
 * Get current logged-in user
 */
exports.getMe = async (req, res) => {
  res.json({ user: req.user });
};
