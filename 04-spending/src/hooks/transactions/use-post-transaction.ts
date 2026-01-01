import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Transaction, TransactionCreation } from '@/@types/Transaction'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function postTransaction(transaction: TransactionCreation): Promise<Transaction> {
	return fetch(`${BACKEND_BASE_URL}/transactions`, {
		method: 'POST',
		body: JSON.stringify(transaction),
	}).then((res) => res.json() as Promise<Transaction>)
}

export function usePostTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (transaction: TransactionCreation) => postTransaction(transaction),
		onSuccess: (newTransaction: TransactionCreation) => {
			queryClient.setQueryData(['transactions'], (oldTransactions: Transaction[]) => {
				return oldTransactions ? [...oldTransactions, newTransaction] : [newTransaction]
			})
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
			console.error(error)
		},
	})
}
