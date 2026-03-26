# 🏏 IPL Auction Live — Full Stack Platform

A real-time IPL auction platform with live bidding, team management, leaderboards, and chat.

## 🗂️ Project Structure

```
ipl-auction/
├── backend/               # Node.js + Express + Socket.io
│   ├── config/
│   │   ├── db.js          # MongoDB Atlas connection
│   │   └── defaultPlayers.js  # 20 IPL players seeded per room
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── roomController.js
│   │   ├── playerController.js
│   │   ├── teamController.js
│   │   └── leaderboardController.js
│   ├── middleware/
│   │   └── auth.js        # JWT protect middleware
│   ├── models/
│   │   ├── User.js
│   │   ├── Room.js        # mode: "points" | "ai"
│   │   ├── Player.js      # includes points field
│   │   ├── Team.js        # includes totalPoints field
│   │   └── Bid.js
│   ├── routes/
│   │   └── index.js       # All REST routes
│   ├── sockets/
│   │   └── auctionSocket.js  # All socket.io handlers
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── frontend/              # React + Vite + Tailwind CSS
    ├── src/
    │   ├── components/
    │   │   ├── PlayerCard.jsx
    │   │   ├── BidPanel.jsx
    │   │   ├── Leaderboard.jsx
    │   │   ├── Squad.jsx
    │   │   ├── Chat.jsx
    │   │   ├── PlayersGrid.jsx
    │   │   └── Toast.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Home.jsx
    │   │   └── AuctionRoom.jsx
    │   ├── utils/
    │   │   ├── api.js     # Axios with JWT interceptor
    │   │   └── socket.js  # Socket.io init/disconnect
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## 🚀 Setup & Run

### 1. MongoDB Atlas
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create a free cluster
2. Create a database user and whitelist your IP (or use `0.0.0.0/0` for dev)
3. Copy your connection string

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env → paste your MongoDB URI and set JWT_SECRET
npm run dev
# Server runs on http://localhost:5000
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## ⚙️ Environment Variables (backend/.env)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/ipl-auction
JWT_SECRET=change_this_to_a_long_random_string
CLIENT_URL=http://localhost:5173
```

---

## 🔌 Socket Events Reference

| Event              | Direction       | Description                          |
|--------------------|-----------------|--------------------------------------|
| `room:join`        | Client → Server | Join auction room                    |
| `auction:start`    | Client → Server | Host starts auction                  |
| `bid:place`        | Client → Server | Place a bid                          |
| `chat:message`     | Both            | Send/receive chat messages           |
| `player:change`    | Server → Client | New player up for auction            |
| `auction:timer`    | Server → Client | Countdown tick (every second)        |
| `bid:update`       | Server → Client | New highest bid                      |
| `bid:error`        | Server → Client | Invalid bid notification             |
| `player:sold`      | Server → Client | Player sold announcement             |
| `player:unsold`    | Server → Client | Player went unsold                   |
| `leaderboard:update`| Server → Client | Updated leaderboard after sale      |
| `team:update`      | Server → Client | Team data changed                    |
| `auction:ended`    | Server → Client | All players auctioned               |
| `user:joined`      | Server → Client | Someone joined the room              |

---

## 🏗️ REST API Reference

| Method | Endpoint                  | Auth | Description                    |
|--------|---------------------------|------|--------------------------------|
| POST   | `/api/auth/guest`         | ❌   | Guest login (name only)        |
| GET    | `/api/auth/me`            | ✅   | Get current user               |
| POST   | `/api/rooms`              | ✅   | Create room                    |
| POST   | `/api/rooms/join`         | ✅   | Join room by code              |
| GET    | `/api/rooms`              | ✅   | List public rooms              |
| GET    | `/api/rooms/:id`          | ✅   | Get room details               |
| PATCH  | `/api/rooms/:id/start`    | ✅   | Start auction (host only)      |
| GET    | `/api/players/:roomId`    | ✅   | All players in room            |
| GET    | `/api/teams/:roomId`      | ✅   | All teams in room              |
| GET    | `/api/teams/my/:roomId`   | ✅   | My team in room                |
| GET    | `/api/leaderboard/:roomId`| ✅   | Room leaderboard               |

---

## ✨ Features

- **Guest Login** — Enter name, get JWT, start playing instantly
- **Room System** — Create/join rooms with unique codes; public or private
- **20 Default IPL Players** — Auto-seeded with fantasy points per room
- **Real-time Bidding** — 10-second countdown, instant bid broadcast
- **Points-Based Leaderboard** — Live ranking by total fantasy points
- **AI Mode Placeholder** — Shows "coming soon" message gracefully
- **Chat** — Room-level real-time chat, last 10 messages persisted
- **Squad View** — Your bought players, price paid, and point total
- **Reconnect Support** — Rejoining syncs current auction state

---

## 🔮 Future: AI Auction Mode
When implemented, the AI mode will:
- Auto-value players based on recent form and stats
- Suggest optimal bids based on team composition
- Provide smart draft recommendations
