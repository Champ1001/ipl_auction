import { useState } from 'react'

/**
 * IPL-style bid increment rules:
 * 0 - 2 Cr (200L)     → +10L increments
 * 2 Cr - 5 Cr         → +20L increments  
 * 5 Cr - 10 Cr        → +25L increments
 * 10 Cr+              → +50L increments
 */
const getIncrement = (currentBid) => {
  if (currentBid < 200)  return 10
  if (currentBid < 500)  return 20
  if (currentBid < 1000) return 25
  return 50
}

const formatBid = (amount) => {
  if (amount >= 100) return `₹${(amount / 100).toFixed(2)} Cr`
  return `₹${amount}L`
}

export default function BidPanel({ currentBid, myBudget, onBid, disabled, timeLeft, basePrice, currentBidderName }) {
  const [error, setError] = useState('')

  const bidClosed = disabled || timeLeft <= 1

const increment = getIncrement(currentBid)
// If no one has bid yet (currentBidder is null), first bid = base price
// Otherwise next bid = current bid + increment
const nextBid = currentBidderName ? currentBid + increment : currentBid

  const placeBid = (amount) => {
    setError('')
    if (amount > myBudget) return setError('Insufficient budget!')
    onBid(amount)
  }

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base">Place Bid</h3>
        <div className="text-right">
          <div className="text-xs text-gray-500">Your Budget</div>
          <div className="text-ipl-gold font-bold">{formatBid(myBudget)}</div>
        </div>
      </div>

      {/* Current bid info */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-900/60 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-500 mb-1">Current Bid</div>
          <div className="font-bold text-green-400">{formatBid(currentBid)}</div>
        </div>
        <div className="bg-ipl-gold/10 border border-ipl-gold/20 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-500 mb-1">Next Bid</div>
          <div className="font-bold text-ipl-gold">{formatBid(nextBid)}</div>
        </div>
      </div>

      {/* Increment info */}
      <div className="text-xs text-gray-500 text-center mb-3">
        Current increment: <span className="text-white font-semibold">+{formatBid(increment)}</span>
      </div>

      {timeLeft <= 1 && timeLeft > 0 && (
        <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-3 text-center mb-3">
          <p className="text-red-400 text-sm font-bold">⏱️ Bidding closed!</p>
        </div>
      )}

      {/* Single bid button */}
      <button
        onClick={() => placeBid(nextBid)}
        disabled={bidClosed || nextBid > myBudget}
        className="btn-primary w-full text-lg py-4"
      >
        {bidClosed
          ? timeLeft <= 1 ? '⏱️ Bidding Closed' : 'Auction Not Active'
          : `🔨 Bid ${formatBid(nextBid)}`
        }
      </button>

      {error && (
        <p className="text-red-400 text-xs mt-2 text-center">{error}</p>
      )}

      {/* Increment scale reference */}
      <div className="mt-4 grid grid-cols-2 gap-1 text-xs text-gray-600">
        <div className={`rounded p-1 text-center ${currentBid < 200 ? 'text-ipl-gold' : ''}`}>
          Under 2Cr → +10L
        </div>
        <div className={`rounded p-1 text-center ${currentBid >= 200 && currentBid < 500 ? 'text-ipl-gold' : ''}`}>
          2-5Cr → +20L
        </div>
        <div className={`rounded p-1 text-center ${currentBid >= 500 && currentBid < 1000 ? 'text-ipl-gold' : ''}`}>
          5-10Cr → +25L
        </div>
        <div className={`rounded p-1 text-center ${currentBid >= 1000 ? 'text-ipl-gold' : ''}`}>
          10Cr+ → +50L
        </div>
      </div>
    </div>
  )
}