import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { OrderItemType, OrderType } from '@/@types/order'

function handleSaveAddress(addressInput: string) {
	const orderFromLocalStorage = localStorage.getItem('@03-cafe/order')
	const order = orderFromLocalStorage ? JSON.parse(orderFromLocalStorage) : null

	if (!order) {
		alert('No order found')
		return
	}

	order.address = addressInput

	localStorage.setItem('@03-cafe/order', JSON.stringify(order))
}

function handleConfirmOrder() {
	const orderFromLocalStorage = localStorage.getItem('@03-cafe/order')

	const order = orderFromLocalStorage ? JSON.parse(orderFromLocalStorage) : null

	if (!order) {
		alert('No order found')
		return
	}

	if (!order.address) {
		alert('Please save your address first')
		return
	}

	order.status = 'confirmed'

	localStorage.setItem('@03-cafe/order', JSON.stringify(order))

	const ordersFromLocalStorage = localStorage.getItem('@03-cafe/orders')
	const orders = ordersFromLocalStorage ? JSON.parse(ordersFromLocalStorage) : ([] as OrderType[])

	orders.push(order)

	localStorage.setItem('@03-cafe/orders', JSON.stringify(orders))

	window.location.href = '/orders'
}

export const Route = createFileRoute('/(public)/cart')({
	component: RouteComponent,
	loader: async () => {
		const orderFromLocalStorage = localStorage.getItem('@03-cafe/order')
		const order = orderFromLocalStorage
			? JSON.parse(orderFromLocalStorage)
			: {
					items: [],
					total: 0,
					status: 'pending',
					address: '',
				}

		return order as OrderType
	},
	errorComponent: ({ error }) => {
		return <div>Error: {error.message}</div>
	},
})

function RouteComponent() {
	const { address, items } = Route.useLoaderData() as OrderType

	const [addressInput, setAddressInput] = useState(address)

	return (
		<>
			<div className='flex flex-row items-center gap-2'>
				<label htmlFor='address'>Address:</label>
				<input
					name='address'
					type='text'
					value={addressInput}
					placeholder='Enter your address'
					onChange={(e) => setAddressInput(e.target.value)}
					className='p-2 border-2 border-gray-200 rounded-md'
				/>
				<button
					type='button'
					onClick={() => handleSaveAddress(addressInput)}
					className='bg-gray-200 px-4 py-2 rounded-md text-gray-900'
				>
					Save
				</button>
			</div>
			<h2 className='font-bold text-2xl'>Cart</h2>
			<ul className='flex flex-col justify-between gap-4 pb-16 w-11/12'>
				{items?.map((item: OrderItemType) => (
					<>
						<li
							key={item.id}
							className='flex flex-row justify-between gap-2 bg-gray-100 p-4 rounded-md w-full font-bold'
						>
							<span>{item.name}</span>
							<span className='font-normal'>x{item.quantity}</span>
						</li>
					</>
				))}
			</ul>
			<footer className='bottom-0 fixed flex justify-center items-center bg-gray-900 p-4 w-full h-12 text-white hover:cursor-pointer'>
				<button
					type='button'
					onClick={() => handleConfirmOrder()}
					className='animate-pulse hover:cursor-pointer'
				>
					Confirm order and go to orders page
				</button>
			</footer>
		</>
	)
}
