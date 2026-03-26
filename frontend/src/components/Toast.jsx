import { useState, useEffect, useCallback } from 'react'

let toastFn = null

export const toast = (msg, type = 'info') => {
  if (toastFn) toastFn(msg, type)
}

const COLORS = {
  info:    'bg-gray-800 border-gray-600 text-white',
  success: 'bg-green-900/80 border-green-600 text-green-100',
  error:   'bg-red-900/80 border-red-600 text-red-100',
  warning: 'bg-yellow-900/80 border-yellow-600 text-yellow-100',
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((msg, type) => {
    const id = Date.now()
    setToasts(prev => [...prev.slice(-4), { id, msg, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500)
  }, [])

  useEffect(() => { toastFn = addToast }, [addToast])

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 pointer-events-none">
      {toasts.map(t => (
        <div key={t.id}
          className={`border rounded-xl px-4 py-3 text-sm font-medium shadow-xl animate-slide-up max-w-xs ${COLORS[t.type]}`}>
          {t.msg}
        </div>
      ))}
    </div>
  )
}
