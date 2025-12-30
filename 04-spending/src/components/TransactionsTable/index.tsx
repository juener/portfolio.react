import * as RadixDialog from '@radix-ui/react-dialog'
import { Edit } from 'lucide-react'
import { useState } from 'react'
import { formatValue } from '@/format-values'
import { useGetTransactions } from '@/hooks/use-get-transactions'
import { TransactionModal } from '../TransactionsActions/TransactionModal'
import { TransactionsContainerStyled } from './styles'

export function TransactionsTable() {
	const { data: transactions } = useGetTransactions()

	const [openTransactionId, setOpenTransactionId] = useState<string | null>(null)

	return (
		<TransactionsContainerStyled>
			{transactions?.length === 0 && <p>No transactions found.</p>}

			{transactions && transactions.length > 0 && (
				<tbody>
					{transactions.map((transaction) => {
						const isOpen = openTransactionId === transaction.id
						return (
							<tr key={transaction.id}>
								<td>{transaction.category}</td>
								<td>{transaction.description}</td>
								<td>{transaction.dueDate}</td>
								<td>
									{transaction.currency} {formatValue(transaction.amountInCents)}
								</td>
								<td>
									<RadixDialog.Root
										open={isOpen}
										onOpenChange={(open) => {
											setOpenTransactionId(open ? transaction.id : null)
										}}
									>
										<RadixDialog.Trigger asChild>
											<Edit />
										</RadixDialog.Trigger>
										<TransactionModal
											transaction={transaction}
											onOpenChange={(open) => {
												setOpenTransactionId(open ? transaction.id : null)
											}}
										/>
									</RadixDialog.Root>
								</td>
							</tr>
						)
					})}
				</tbody>
			)}
		</TransactionsContainerStyled>
	)
}
