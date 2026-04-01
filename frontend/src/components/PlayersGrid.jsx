export default function PlayersGrid({ players }) {
  const sold   = players.filter(p => p.sold)
  const unsold = players.filter(p => !p.sold)

  return (
    <div>
      <div className="flex gap-4 mb-4 text-sm text-gray-400">
        <span>Total: <b className="text-white">{players.length}</b></span>
        <span>Sold: <b className="text-green-400">{sold.length}</b></span>
        <span>Remaining: <b className="text-ipl-gold">{unsold.length}</b></span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {players.map((p) => (
          <div key={p._id}
            className={`rounded-xl p-3 border text-sm transition-all ${
              p.sold
                ? 'bg-green-900/20 border-green-700/30 opacity-70'
                : 'bg-gray-900/60 border-ipl-border'
            }`}
          >
            <div className="font-semibold truncate">{p.name}</div>
            <div className="text-xs text-gray-400">{p.role} · {p.ipl_team}</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-gray-500 text-xs">{p.country}</span>
              {p.sold
                ? <span className="text-green-400 text-xs font-semibold">₹{p.soldPrice}L ✓</span>
                : <span className="text-gray-500 text-xs">₹{p.basePrice}L</span>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}