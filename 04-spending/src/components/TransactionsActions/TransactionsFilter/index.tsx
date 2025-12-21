import { Input } from '@/components/Input'
import { Button } from '../../Button'
import { TransactionsFilterContainerStyled } from './styles'

export function TransactionsFilter() {
	return (
		<TransactionsFilterContainerStyled>
			<Input type='text' placeholder='Search' />
			<Button>Search</Button>
		</TransactionsFilterContainerStyled>
	)
}
