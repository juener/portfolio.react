import * as RadixDialog from '@radix-ui/react-dialog'
import { Edit } from 'lucide-react'
import { formatValue } from '@/format-values'
import { useGetTransactions } from '@/hooks/use-get-transactions'
import { TransactionModal } from '../TransactionsActions/TransactionModal'
import { TransactionsContainerStyled } from './styles'

export function TransactionsTable() {
	const { data: transactions } = useGetTransactions()

	return (
		<TransactionsContainerStyled>
			{transactions?.length === 0 && <p>No transactions found.</p>}

			{transactions && transactions.length > 0 && (
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td>{transaction.category}</td>
							<td>{transaction.description}</td>
							<td>{transaction.dueDate}</td>
							<td>
								{transaction.currency} {formatValue(transaction.amountInCents)}
							</td>
							<td>
								<RadixDialog.Root>
									<RadixDialog.Trigger asChild>
										<Edit />
									</RadixDialog.Trigger>
									<TransactionModal transaction={transaction} />
								</RadixDialog.Root>
							</td>
						</tr>
					))}
				</tbody>
			)}
		</TransactionsContainerStyled>
	)
}
