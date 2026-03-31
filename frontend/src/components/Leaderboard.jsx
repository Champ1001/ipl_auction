const MEDALS = ['🥇', '🥈', '🥉']

export default function Leaderboard({ leaderboard, mode }) {
  if (mode === 'ai') {
    return (
      <div className="card p-8 text-center">
        <div className="text-4xl mb-3">🤖</div>
        <p className="font-semibold text-gray-300">Leaderboard coming soon</p>
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
    <div className="space-y-3">
      {/* Rules reminder */}
      <div className="card p-3 border-ipl-gold/20 text-xs text-gray-400 space-y-1">
        <p className="text-ipl-gold font-semibold mb-1">📋 Squad Rules</p>
        <p>• Max 25 players · Max 8 overseas bought · Max 4 overseas in Top 12</p>
        <p>• Min: 3 Batsmen · 3 Bowlers · 2 All-Rounders · 1 WK</p>
        <p>• Points calculated from Top 12 players only</p>
      </div>

      {leaderboard.map((entry, i) => (
        <div key={i}
          className={`card p-4 animate-slide-up ${i === 0 ? 'border-ipl-gold/50 bg-ipl-gold/5' : ''}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{i < 3 ? MEDALS[i] : `#${i + 1}`}</div>
              <div>
                <div className="font-bold">{entry.teamName}</div>
                <div className="text-xs text-gray-400">{entry.ownerName}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-ipl-gold font-bold text-xl">{entry.totalPoints} pts</div>
              <div className="text-xs text-gray-400">Top 12 points</div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="bg-gray-900/60 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-500">Players</div>
              <div className="font-bold text-sm">{entry.playerCount}/25</div>
            </div>
            <div className="bg-gray-900/60 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-500">Overseas</div>
              <div className={`font-bold text-sm ${entry.overseas > 8 ? 'text-red-400' : 'text-white'}`}>
                {entry.overseas}/8
              </div>
            </div>
            <div className="bg-gray-900/60 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-500">Budget Left</div>
              <div className="font-bold text-sm text-ipl-gold">₹{entry.budget?.toLocaleString()}L</div>
            </div>
            <div className="bg-gray-900/60 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-500">Squad OK</div>
              <div className="font-bold text-sm">{entry.meetsMinimum ? '✅' : '⚠️'}</div>
            </div>
          </div>

          {/* Squad requirements */}
          {entry.requirements && (
            <div className="grid grid-cols-4 gap-1">
              {[
                { label: 'BAT', key: 'batsmen',     min: 3 },
                { label: 'BOW', key: 'bowlers',     min: 3 },
                { label: 'AR',  key: 'allRounders', min: 2 },
                { label: 'WK',  key: 'wks',         min: 1 },
              ].map(({ label, key, min }) => {
                const req = entry.requirements[key];
                return (
                  <div key={key}
                    className={`rounded-lg p-1.5 text-center text-xs border ${
                      req?.met ? 'border-green-700/50 bg-green-900/20' : 'border-red-700/50 bg-red-900/20'
                    }`}>
                    <div className="text-gray-400">{label}</div>
                    <div className={req?.met ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                      {req?.current}/{min}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Top 12 players */}
          {entry.top12Players?.length > 0 && (
            <div className="mt-3">
              <div className="text-xs text-gray-500 mb-1">⭐ Top 12:</div>
              <div className="flex flex-wrap gap-1">
                {entry.top12Players.map((name, j) => (
                  <span key={j} className="badge bg-gray-800 text-gray-300 text-xs">{name}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}