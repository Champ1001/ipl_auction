const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const authCtrl = require('../controllers/authController');
const roomCtrl = require('../controllers/roomController');
const playerCtrl = require('../controllers/playerController');
const teamCtrl = require('../controllers/teamController');
const lbCtrl = require('../controllers/leaderboardController');

// Auth
router.post('/auth/guest', authCtrl.guestLogin);
router.get('/auth/me', protect, authCtrl.getMe);

// Rooms
router.post('/rooms', protect, roomCtrl.createRoom);
router.post('/rooms/join', protect, roomCtrl.joinRoom);
router.get('/rooms', protect, roomCtrl.getPublicRooms);
router.get('/rooms/:id', protect, roomCtrl.getRoomById);
router.patch('/rooms/:id/start', protect, roomCtrl.startAuction);

// Players
router.get('/players/:roomId', protect, playerCtrl.getPlayersByRoom);

// Teams
router.get('/teams/:roomId', protect, teamCtrl.getTeamsByRoom);
router.get('/teams/my/:roomId', protect, teamCtrl.getMyTeam);

// Leaderboard
router.get('/leaderboard/:roomId', protect, lbCtrl.getLeaderboard);

module.exports = router;
