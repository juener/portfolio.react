import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SummarySection } from '@/components/SummarySection'
import { TransactionsActions } from '@/components/TransactionsActions'
import { TransactionsTable } from '@/components/TransactionsTable'

export const Route = createFileRoute('/(public)/(dashboard)/')({
	component: RouteComponent,
})

function RouteComponent() {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<>
			<SummarySection />
			<TransactionsActions searchQuery={searchQuery} onSearchChange={setSearchQuery} />
			<TransactionsTable searchQuery={searchQuery} />
		</>
	)
}
