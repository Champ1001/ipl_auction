import { createContext, useContext, useState, useEffect } from 'react'
import api from '../utils/api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser]   = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('ipl_token'))
  const [loading, setLoading] = useState(true)

  // On mount, verify token and hydrate user
  useEffect(() => {
    const init = async () => {
      if (token) {
        try {
          const { data } = await api.get('/auth/me')
          setUser(data.user)
        } catch {
          logout()
        }
      }
      setLoading(false)
    }
    init()
  }, [])

  const guestLogin = async (name) => {
    const { data } = await api.post('/auth/guest', { name })
    localStorage.setItem('ipl_token', data.token)
    setToken(data.token)
    setUser(data.user)
    return data
  }

  const logout = () => {
    localStorage.removeItem('ipl_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, guestLogin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
