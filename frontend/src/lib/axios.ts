import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL

if (!backendUrl) {
  throw new Error('BACKEND_URL não definida. Verifique o arquivo .env.')
}

export const api = axios.create({
  baseURL: backendUrl,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@befit:token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('@befit:token')
      localStorage.removeItem('@befit:user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
