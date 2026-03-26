import { useState } from 'react'

const QUICK_INCREMENTS = [10, 25, 50, 100]

export default function BidPanel({ currentBid, myBudget, onBid, disabled, myTeamName }) {
  const [customAmt, setCustomAmt] = useState('')
  const [error, setError] = useState('')

  const placeBid = (amount) => {
    setError('')
    if (amount <= currentBid) {
      return setError(`Bid must be higher than ₹${currentBid}L`)
    }
    if (amount > myBudget) {
      return setError(`Insufficient budget! You have ₹${myBudget}L`)
    }
    onBid(amount)
    setCustomAmt('')
  }

  const handleCustom = () => {
    const amt = parseInt(customAmt)
    if (!amt || amt <= 0) return setError('Enter a valid amount')
    placeBid(amt)
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

      {/* Quick bid increments */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {QUICK_INCREMENTS.map((inc) => {
          const amount = currentBid + inc
          const canAfford = amount <= myBudget
          return (
            <button
              key={inc}
              onClick={() => placeBid(amount)}
              disabled={disabled || !canAfford}
              className={`py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 border ${
                canAfford && !disabled
                  ? 'border-ipl-gold/40 text-ipl-gold hover:bg-ipl-gold/10'
                  : 'border-gray-700 text-gray-600 cursor-not-allowed'
              }`}
            >
              +{inc}L
            </button>
          )
        })}
      </div>

      {/* Custom bid */}
      <div className="flex gap-2 mb-3">
        <input
          type="number"
          className="input flex-1 py-2.5"
          placeholder={`Min ₹${currentBid + 1}L`}
          value={customAmt}
          onChange={(e) => setCustomAmt(e.target.value)}
          disabled={disabled}
          min={currentBid + 1}
        />
        <button onClick={handleCustom} disabled={disabled || !customAmt}
          className="btn-primary py-2.5 px-5 whitespace-nowrap">
          Bid
        </button>
      </div>

      {/* Big bid button */}
      <button
        onClick={() => placeBid(currentBid + 10)}
        disabled={disabled || (currentBid + 10) > myBudget}
        className="btn-secondary w-full text-base"
      >
        🔨 Quick Bid ₹{currentBid + 10}L
      </button>

      {error && (
        <p className="text-red-400 text-xs mt-2 text-center">{error}</p>
      )}

      {disabled && (
        <p className="text-gray-500 text-xs mt-2 text-center">Auction not active</p>
      )}
    </div>
  )
}
