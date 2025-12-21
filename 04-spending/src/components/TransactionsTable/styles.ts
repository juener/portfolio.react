import styled from 'styled-components'

export const TransactionsContainerStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: var(--radius);
  overflow: hidden;

  td {
    padding: 0.5rem;
    background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
    border-bottom: 1px solid var(--primary);
  
    &:first-child {
      padding-left: 1rem;
    }

    /* edit button */
    &:last-child {
      width: 2rem;
      padding-right: 1rem;
    }
  }   
`
