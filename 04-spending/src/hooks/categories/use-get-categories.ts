import { useQuery } from '@tanstack/react-query'
import type { Category } from '@/@types/Category'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function getCategories(): Promise<Category[]> {
	return fetch(`${BACKEND_BASE_URL}/categories`).then((res) => res.json())
}

export function useGetCategories() {
	return useQuery({
		queryKey: ['categories'],
		queryFn: () => getCategories(),
	})
}
