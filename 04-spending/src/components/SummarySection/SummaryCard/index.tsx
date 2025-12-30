import { formatValue } from '@/format-values'
import { SummaryCardContainerStyled } from './styles'

interface SummaryCardProps {
	currency: 'USD' | 'BRL' | 'EUR' | 'GBP'
	value: number
	convertedValue: number
}

export function SummaryCard({ currency, value, convertedValue }: SummaryCardProps) {
	return (
		<SummaryCardContainerStyled>
			<p>
				<span>Rows by {currency}:</span>
				{formatValue(value)}
			</p>
			<p>
				<span>Total converted:</span>
				{formatValue(convertedValue)}
			</p>
		</SummaryCardContainerStyled>
	)
}
