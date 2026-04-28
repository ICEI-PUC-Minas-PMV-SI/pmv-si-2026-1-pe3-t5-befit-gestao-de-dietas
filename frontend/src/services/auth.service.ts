import { api } from '../lib/axios'

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/users/sessions', payload)
    return data
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/users', payload)
    return data
  },
}
