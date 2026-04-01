export default function Squad({ team, isMyTeam }) {
  if (!team) return null

  return (
    <div className="space-y-3">
      {/* Team header */}
      <div className={`card p-4 flex items-center justify-between ${isMyTeam ? 'border-ipl-gold/50' : ''}`}>
        <div>
          <div className="flex items-center gap-2">
            <div className="font-bold text-lg">{team.name}</div>
            {isMyTeam && <span className="badge bg-ipl-gold/20 text-ipl-gold">You</span>}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">
            Owner: {team.owner?.name} · {team.playersBought?.length || 0} players
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Remaining Budget</div>
          <div className="text-ipl-gold font-bold text-xl">₹{team.budget?.toLocaleString()}L</div>
        </div>
      </div>

      {/* Players — no points shown */}
      {(!team.playersBought || team.playersBought.length === 0) ? (
        <div className="card p-4 text-center text-gray-500 text-sm">
          No players yet 🎯
        </div>
      ) : (
        <div className="space-y-2">
          {team.playersBought.map((pb, i) => (
            <div key={i} className="card px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">{pb.player?.name || 'Unknown'}</div>
                <div className="text-xs text-gray-400">{pb.player?.role} · {pb.player?.ipl_team}</div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-bold text-sm">₹{pb.pricePaid}L</div>
                {/* NO individual points shown */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Totals — only show total points, not per player */}
      {team.playersBought?.length > 0 && (
        <div className="card p-4 grid grid-cols-2 gap-4 border-ipl-gold/20">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Total Spent</div>
            <div className="font-bold text-white">
              ₹{team.playersBought.reduce((s, pb) => s + (pb.pricePaid || 0), 0).toLocaleString()}L
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Total Points</div>
            <div className="font-bold text-ipl-gold text-lg">{team.totalPoints}</div>
          </div>
        </div>
      )}
    </div>
  )
}