import { TransactionsActionsContainerStyled } from './styles'
import { TransactionAddAction } from './TransactionAddAction'
import { TransactionsFilter } from './TransactionsFilter'

export function TransactionsActions() {
	return (
		<TransactionsActionsContainerStyled>
			<TransactionsFilter />
			<TransactionAddAction />
		</TransactionsActionsContainerStyled>
	)
}
