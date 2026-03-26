import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ipl-auction-odi1.onrender.com/api',
})

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ipl_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
