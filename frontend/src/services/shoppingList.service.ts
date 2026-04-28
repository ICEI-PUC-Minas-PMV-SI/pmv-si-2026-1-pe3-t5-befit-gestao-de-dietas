import { api } from '../lib/axios'

export interface ShoppingItem {
  id: string
  quantity_needed: number
  is_purchased: boolean
  created_at: string
  food: {
    id: string
    name: string
    serving_unit: string
  }
}

export interface CreateShoppingItemPayload {
  food_id: string
  quantity_needed: number
}

export const shoppingListService = {
  async list(): Promise<ShoppingItem[]> {
    const { data } = await api.get<ShoppingItem[]>('/shopping-lists')
    return data
  },

  async create(payload: CreateShoppingItemPayload): Promise<ShoppingItem> {
    const { data } = await api.post<ShoppingItem>('/shopping-lists', payload)
    return data
  },

  async togglePurchased(id: string, is_purchased: boolean): Promise<ShoppingItem> {
    const { data } = await api.patch<ShoppingItem>(`/shopping-lists/${id}`, { is_purchased })
    return data
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/shopping-lists/${id}`)
  },
}
