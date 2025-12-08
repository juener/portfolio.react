export type MenuType = {
	groups: {
		id: number
		name: string
		items: MenuItemType[]
	}[]
}

export type MenuItemType = {
	id: number
	name: string
	priceInCents: number
}
