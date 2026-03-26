import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { guestLogin } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name.trim().length < 2) return setError('Name must be at least 2 characters')
    setLoading(true)
    setError('')
    try {
      await guestLogin(name.trim())
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-ipl-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ipl-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="text-7xl mb-4">🏏</div>
          <h1 className="font-display text-6xl text-ipl-gold tracking-wider">IPL AUCTION</h1>
          <p className="text-gray-400 mt-2 font-body">Live Auction Platform</p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold mb-1">Enter the Arena</h2>
          <p className="text-gray-400 text-sm mb-6">Guest login — just your name to get started</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Your Name</label>
              <input
                className="input"
                placeholder="e.g. Rahul, Priya..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                maxLength={30}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full text-lg" disabled={loading}>
              {loading ? 'Entering...' : '🚀 Enter Auction'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            No account needed · Your session lasts 7 days
          </p>
        </div>
      </div>
    </div>
  )
}
