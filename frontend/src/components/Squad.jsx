export default function Squad({ team }) {
  if (!team) return (
    <div className="card p-8 text-center text-gray-500">
      <div className="text-3xl mb-2">👕</div>
      <p>Your team data is loading...</p>
    </div>
  )

  return (
    <div className="space-y-4">
      {/* Team header */}
      <div className="card p-4 flex items-center justify-between">
        <div>
          <div className="font-bold text-lg">{team.name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{team.playersBought?.length || 0} players signed</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Remaining Budget</div>
          <div className="text-ipl-gold font-bold text-xl">₹{team.budget?.toLocaleString()}L</div>
        </div>
      </div>

      {/* Players */}
      {(!team.playersBought || team.playersBought.length === 0) ? (
        <div className="card p-6 text-center text-gray-500 text-sm">
          No players yet. Start bidding! 🎯
        </div>
      ) : (
        <div className="space-y-2">
          {team.playersBought.map((pb, i) => (
            <div key={i} className="card px-4 py-3 flex items-center justify-between animate-slide-up">
              <div>
                <div className="font-semibold text-sm">{pb.player?.name || 'Unknown'}</div>
                <div className="text-xs text-gray-400">{pb.player?.role} · {pb.player?.ipl_team}</div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-bold text-sm">₹{pb.pricePaid}L</div>
                <div className="text-xs text-ipl-gold">{pb.player?.points} pts</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Totals */}
      {team.playersBought?.length > 0 && (
        <div className="card p-4 grid grid-cols-2 gap-4 border-ipl-gold/30">
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
