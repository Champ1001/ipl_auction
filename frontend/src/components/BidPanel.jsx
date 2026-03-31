import { useState } from 'react'

export default function BidPanel({ currentBid, myBudget, onBid, disabled, timeLeft }) {
  const [customAmt, setCustomAmt] = useState('')
  const [error, setError] = useState('')

  const bidClosed = disabled || timeLeft <= 1

  const placeBid = () => {
    setError('')
    const amount = customAmt ? parseInt(customAmt) : currentBid + 10

    if (!amount || amount <= 0) return setError('Enter a valid amount')
    if (amount <= currentBid) return setError(`Bid must be higher than ₹${currentBid}L`)
    if (amount > myBudget) return setError('Insufficient budget!')

    onBid(amount)
    setCustomAmt('')
  }

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base">Place Bid</h3>
        <div className="text-right">
          <div className="text-xs text-gray-500">Your Budget</div>
          <div className="text-ipl-gold font-bold">₹{myBudget?.toLocaleString()}L</div>
        </div>
      </div>

      {timeLeft <= 1 && timeLeft > 0 && (
        <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-3 text-center mb-3">
          <p className="text-red-400 text-sm font-bold">⏱️ Bidding closed!</p>
        </div>
      )}

      <div className="flex gap-2 mb-3">
        <input
          type="number"
          className="input flex-1"
          placeholder={`Min ₹${currentBid + 1}L`}
          value={customAmt}
          onChange={(e) => setCustomAmt(e.target.value)}
          disabled={bidClosed}
          min={currentBid + 1}
        />
      </div>

      <button
        onClick={placeBid}
        disabled={bidClosed}
        className="btn-primary w-full text-lg py-4"
      >
        {bidClosed
          ? timeLeft <= 1 ? '⏱️ Bidding Closed' : 'Auction Not Active'
          : `🔨 Bid ₹${customAmt ? customAmt : currentBid + 10}L`
        }
      </button>

      {error && (
        <p className="text-red-400 text-xs mt-2 text-center">{error}</p>
      )}
    </div>
  )
}