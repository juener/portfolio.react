export type OrderType = {
	address: string
	items: OrderItemType[]
	total: number
	status: 'pending' | 'confirmed' | 'delivered' | 'cancelled'
}

export type OrderItemType = {
	id: number
	name: string
	priceInCents: number
	quantity: number
	obs: string
}
