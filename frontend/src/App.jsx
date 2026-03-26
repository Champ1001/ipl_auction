import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Home from './pages/Home'
import AuctionRoom from './pages/AuctionRoom'
import Login from './pages/Login'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-ipl-gold text-2xl font-display animate-pulse">Loading...</div>
    </div>
  )
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/room/:roomId" element={<ProtectedRoute><AuctionRoom /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
