export type Category = {
	id: string
	name: string
}

export type CategoryCreation = Omit<Category, 'id'>
