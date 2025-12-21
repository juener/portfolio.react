import styled from 'styled-components'

export const InputStyled = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: var(--radius);
  border: none;
  height: 4rem;

  background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
  color: var(--primary-foreground);

  &:focus {
    outline: none;
    border: none;
    background-color: color-mix(in srgb, var(--secondary) 30%, transparent);
  }
`
