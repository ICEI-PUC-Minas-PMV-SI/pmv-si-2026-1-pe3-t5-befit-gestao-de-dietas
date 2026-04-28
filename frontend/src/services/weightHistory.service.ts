import { api } from '../lib/axios'

export interface WeightHistory {
  id: string
  weight: number
  bmi: number
  recorded_at: string
}

export interface CreateWeightHistoryPayload {
  weight: number
  bmi: number
}

export const weightHistoryService = {
  async list(): Promise<WeightHistory[]> {
    const { data } = await api.get<WeightHistory[]>('/weight-histories')
    return data
  },

  async create(payload: CreateWeightHistoryPayload): Promise<WeightHistory> {
    const { data } = await api.post<WeightHistory>('/weight-histories', payload)
    return data
  },
}
