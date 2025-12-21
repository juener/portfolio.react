import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Transaction } from '@/@types/Transaction'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export async function putTransaction(transaction: Transaction): Promise<void> {
	return fetch(`${BACKEND_BASE_URL}/transactions/${transaction.id}`, {
		method: 'PUT',
		body: JSON.stringify(transaction),
	}).then((res) => res.json())
}

export function usePutTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (transaction: Transaction) => putTransaction(transaction),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		},
		onError: (error) => {
			console.error(error)
		},
	})
}
