import { useMutation, useQueryClient } from '@tanstack/react-query'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function deleteTransaction(id: string): Promise<void> {
	return fetch(`${BACKEND_BASE_URL}/transactions/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json())
}

export function useDeleteTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: string) => deleteTransaction(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		},
		onError: (error) => {
			console.error(error)
		},
	})
}
