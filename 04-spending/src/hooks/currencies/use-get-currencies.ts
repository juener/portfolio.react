import { useQuery } from '@tanstack/react-query'
import type { Currency } from '@/@types/Currency'

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function getCurrencies(): Promise<Currency[]> {
	return fetch(`${BASE_URL}/currencies`).then((response) => response.json())
}

export function useGetCurrencies() {
	return useQuery({
		queryKey: ['currencies'],
		queryFn: () => getCurrencies(),
	})
}
