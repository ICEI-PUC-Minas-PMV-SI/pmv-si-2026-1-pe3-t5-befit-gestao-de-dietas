import { api } from '../lib/axios'

export interface MealPlanPayload {
  start_date: string
  end_date: string
}

export interface MealPlanItemPayload {
  meal_plan_id: string
  meal_id: string
  day_of_week: number
  meal_type: string
}

export interface MealPlan {
  id: string
  start_date: string
  end_date: string
  meal_plan_items: MealPlanItem[]
}

export interface MealPlanItem {
  id: string
  day_of_week: number
  meal_type: string
  meal: {
    id: string
    name: string
    total_calories: number
  }
}

export const mealPlanService = {
  async list(): Promise<MealPlan[]> {
    const { data } = await api.get<MealPlan[]>('/meal-plans')
    return data
  },

  async create(payload: MealPlanPayload): Promise<MealPlan> {
    const { data } = await api.post<MealPlan>('/meal-plans', payload)
    return data
  },

  async addItem(payload: MealPlanItemPayload): Promise<MealPlanItem> {
    const { data } = await api.post<MealPlanItem>('/meal-plan-items', payload)
    return data
  },

  async removeItem(id: string): Promise<void> {
    await api.delete(`/meal-plan-items/${id}`)
  },
}
