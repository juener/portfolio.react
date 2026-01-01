import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Transaction } from '@/@types/Transaction'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function deleteTransaction(id: string): Promise<string> {
	return fetch(`${BACKEND_BASE_URL}/transactions/${id}`, {
		method: 'DELETE',
	})
		.then((res) => res.json())
		.then((res) => res.id as string)
}

export function useDeleteTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: string) => deleteTransaction(id),
		onSuccess: (deletedId: string) => {
			queryClient.setQueryData(['transactions'], (oldTransactions: Transaction[]) => {
				return oldTransactions ? oldTransactions.filter((t) => t.id !== deletedId) : []
			})
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
			console.error(error)
		},
	})
}
