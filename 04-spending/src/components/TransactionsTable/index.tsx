import * as RadixDialog from '@radix-ui/react-dialog'
import { Edit } from 'lucide-react'
import { useMemo, useState } from 'react'
import { formatValue } from '@/format-values'
import { useGetTransactions } from '@/hooks/transactions/use-get-transactions'
import { TransactionModal } from '../TransactionsActions/TransactionModal'
import { TransactionsContainerStyled } from './styles'

type TransactionsTableProps = {
	searchQuery: string
}

export function TransactionsTable({ searchQuery }: TransactionsTableProps) {
	const { data: transactions } = useGetTransactions()

	const [openTransactionId, setOpenTransactionId] = useState<string | null>(null)

	const filteredTransactions = useMemo(() => {
		if (!transactions) return transactions
		if (!searchQuery.trim()) return transactions

		const query = searchQuery.toLowerCase().trim()
		return transactions.filter(
			(transaction) =>
				transaction.description.toLowerCase().includes(query) ||
				transaction.category.toLowerCase().includes(query),
		)
	}, [transactions, searchQuery])

	return (
		<TransactionsContainerStyled>
			{filteredTransactions?.length === 0 && <p>No transactions found.</p>}

			{filteredTransactions && filteredTransactions.length > 0 && (
				<tbody>
					{filteredTransactions.map((transaction) => {
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
