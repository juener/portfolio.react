import { useQuery } from '@tanstack/react-query'
import type { Transaction } from '@/@types/Transaction'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function getTransactions(): Promise<Transaction[]> {
	return fetch(`${BACKEND_BASE_URL}/transactions`).then((res) => res.json())
}

export function useGetTransactions() {
	return useQuery({
		queryKey: ['transactions'],
		queryFn: () => getTransactions(),
	})
}
