import { Outlet } from 'react-router'
import { CountdownContextProvider } from '~/contexts/CountdownContext'

export default function Layout() {
	return (
		<CountdownContextProvider>
			<Outlet />
		</CountdownContextProvider>
	)
}
