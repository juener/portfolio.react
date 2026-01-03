import styled, { css } from 'styled-components'

interface ButtonProps {
	variant: 'primary' | 'destructive'
}

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ variant }) =>
		variant === 'destructive' &&
		css`
    background-color: var(--destructive);
    color: var(--destructive-foreground);

    &&:hover {
      background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
      cursor: pointer;
    }
  `}

  ${({ variant }) =>
		variant === 'primary' &&
		css`
    background-color: var(--primary);
    color: var(--primary-foreground);

    &&:hover {
      background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
      cursor: pointer;
    }
  `}

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  padding-inline: 1rem;
  padding-block: 0.5rem;
  white-space: nowrap;

  &:hover {
    background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
