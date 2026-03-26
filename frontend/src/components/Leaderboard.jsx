const MEDALS = ['🥇', '🥈', '🥉']

export default function Leaderboard({ leaderboard, mode, myUserId }) {
  if (mode === 'ai') {
    return (
      <div className="card p-8 text-center">
        <div className="text-4xl mb-3">🤖</div>
        <p className="font-semibold text-gray-300">Leaderboard coming soon</p>
        <p className="text-gray-500 text-sm mt-1">Available in AI Auction Mode</p>
      </div>
    )
  }

  if (!leaderboard || leaderboard.length === 0) {
    return (
      <div className="card p-8 text-center text-gray-500">
        <div className="text-3xl mb-2">📊</div>
        <p>Leaderboard will appear once bidding starts</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {leaderboard.map((entry, i) => (
        <div
          key={entry.teamName + i}
          className={`card p-4 flex items-center gap-4 transition-all animate-slide-up ${
            i === 0 ? 'border-ipl-gold/50 bg-ipl-gold/5' : ''
          }`}
        >
          {/* Rank */}
          <div className="w-8 text-center text-xl font-display">
            {i < 3 ? MEDALS[i] : <span className="text-gray-400 text-base">#{i + 1}</span>}
          </div>

          {/* Team info */}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm truncate">{entry.teamName}</div>
            <div className="text-xs text-gray-400">{entry.ownerName}</div>
          </div>

          {/* Stats */}
          <div className="text-right">
            <div className="text-ipl-gold font-bold text-lg">{entry.totalPoints} pts</div>
            <div className="text-xs text-gray-400">
              {entry.playerCount} players · ₹{entry.budget?.toLocaleString()}L left
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
