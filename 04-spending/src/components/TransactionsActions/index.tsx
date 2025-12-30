import { TransactionsActionsContainerStyled } from './styles'
import { TransactionAddAction } from './TransactionAddAction'
import { TransactionsFilter } from './TransactionsFilter'

type TransactionsActionsProps = {
	searchQuery: string
	onSearchChange: (value: string) => void
}

export function TransactionsActions({ searchQuery, onSearchChange }: TransactionsActionsProps) {
	return (
		<TransactionsActionsContainerStyled>
			<TransactionsFilter searchQuery={searchQuery} onSearchChange={onSearchChange} />
			<TransactionAddAction />
		</TransactionsActionsContainerStyled>
	)
}
