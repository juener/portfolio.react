import styled from 'styled-components'

export const TransactionsFilterContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  height: 100%;
  padding: 1rem;
  border-radius: var(--radius);
  gap: 1rem;

  background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
`
