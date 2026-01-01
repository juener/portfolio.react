import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Currency } from '@/@types/Currency'

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function putCurrency(currency: Currency) {
	return fetch(`${BASE_URL}/currencies`, {
		method: 'POST',
		body: JSON.stringify(currency),
	}).then((response) => response.json())
}

export function usePutCurrency() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (currency: Currency) => putCurrency(currency),
		onSuccess: (updatedCurrency: Currency) => {
			queryClient.setQueryData(['currencies'], (oldCurrencies: Currency[]) => {
				return oldCurrencies
					? oldCurrencies.map((c) => (c.id === updatedCurrency.id ? updatedCurrency : c))
					: [updatedCurrency]
			})
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['currencies'] })
			console.error(error)
		},
	})
}
