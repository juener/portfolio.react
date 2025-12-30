import { useMemo } from 'react'
import type { Currency } from '@/@types/Currency'
import { useGetTransactions } from '@/hooks/use-get-transactions'
import { SummaryCard } from './SummaryCard'
import { SummarySectionContainerStyled } from './styles'

const CONVERSIONS_BY_CURRENCY: Record<Currency, Record<Currency, number>> = {
	USD: {
		USD: 1,
		BRL: 5.5,
		EUR: 0.85,
		GBP: 0.75,
	},
	BRL: {
		USD: 0.18,
		BRL: 1,
		EUR: 0.15,
		GBP: 0.13,
	},
	EUR: {
		USD: 1.18,
		BRL: 6.5,
		EUR: 1,
		GBP: 0.9,
	},
	GBP: {
		USD: 1.3,
		BRL: 7.5,
		EUR: 1.1,
		GBP: 1,
	},
}

export function SummarySection() {
	const { data: transactions } = useGetTransactions()

	const totalsByCurrency = useMemo(
		() =>
			transactions?.reduce(
				(acc, transaction) => {
					const sourceCurrency = transaction.currency
					const amount = Number(transaction.amountInCents)

					acc[sourceCurrency].value += amount

					const currencies: Currency[] = ['USD', 'BRL', 'EUR', 'GBP']
					for (const targetCurrency of currencies) {
						const conversionRate = CONVERSIONS_BY_CURRENCY[sourceCurrency][targetCurrency]
						acc[targetCurrency].convertedValue += amount * conversionRate
					}

					return acc
				},
				{
					USD: {
						value: 0,
						convertedValue: 0,
					},
					BRL: {
						value: 0,
						convertedValue: 0,
					},
					EUR: {
						value: 0,
						convertedValue: 0,
					},
					GBP: {
						value: 0,
						convertedValue: 0,
					},
				} as {
					USD: { value: number; convertedValue: number }
					BRL: { value: number; convertedValue: number }
					EUR: { value: number; convertedValue: number }
					GBP: { value: number; convertedValue: number }
				},
			) ?? {
				USD: { value: 0, convertedValue: 0 },
				BRL: { value: 0, convertedValue: 0 },
				EUR: { value: 0, convertedValue: 0 },
				GBP: { value: 0, convertedValue: 0 },
			},
		[transactions],
	)

	return (
		<SummarySectionContainerStyled>
			<SummaryCard
				currency='USD'
				value={totalsByCurrency.USD.value}
				convertedValue={totalsByCurrency.USD.convertedValue}
			/>
			<SummaryCard
				currency='BRL'
				value={totalsByCurrency.BRL.value}
				convertedValue={totalsByCurrency.BRL.convertedValue}
			/>
			<SummaryCard
				currency='EUR'
				value={totalsByCurrency.EUR.value}
				convertedValue={totalsByCurrency.EUR.convertedValue}
			/>
			<SummaryCard
				currency='GBP'
				value={totalsByCurrency.GBP.value}
				convertedValue={totalsByCurrency.GBP.convertedValue}
			/>
		</SummarySectionContainerStyled>
	)
}
