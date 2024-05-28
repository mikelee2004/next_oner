import { Category } from '../types/category'
import { Product } from '../types/product'

const URL = 'http://localhost:3001/api'

export async function fetchCategories(): Promise<Category[]> {
    const response = await fetch(`${URL}/category`)
    if (!response.ok) throw new Error('Ошибка загрузки категорий!')
    return response.json()
}

export async function fetchProduct(): Promise<Product[]> {
    const response = await fetch(`${URL}/product`)
    if (!response.ok) throw new Error('Ошибка загрузки категорий')
    console.log(response)
    return response.json()
}