import { createFileRoute } from '@tanstack/react-router'
import type { OrderItemType, OrderType } from '@/@types/order'

export const Route = createFileRoute('/(public)/orders')({
	component: RouteComponent,
	loader: async () => {
		const ordersFromLocalStorage = localStorage.getItem('@03-cafe/orders')
		const orders = ordersFromLocalStorage ? JSON.parse(ordersFromLocalStorage) : ([] as OrderType[])

		if (!orders) {
			alert('No orders found.')
			return
		}

		return orders as OrderType[]
	},
	errorComponent: ({ error }) => {
		return <div>Error: {error.message}</div>
	},
})

function RouteComponent() {
	const orders = Route.useLoaderData() as OrderType[]
	return (
		<>
			<h2 className='font-bold text-2xl'>Orders</h2>
			<ul className='flex flex-col justify-between gap-4 pb-16 pb-16 w-11/12'>
				{orders?.map((order: OrderType) => (
					<li
						key={order.address}
						className='flex flex-row justify-between gap-2 bg-gray-100 p-4 rounded-md w-full font-bold'
					>
						<span>{order.address}</span>
						<span className='font-normal'>{order.total}</span>
					</li>
				))}
			</ul>
			<footer className='bottom-0 fixed flex justify-center items-center bg-gray-900 p-4 w-full h-12 text-white'>
				<a href='/' className='animate-pulse'>
					Back to menu
				</a>
			</footer>
		</>
	)
}
