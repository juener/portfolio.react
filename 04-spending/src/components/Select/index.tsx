import * as RadixSelect from '@radix-ui/react-select'
import {
	SelectContentStyled,
	SelectItemStyled,
	SelectRootStyled,
	SelectTriggerStyled,
} from './styles'

interface SelectProps extends RadixSelect.SelectProps {
	triggerLabel: string
	options: {
		value: string
		label: string
	}[]
}

export function Select({ triggerLabel, options, ...props }: SelectProps) {
	return (
		<SelectRootStyled {...props}>
			<SelectTriggerStyled>
				<RadixSelect.Value placeholder={triggerLabel} />
			</SelectTriggerStyled>
			<SelectContentStyled position='popper' sideOffset={4}>
				{options?.map((option) => (
					<SelectItemStyled key={option.value} value={option.value}>
						<RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
					</SelectItemStyled>
				))}
			</SelectContentStyled>
		</SelectRootStyled>
	)
}
