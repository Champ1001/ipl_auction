import { useState, useEffect, useRef } from 'react'

export default function Chat({ messages, onSend, myName }) {
  const [text, setText] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onSend(text.trim())
    setText('')
  }

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="card flex flex-col h-72">
      <div className="px-4 py-3 border-b border-ipl-border">
        <h3 className="font-bold text-sm">💬 Room Chat</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.length === 0 && (
          <p className="text-gray-600 text-xs text-center mt-4">No messages yet. Say hi! 👋</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 text-sm animate-fade-in ${msg.user === myName ? 'flex-row-reverse' : ''}`}>
            <div className={`max-w-[75%] rounded-xl px-3 py-1.5 ${
              msg.user === myName
                ? 'bg-ipl-blue text-white'
                : 'bg-gray-800 text-gray-100'
            }`}>
              {msg.user !== myName && (
                <span className="text-ipl-gold text-xs font-semibold block">{msg.user}</span>
              )}
              <span>{msg.text}</span>
              <span className="text-xs opacity-40 ml-2">{formatTime(msg.time)}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="flex gap-2 p-3 border-t border-ipl-border">
        <input
          className="input flex-1 py-2 text-sm"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={200}
        />
        <button type="submit" disabled={!text.trim()}
          className="btn-primary py-2 px-4 text-sm">
          Send
        </button>
      </form>
    </div>
  )
}
