import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('@befit:user')
    return stored ? JSON.parse(stored) : null
  })

  function login(user: User, token: string) {
    localStorage.setItem('@befit:token', token)
    localStorage.setItem('@befit:user', JSON.stringify(user))
    setUser(user)
  }

  function logout() {
    localStorage.removeItem('@befit:token')
    localStorage.removeItem('@befit:user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
