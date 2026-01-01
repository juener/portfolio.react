import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Category } from '@/@types/Category'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function putCategory(category: Category): Promise<Category> {
	return fetch(`${BACKEND_BASE_URL}/categories/${category.id}`, {
		method: 'PUT',
		body: JSON.stringify(category),
	}).then((res) => res.json())
}

export function usePutCategory() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (category: Category) => putCategory(category),
		onSuccess: (updatedCategory: Category) => {
			queryClient.setQueryData(['categories'], (oldCategories: Category[]) => {
				return oldCategories
					? oldCategories.map((c) => (c.id === updatedCategory.id ? updatedCategory : c))
					: [updatedCategory]
			})
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
			console.error(error)
		},
	})
}
