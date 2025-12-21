export type Transaction = {
	id: string
	description: string
	amountInCents: number
	currency: 'USD' | 'BRL' | 'EUR' | 'GBP'
	dueDate: string
	category: string
	type: 'income' | 'expense'
}

export type TransactionCreation = Omit<Transaction, 'id'>
