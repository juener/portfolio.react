import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='flex flex-col justify-center items-center gap-4 bg-gray-200 w-screen min-h-screen'>
			<h1 className='p-4 border-gray-200 border-b font-bold text-3xl'>The Café</h1>
			<Outlet />
		</div>
	)
}
