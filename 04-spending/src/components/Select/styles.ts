import * as RadixSelect from '@radix-ui/react-select'
import styled from 'styled-components'

export const SelectRootStyled = styled(RadixSelect.Root)`
  flex: 1;
  padding: 0.5rem;
  border-radius: var(--radius);
  border: none;
  background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
  color: var(--primary-foreground);

  &:focus {
    outline: none;
    border: none;
    background-color: var(--destructive);
  }
`

export const SelectTriggerStyled = styled(RadixSelect.Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: var(--radius);
  border: none;
  padding: 0.5rem;
  cursor: pointer;
`

export const SelectContentStyled = styled(RadixSelect.Content)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: var(--radius);
  border: none;
  overflow: hidden;
  z-index: 50;
`

export const SelectItemStyled = styled(RadixSelect.Item)`
  padding: 1rem 0.5rem;
  background-color: var(--secondary);
  color: var(--primary);
  width: 100%;
  cursor: pointer;
  outline: none;

  &:hover,
  &[data-highlighted] {
    background-color: color-mix(in srgb, var(--primary) 10%, transparent);
  }

  &[data-state="checked"] {
    background-color: color-mix(in srgb, var(--primary) 20%, transparent);
  }
`
