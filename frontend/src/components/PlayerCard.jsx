const ROLE_COLORS = {
  'Batsman':        'bg-blue-900/50 text-blue-300',
  'Bowler':         'bg-red-900/50 text-red-300',
  'All-Rounder':    'bg-purple-900/50 text-purple-300',
  'Wicket-Keeper':  'bg-yellow-900/50 text-yellow-300',
}

const TEAM_COLORS = {
  MI: 'text-blue-400', CSK: 'text-yellow-400', RCB: 'text-red-400',
  KKR: 'text-purple-400', DC: 'text-blue-300', SRH: 'text-orange-400',
  RR: 'text-pink-400', GT: 'text-teal-400', LSG: 'text-cyan-400', PBKS: 'text-red-300',
}

export default function PlayerCard({ player, currentBid, currentBidderName, timeLeft, isActive }) {
  if (!player) return null

  const urgency = timeLeft <= 3 ? 'text-red-400 animate-pulse-fast' :
                  timeLeft <= 5 ? 'text-orange-400' : 'text-ipl-gold'

  return (
    <div className={`card p-6 ${isActive ? 'border-ipl-gold/50 shadow-lg shadow-ipl-gold/10' : ''}`}>
      {/* Player header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="font-display text-4xl tracking-wide text-white">{player.name}</h2>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className={`badge ${ROLE_COLORS[player.role] || 'bg-gray-700 text-gray-300'}`}>
              {player.role}
            </span>
            <span className={`text-sm font-semibold ${TEAM_COLORS[player.ipl_team] || 'text-gray-400'}`}>
              {player.ipl_team}
            </span>
            <span className="text-gray-500 text-sm">{player.country}</span>
          </div>
        </div>

        {/* Timer */}
        {isActive && (
          <div className="text-center">
            <div className={`font-display text-5xl ${urgency}`}>{timeLeft}</div>
            <div className="text-xs text-gray-500">seconds</div>
          </div>
        )}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3 my-4">
        <div className="bg-gray-900/60 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-500 mb-1">Base Price</div>
          <div className="font-bold text-white">₹{player.basePrice}L</div>
        </div>
        <div className="bg-ipl-gold/10 border border-ipl-gold/20 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-500 mb-1">Points</div>
          <div className="font-bold text-ipl-gold text-lg">{player.points}</div>
        </div>
        <div className="bg-gray-900/60 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-500 mb-1">Current Bid</div>
          <div className="font-bold text-green-400">₹{currentBid}L</div>
        </div>
      </div>

      {/* Current bidder */}
      {currentBidderName && (
        <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-3 text-center animate-slide-up">
          <span className="text-green-400 text-sm">
            🔥 Highest bid by <span className="font-bold">{currentBidderName}</span>
          </span>
        </div>
      )}
    </div>
  )
}
