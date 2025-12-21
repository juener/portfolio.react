import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const RadioGroupRootStyled = styled(RadixRadioGroup.Root)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  overflow: hidden;
`

export const RadioItemStyled = styled(RadixRadioGroup.Item)`
  padding: 0.5rem;
  background-color: var(--secondary);
  color: var(--primary);
  flex: 1;
  height: 4rem;

  &[data-state="unchecked"]:hover {
    background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
    cursor: pointer;
    color: var(--secondary)
  }

  &[data-state="checked"] {
    ${({ value }) => value === 'income' && 'background-color: green;'}
    ${({ value }) => value === 'expense' && 'background-color: red;'}
    color: var(--primary-foreground);

    &:hover {
      ${({ value }) => value === 'income' && 'background-color: color-mix(in srgb, green 90%, transparent);'}
      ${({ value }) => value === 'expense' && 'background-color: color-mix(in srgb, red 90%, transparent);'}
      cursor: pointer;
    }
  }
`
