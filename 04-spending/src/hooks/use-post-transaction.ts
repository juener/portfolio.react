import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { TransactionCreation } from '@/@types/Transaction'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function postTransaction(transaction: TransactionCreation): Promise<void> {
	return fetch(`${BACKEND_BASE_URL}/transactions`, {
		method: 'POST',
		body: JSON.stringify(transaction),
	}).then((res) => res.json())
}

export function usePostTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (transaction: TransactionCreation) => postTransaction(transaction),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		},
		onError: (error) => {
			console.error(error)
		},
	})
}
