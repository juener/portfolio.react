import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Transaction } from '@/@types/Transaction'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export async function putTransaction(transaction: Transaction): Promise<Transaction> {
	return fetch(`${BACKEND_BASE_URL}/transactions/${transaction.id}`, {
		method: 'PUT',
		body: JSON.stringify(transaction),
	}).then((res) => res.json() as Promise<Transaction>)
}

export function usePutTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (transaction: Transaction): Promise<Transaction> => putTransaction(transaction),
		onSuccess: (updatedTransaction: Transaction) => {
			queryClient.setQueryData(['transactions'], (oldTransactions: Transaction[]) => {
				return oldTransactions
					? oldTransactions.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
					: [updatedTransaction]
			})
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
			console.error(error)
		},
	})
}
