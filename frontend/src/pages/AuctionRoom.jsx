import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { initSocket, disconnectSocket } from '../utils/socket'
import api from '../utils/api'
import PlayerCard from '../components/PlayerCard'
import BidPanel from '../components/BidPanel'
import Leaderboard from '../components/Leaderboard'
import Squad from '../components/Squad'
import Chat from '../components/Chat'
import PlayersGrid from '../components/PlayersGrid'
import ToastContainer, { toast } from '../components/Toast'

const TABS = ['auction', 'squad', 'players', 'leaderboard']
const TAB_LABELS = { auction: '🏏 Auction', squad: '👕 Squad', players: '📋 Players', leaderboard: '🏆 Leaderboard' }

export default function AuctionRoom() {
  const { roomId } = useParams()
  const { user, token } = useAuth()
  const navigate = useNavigate()

  // Room & auction state
  const [room, setRoom]               = useState(null)
  const [players, setPlayers]         = useState([])
  const [myTeam, setMyTeam]           = useState(null)
  const [teams, setTeams]             = useState([])
  const [leaderboard, setLeaderboard] = useState([])
  const [messages, setMessages]       = useState([])
  const [activeTab, setActiveTab]     = useState('auction')
  const [isPaused, setIsPaused]       = useState(false)  // ← INSIDE component

  // Live auction state
  const [currentPlayer, setCurrentPlayer]         = useState(null)
  const [currentBid, setCurrentBid]               = useState(0)
  const [currentBidderName, setCurrentBidderName] = useState('')
  const [timeLeft, setTimeLeft]                   = useState(10)
  const [playerIndex, setPlayerIndex]             = useState(0)
  const [totalPlayers, setTotalPlayers]           = useState(0)
  const [auctionEnded, setAuctionEnded]           = useState(false)
  const [soldAnnouncement, setSoldAnnouncement]   = useState(null)

  const socketRef = useRef(null)
  const isHost = room?.host?._id === user?._id || room?.host === user?._id

  // ─── Init data & socket ───────────────────────────────────────────────────
  useEffect(() => {
    loadRoom()
    loadPlayers()
    loadMyTeam()
    loadTeams()
    loadLeaderboard()

    const socket = initSocket(token)
    socketRef.current = socket

    socket.emit('room:join', { roomId, userId: user._id, userName: user.name })

    socket.on('player:change', (data) => {
      setCurrentPlayer(data.player)
      setCurrentBid(data.currentBid)
      setCurrentBidderName(data.currentBidderName || '')
      setPlayerIndex(data.playerIndex)
      setTotalPlayers(data.totalPlayers)
      setTimeLeft(10)
      setSoldAnnouncement(null)
      setIsPaused(false)
      loadRoom()
      loadPlayers()
    })

    socket.on('auction:timer', ({ timeLeft: t }) => setTimeLeft(t))

    socket.on('bid:update', (data) => {
      setCurrentBid(data.amount)
      setCurrentBidderName(data.bidderName)
      toast(`🔨 ${data.bidderName} bid ₹${data.amount}L`, 'info')
    })

    socket.on('bid:error', ({ message }) => toast(message, 'error'))

    socket.on('player:sold', (data) => {
      setSoldAnnouncement(data)
      toast(`🎉 ${data.player.name} SOLD to ${data.soldTo} for ₹${data.soldPrice}L!`, 'success')
      loadMyTeam()
      loadTeams()
      loadPlayers()
      setTimeout(() => setSoldAnnouncement(null), 3000)
    })

    socket.on('player:unsold', ({ player }) => {
      toast(`❌ ${player.name} went unsold`, 'warning')
      loadPlayers()
    })

    socket.on('player:rulefail', ({ player, team, reason }) => {
      toast(`${reason} — ${player.name} not added to ${team}`, 'error')
    })

    socket.on('leaderboard:update', ({ leaderboard: lb }) => setLeaderboard(lb))

    socket.on('team:update', () => { loadMyTeam(); loadTeams() })

    socket.on('chat:message', (msg) => {
      setMessages(prev => [...prev.slice(-9), msg])
    })

    socket.on('user:joined', ({ message }) => toast(message, 'info'))

    socket.on('auction:started', () => {
      setIsPaused(false)
      loadRoom()
    })

    socket.on('auction:paused', ({ message }) => {
      setIsPaused(true)
      toast(message, 'warning')
      loadRoom()
    })

    socket.on('auction:resumed', ({ message }) => {
      setIsPaused(false)
      toast(message, 'success')
      loadRoom()
    })

    socket.on('auction:ended', ({ message }) => {
      setAuctionEnded(true)
      setIsPaused(false)
      toast(message, 'success')
    })

    socket.on('room:kicked', ({ kickedUserId, message }) => {
      if (kickedUserId === user._id) {
        toast('❌ You were removed by the host', 'error')
        setTimeout(() => navigate('/'), 2000)
      } else {
        toast(message, 'warning')
        loadRoom()
      }
    })

    // Keep-alive ping every 10 min
    const keepAlive = setInterval(() => {
      api.get('/').catch(() => {})
    }, 10 * 60 * 1000)

    return () => {
      clearInterval(keepAlive)
      disconnectSocket()
    }
  }, [roomId, token])

  // ─── Data loaders ─────────────────────────────────────────────────────────
  const loadRoom = async () => {
    try {
      const { data } = await api.get(`/rooms/${roomId}`)
      setRoom(data.room)
      setMessages(data.room.messages || [])
      if (data.room.status === 'paused') setIsPaused(true)
    } catch { navigate('/') }
  }

  const loadPlayers = async () => {
    try {
      const { data } = await api.get(`/players/${roomId}`)
      setPlayers(data.players)
    } catch {}
  }

  const loadMyTeam = async () => {
    try {
      const { data } = await api.get(`/teams/my/${roomId}`)
      setMyTeam(data.team)
    } catch {}
  }

  const loadTeams = async () => {
    try {
      const { data } = await api.get(`/teams/${roomId}`)
      setTeams(data.teams)
    } catch {}
  }

  const loadLeaderboard = async () => {
    try {
      const { data } = await api.get(`/leaderboard/${roomId}`)
      setLeaderboard(data.leaderboard || [])
    } catch {}
  }

  // ─── Actions ──────────────────────────────────────────────────────────────
  const handleStartAuction = async () => {
    try {
      await api.patch(`/rooms/${roomId}/start`)
      await loadRoom()
      socketRef.current?.emit('auction:start', { roomId })
      toast('🏏 Auction started!', 'success')
    } catch (err) {
      toast(err.response?.data?.message || 'Failed to start', 'error')
    }
  }

  const handlePause = () => {
    socketRef.current?.emit('auction:pause', { roomId, userId: user._id })
  }

  const handleResume = () => {
    socketRef.current?.emit('auction:resume', { roomId, userId: user._id })
  }

  const handleEndAuction = () => {
    if (window.confirm('Are you sure you want to end the auction?')) {
      socketRef.current?.emit('auction:end', { roomId, userId: user._id })
    }
  }

  const handleKick = (kickUserId, kickUserName) => {
    if (window.confirm(`Remove ${kickUserName} from the room?`)) {
      socketRef.current?.emit('room:kick', { roomId, userId: user._id, kickUserId })
    }
  }

  const handleBid = useCallback((amount) => {
    if (!socketRef.current) return
    socketRef.current.emit('bid:place', {
      roomId, userId: user._id, userName: user.name,
      teamId: myTeam?._id, amount,
    })
  }, [roomId, user, myTeam])

  const handleChat = useCallback((text) => {
    socketRef.current?.emit('chat:message', {
      roomId, userId: user._id, userName: user.name, text,
    })
  }, [roomId, user])

  const copyCode = () => {
    navigator.clipboard.writeText(room?.code || '')
    toast('Room code copied!', 'info')
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  if (!room) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-ipl-gold font-display text-3xl animate-pulse">Loading Room...</div>
    </div>
  )

  const auctionActive  = room.status === 'active'
  const auctionWaiting = room.status === 'waiting'
  const auctionPaused  = room.status === 'paused' || isPaused
  const canBid         = auctionActive && !isPaused && currentPlayer && !currentPlayer.sold

  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />

      {/* ── Header ── */}
      <header className="border-b border-ipl-border px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">←</button>
          <div className="min-w-0">
            <div className="font-display text-xl text-ipl-gold tracking-wide truncate">{room.name}</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <button onClick={copyCode}
                className="font-mono bg-gray-800 px-2 py-0.5 rounded hover:bg-gray-700">
                {room.code}
              </button>
              <span className={`badge ${
                auctionPaused ? 'bg-yellow-900/50 text-yellow-400' :
                auctionActive ? 'bg-green-900/50 text-green-400' :
                auctionEnded  ? 'bg-gray-700 text-gray-400' :
                                'bg-yellow-900/50 text-yellow-400'
              }`}>
                {auctionEnded ? 'Ended' : auctionPaused ? 'paused' : room.status}
              </span>
              <span className={`badge ${room.mode === 'points' ? 'bg-ipl-gold/20 text-ipl-gold' : 'bg-blue-900/40 text-blue-300'}`}>
                {room.mode === 'points' ? '🏆 Points' : '🤖 AI'}
              </span>
            </div>
          </div>
        </div>

        {/* Host controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-gray-400">{room.members?.length || 0} joined</span>

          {isHost && auctionWaiting && (
            <button onClick={handleStartAuction} disabled={room.mode === 'ai'}
              className="btn-primary py-1.5 px-4 text-sm">
              {room.mode === 'ai' ? '🤖 Soon' : '▶ Start'}
            </button>
          )}

          {isHost && (auctionActive || auctionPaused) && !auctionEnded && (
            <>
              {auctionPaused ? (
                <button onClick={handleResume} className="btn-primary py-1.5 px-4 text-sm">
                  ▶ Resume
                </button>
              ) : (
                <button onClick={handlePause} className="btn-ghost py-1.5 px-4 text-sm">
                  ⏸ Pause
                </button>
              )}
              <button onClick={handleEndAuction}
                className="bg-red-900/50 border border-red-700/50 text-red-300 font-semibold
                           py-1.5 px-4 text-sm rounded-xl hover:bg-red-800/50 transition-all">
                🏁 End
              </button>
            </>
          )}
        </div>
      </header>

      {/* ── Paused Banner ── */}
      {auctionPaused && !auctionEnded && (
        <div className="bg-yellow-900/30 border-b border-yellow-700/50 px-4 py-2 text-center text-yellow-300 text-sm">
          ⏸️ Auction is paused by host
          {isHost && (
            <button onClick={handleResume} className="ml-3 underline text-yellow-200">Resume</button>
          )}
        </div>
      )}

      {/* ── AI Mode Banner ── */}
      {room.mode === 'ai' && (
        <div className="bg-blue-900/30 border-b border-blue-700/50 px-4 py-2 text-center text-blue-300 text-sm">
          🚀 AI Auction Mode coming soon
        </div>
      )}

      {/* ── Sold Announcement Overlay ── */}
      {soldAnnouncement && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-green-900/95 border border-green-500 rounded-3xl p-8 text-center animate-bounce-in shadow-2xl max-w-sm mx-4">
            <div className="text-5xl mb-3">🎉</div>
            <div className="font-display text-3xl text-white">{soldAnnouncement.player?.name}</div>
            <div className="text-green-300 text-lg mt-1">SOLD to {soldAnnouncement.soldTo}</div>
            <div className="text-ipl-gold text-2xl font-bold mt-1">₹{soldAnnouncement.soldPrice}L</div>
          </div>
        </div>
      )}

      {/* ── Main layout ── */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        {/* Left column */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {/* Progress bar */}
          {totalPlayers > 0 && (
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-800 rounded-full h-2">
                <div className="bg-ipl-gold h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(playerIndex / totalPlayers) * 100}%` }} />
              </div>
              <span className="text-xs text-gray-400">{playerIndex}/{totalPlayers} players</span>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 bg-gray-900 rounded-xl p-1 overflow-x-auto">
            {TABS.map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all px-2 ${
                  activeTab === t ? 'bg-ipl-gold text-ipl-dark' : 'text-gray-400 hover:text-white'
                }`}>
                {TAB_LABELS[t]}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'auction' && (
            <div className="space-y-4">
              {auctionWaiting && !auctionEnded && (
                <div className="card p-8 text-center">
                  <div className="text-4xl mb-3">⏳</div>
                  <p className="font-semibold text-gray-300">
                    {isHost ? 'Press Start to begin the auction' : 'Waiting for host to start...'}
                  </p>
                  {isHost && room.mode !== 'ai' && (
                    <button onClick={handleStartAuction} className="btn-primary mt-4">▶ Start Auction</button>
                  )}
                </div>
              )}

              {auctionPaused && !auctionEnded && currentPlayer && (
                <div className="card p-8 text-center">
                  <div className="text-4xl mb-3">⏸️</div>
                  <p className="font-semibold text-yellow-300">Auction is paused</p>
                  <p className="text-gray-400 text-sm mt-1">Waiting for host to resume...</p>
                </div>
              )}

              {auctionEnded && (
                <div className="card p-8 text-center border-ipl-gold/40">
                  <div className="text-4xl mb-3">🏆</div>
                  <p className="font-display text-3xl text-ipl-gold">Auction Complete!</p>
                  <p className="text-gray-400 mt-2">Check the leaderboard for final standings</p>
                  <button onClick={() => setActiveTab('leaderboard')} className="btn-primary mt-4">
                    View Leaderboard
                  </button>
                </div>
              )}

              {currentPlayer && !auctionEnded && !auctionPaused && (
                <PlayerCard
                  player={currentPlayer}
                  currentBid={currentBid}
                  currentBidderName={currentBidderName}
                  timeLeft={timeLeft}
                  isActive={auctionActive}
                />
              )}

              {canBid && (
                <BidPanel
                  currentBid={currentBid}
                  myBudget={myTeam?.budget || 0}
                  onBid={handleBid}
                  disabled={!canBid}
                  timeLeft={timeLeft}
                  basePrice={currentPlayer?.basePrice}
                  currentBidderName={currentBidderName}
                />
              )}
            </div>
          )}

          {activeTab === 'squad' && (
            <div className="space-y-6">
              {teams.length === 0 ? (
                <div className="card p-8 text-center text-gray-500">
                  <div className="text-3xl mb-2">👕</div>
                  <p>No teams yet</p>
                </div>
              ) : (
                teams.map((team) => (
                  <Squad key={team._id} team={team} isMyTeam={team.owner?._id === user?._id} />
                ))
              )}
            </div>
          )}

          {activeTab === 'players' && <PlayersGrid players={players} />}
          {activeTab === 'leaderboard' && <Leaderboard leaderboard={leaderboard} mode={room.mode} />}
        </div>

        {/* Right column: desktop */}
        <div className="hidden lg:flex flex-col w-80 border-l border-ipl-border p-4">
          {/* Members with kick */}
          <div className="card p-3 mb-4">
            <div className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">
              Members ({room.members?.length || 0})
            </div>
            <div className="space-y-1.5">
              {room.members?.map((m) => (
                <div key={m._id || m} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    {m.name || 'Player'}
                    {(m._id || m) === (room.host?._id || room.host) && ' 👑'}
                  </span>
                  {isHost && (m._id || m) !== user._id && (
                    <button
                      onClick={() => handleKick(m._id || m, m.name)}
                      className="text-xs text-red-400 hover:text-red-300 transition-colors px-1"
                      title="Remove player">
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Chat messages={messages} onSend={handleChat} myName={user.name} />
          </div>
        </div>
      </div>

      {/* Mobile chat */}
      <div className="lg:hidden border-t border-ipl-border">
        <Chat messages={messages} onSend={handleChat} myName={user.name} />
      </div>
    </div>
  )
}