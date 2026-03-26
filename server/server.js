require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db');
const routes = require('./routes/index');
const { registerSocketHandlers } = require('./sockets/auctionSocket');
const User = require('./models/User');

const app = express();
const server = http.createServer(app);

// Socket.io setup with CORS
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

// REST API Routes
app.use('/api', routes);

// Health check
app.get('/', (req, res) => res.json({ message: '🏏 IPL Auction API is running!' }));

// Socket.io: Authenticate via JWT before allowing socket connection
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error('Authentication error: No token'));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return next(new Error('Authentication error: User not found'));

    socket.user = user; // Attach user to socket
    next();
  } catch (err) {
    next(new Error('Authentication error: Invalid token'));
  }
});

// Register socket event handlers
io.on('connection', (socket) => {
  console.log(`✅ Socket connected: ${socket.user?.name} (${socket.id})`);
  registerSocketHandlers(io, socket);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
