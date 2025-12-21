import type * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupRootStyled, RadioItemStyled } from './styles'

interface RadioGroupProps extends RadixRadioGroup.RadioGroupProps {
	options: {
		value: string
		label: string
	}[]
}

export function RadioGroup({ options, ...props }: RadioGroupProps) {
	return (
		<RadioGroupRootStyled {...props}>
			{options?.map((option) => (
				<RadioItemStyled key={option.value} value={option.value}>
					{option.label}
				</RadioItemStyled>
			))}
		</RadioGroupRootStyled>
	)
}
