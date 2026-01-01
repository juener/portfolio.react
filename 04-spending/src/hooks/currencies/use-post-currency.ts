import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Currency, CurrencyCreation } from '@/@types/Currency'

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

async function postCurrency(currency: CurrencyCreation): Promise<Currency> {
	return fetch(`${BASE_URL}/currencies`, {
		method: 'POST',
		body: JSON.stringify(currency),
	}).then((response) => response.json())
}

export function usePostCurrency() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (currency: CurrencyCreation) => postCurrency(currency),
		onSuccess: (createdCurrency: Currency) => {
			queryClient.setQueryData(['currencies'], (oldCurrencies: Currency[]) => {
				return oldCurrencies ? [...oldCurrencies, createdCurrency] : [createdCurrency]
			})
		},
		onError: (error) => {
			queryClient.invalidateQueries({ queryKey: ['currencies'] })
			console.error(error)
		},
	})
}
