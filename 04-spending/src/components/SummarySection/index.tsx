import { SummaryCard } from './SummaryCard'
import { SummarySectionContainerStyled } from './styles'

export function SummarySection() {
	return (
		<SummarySectionContainerStyled>
			<SummaryCard />
			<SummaryCard />
			<SummaryCard />
			<SummaryCard />
		</SummarySectionContainerStyled>
	)
}
