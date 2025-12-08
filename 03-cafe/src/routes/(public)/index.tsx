import { createFileRoute } from '@tanstack/react-router'
import type { MenuItemType, MenuType } from '@/@types/menu'
import menuFromJson from '@/data/menu.json'

export const Route = createFileRoute('/(public)/')({
	component: App,
	loader: async () => {
		return menuFromJson as MenuType
	},
})

function formatPrice(priceInCents: number) {
	return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
		priceInCents / 100,
	)
}

function handleItemClick(item: MenuItemType) {
	const quantityString = prompt('Enter the quantity')
	let quantity: number | undefined

	try {
		console.log('>>>>>>>>>>')
		quantity = parseInt(quantityString ?? 'not a number')
		if (Number.isNaN(quantity)) {
			throw new Error('Invalid quantity')
		}
	} catch {
		alert('You must enter a valid quantity, the product was not added to the cart.')
		return
	}

	const obs = prompt('Enter the observations')

	const orderFromLocalStorage = localStorage.getItem('@03-cafe/order')

	const order = orderFromLocalStorage
		? JSON.parse(orderFromLocalStorage)
		: {
				items: [],
				total: 0,
				status: 'pending',
				address: '',
			}

	order.items = [
		...order.items,
		{
			id: item.id,
			name: item.name,
			priceInCents: item.priceInCents,
			quantity: quantity,
			obs: obs,
		},
	]

	localStorage.setItem('@03-cafe/order', JSON.stringify(order))
}

function App() {
	const { groups } = Route.useLoaderData() as MenuType

	return (
		<>
			<h2 className='font-bold text-2xl'>Menu</h2>
			<ul className='flex flex-col gap-4 pb-16 w-11/12'>
				{groups.map((group) => (
					<li key={group.id} className='flex flex-col gap-2 bg-gray-100 p-4 rounded-md font-bold'>
						{group.name}
						<ul className='font-normal'>
							{group.items.map((item) => (
								<li
									key={item.id}
									onClick={() => handleItemClick(item)}
									className='flex flex-row justify-between items-center hover:bg-gray-200 p-2 rounded-md cursor-pointer'
								>
									{item.name} - {formatPrice(item.priceInCents)}
									<button type='button'>+</button>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			<footer className='bottom-0 fixed flex justify-center items-center bg-gray-900 p-4 w-full h-12 text-white'>
				<a href='/cart' className='animate-pulse'>
					Cart
				</a>
			</footer>
		</>
	)
}
