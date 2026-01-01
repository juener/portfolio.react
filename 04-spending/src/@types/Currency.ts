export type CurrencyInitials = 'USD' | 'BRL' | 'EUR' | 'GBP'

export type Currency = {
	id: string
	name: string
	initials: CurrencyInitials
}

export type CurrencyCreation = Omit<Currency, 'id'>
