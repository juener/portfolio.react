import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Category, CategoryCreation } from '@/@types/Category'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function postCategory(category: CategoryCreation): Promise<Category> {
	return fetch(`${BACKEND_BASE_URL}/categories`, {
		method: 'POST',
		body: JSON.stringify(category),
	}).then((res) => res.json())
}

export function usePostCategory() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (category: CategoryCreation) => postCategory(category),
		onSuccess: (newCategory: Category) => {
			queryClient.setQueryData(['categories'], (old: Category[]) => [...old, newCategory])
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
			console.error(error)
		},
	})
}
