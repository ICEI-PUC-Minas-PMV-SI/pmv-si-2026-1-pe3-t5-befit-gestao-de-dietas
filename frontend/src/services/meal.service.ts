import { api } from '../lib/axios'

export interface Meal {
  id: string
  name: string
  description?: string
  complexity: string
  preparation_time: number
  total_calories: number
  total_proteins: number
  total_carbs: number
  total_fats: number
  meal_ingredients: MealIngredient[]
}

export interface MealIngredient {
  id: string
  quantity: number
  food: {
    id: string
    name: string
    serving_unit: string
    calories: number
  }
}

export interface CreateMealPayload {
  name: string
  description?: string
  complexity: string
  preparation_time: number
}

export const mealService = {
  async list(): Promise<Meal[]> {
    const { data } = await api.get<Meal[]>('/meals')
    return data
  },

  async getById(id: string): Promise<Meal> {
    const { data } = await api.get<Meal>(`/meals/${id}`)
    return data
  },

  async create(payload: CreateMealPayload): Promise<Meal> {
    const { data } = await api.post<Meal>('/meals', payload)
    return data
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/meals/${id}`)
  },
}
