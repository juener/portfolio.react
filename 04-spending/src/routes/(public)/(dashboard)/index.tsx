import { createFileRoute } from '@tanstack/react-router'
import { SummarySection } from '@/components/SummarySection'
import { TransactionsActions } from '@/components/TransactionsActions'
import { TransactionsTable } from '@/components/TransactionsTable'

export const Route = createFileRoute('/(public)/(dashboard)/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<SummarySection />
			<TransactionsActions />
			<TransactionsTable />
		</>
	)
}
