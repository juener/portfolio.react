import { Input } from '@/components/Input'
import { TransactionsFilterContainerStyled } from './styles'

type TransactionsFilterProps = {
	searchQuery: string
	onSearchChange: (value: string) => void
}

export function TransactionsFilter({ searchQuery, onSearchChange }: TransactionsFilterProps) {
	return (
		<TransactionsFilterContainerStyled>
			<Input
				type='text'
				placeholder='Search by description or category...'
				value={searchQuery}
				onChange={(e) => onSearchChange(e.target.value)}
			/>
		</TransactionsFilterContainerStyled>
	)
}
