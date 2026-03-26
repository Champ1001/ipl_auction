import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../utils/api'

const MODES = [
  { value: 'points', label: '🏆 Points Based', desc: 'Teams ranked by fantasy points' },
  { value: 'ai',     label: '🤖 Smart AI Based', desc: 'Coming Soon', disabled: true },
]

export default function Home() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [tab, setTab]           = useState('join')   // 'create' | 'join'
  const [roomName, setRoomName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [mode, setMode]         = useState('points')
  const [isPrivate, setIsPrivate] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [joinTeam, setJoinTeam] = useState('')
  const [publicRooms, setPublicRooms] = useState([])
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  useEffect(() => {
    fetchPublicRooms()
  }, [])

  const fetchPublicRooms = async () => {
    try {
      const { data } = await api.get('/rooms')
      setPublicRooms(data.rooms)
    } catch {}
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!roomName.trim() || !teamName.trim()) return setError('All fields required')
    setLoading(true); setError('')
    try {
      const { data } = await api.post('/rooms', { name: roomName, teamName, mode, isPrivate })
      navigate(`/room/${data.room._id}`)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create room')
    } finally { setLoading(false) }
  }

  const handleJoin = async (e) => {
    e.preventDefault()
    if (!joinCode.trim() || !joinTeam.trim()) return setError('All fields required')
    setLoading(true); setError('')
    try {
      const { data } = await api.post('/rooms/join', { code: joinCode, teamName: joinTeam })
      navigate(`/room/${data.room._id}`)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to join room')
    } finally { setLoading(false) }
  }

  const joinPublic = async (room) => {
    const team = prompt(`Enter your team name to join "${room.name}":`)
    if (!team?.trim()) return
    try {
      const { data } = await api.post('/rooms/join', { code: room.code, teamName: team })
      navigate(`/room/${data.room._id}`)
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to join')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-ipl-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🏏</span>
          <span className="font-display text-3xl text-ipl-gold tracking-wider">IPL AUCTION</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">
            Welcome, <span className="text-white font-semibold">{user?.name}</span>
          </span>
          <button onClick={logout} className="btn-ghost text-sm py-2 px-4">Logout</button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Create / Join form */}
          <div className="card p-6 animate-fade-in">
            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-gray-900 rounded-xl p-1">
              {['join', 'create'].map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setError('') }}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    tab === t ? 'bg-ipl-gold text-ipl-dark' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t === 'join' ? '🔗 Join Room' : '➕ Create Room'}
                </button>
              ))}
            </div>

            {error && (
              <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2 mb-4">
                {error}
              </div>
            )}

            {tab === 'join' ? (
              <form onSubmit={handleJoin} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Room Code</label>
                  <input className="input uppercase tracking-widest" placeholder="e.g. AB12CD"
                    value={joinCode} onChange={(e) => setJoinCode(e.target.value.toUpperCase())} maxLength={6} />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Your Team Name</label>
                  <input className="input" placeholder="e.g. Super Kings" value={joinTeam}
                    onChange={(e) => setJoinTeam(e.target.value)} maxLength={30} />
                </div>
                <button className="btn-primary w-full" disabled={loading}>
                  {loading ? 'Joining...' : '🚀 Join Room'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Room Name</label>
                  <input className="input" placeholder="e.g. Office Auction 2025" value={roomName}
                    onChange={(e) => setRoomName(e.target.value)} maxLength={40} />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Your Team Name</label>
                  <input className="input" placeholder="e.g. Mumbai Mavericks" value={teamName}
                    onChange={(e) => setTeamName(e.target.value)} maxLength={30} />
                </div>

                {/* Auction Mode */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Auction Mode</label>
                  <div className="space-y-2">
                    {MODES.map((m) => (
                      <label key={m.value}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          mode === m.value && !m.disabled
                            ? 'border-ipl-gold bg-ipl-gold/10'
                            : 'border-ipl-border hover:border-gray-500'
                        } ${m.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <input type="radio" name="mode" value={m.value}
                          checked={mode === m.value} disabled={m.disabled}
                          onChange={() => !m.disabled && setMode(m.value)}
                          className="mt-0.5 accent-yellow-400" />
                        <div>
                          <div className="text-sm font-semibold">{m.label}</div>
                          <div className="text-xs text-gray-400">{m.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {mode === 'ai' && (
                  <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4 text-center">
                    <p className="text-blue-300 text-sm font-semibold">🚀 AI Auction Mode coming soon</p>
                    <p className="text-blue-400 text-xs mt-1">Stay tuned for intelligent player valuation</p>
                  </div>
                )}

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)}
                    className="w-4 h-4 accent-yellow-400" />
                  <span className="text-sm text-gray-300">🔒 Private Room (invite only)</span>
                </label>

                <button className="btn-primary w-full" disabled={loading || mode === 'ai'}>
                  {loading ? 'Creating...' : '🏟️ Create Room'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Public Rooms */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">🌐 Public Rooms</h2>
              <button onClick={fetchPublicRooms} className="text-ipl-gold text-sm hover:underline">Refresh</button>
            </div>

            {publicRooms.length === 0 ? (
              <div className="card p-8 text-center text-gray-500">
                <div className="text-4xl mb-3">🏟️</div>
                <p>No public rooms yet. Create one!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {publicRooms.map((room) => (
                  <div key={room._id} className="card p-4 flex items-center justify-between hover:border-gray-600 transition-colors">
                    <div>
                      <div className="font-semibold">{room.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        Host: {room.host?.name} · {room.members?.length || 0} players ·{' '}
                        <span className={`badge ${room.mode === 'points' ? 'bg-ipl-gold/20 text-ipl-gold' : 'bg-blue-900/40 text-blue-300'}`}>
                          {room.mode === 'points' ? 'Points' : 'AI'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Code: <span className="font-mono text-white">{room.code}</span> ·{' '}
                        <span className={`${room.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {room.status}
                        </span>
                      </div>
                    </div>
                    <button onClick={() => joinPublic(room)} className="btn-secondary text-sm py-2 px-4">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
