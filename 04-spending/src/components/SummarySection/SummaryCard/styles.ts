import styled from 'styled-components'

export const SummaryCardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  padding: 1rem;
  
  background-color: color-mix(in srgb, var(--secondary) 10%, transparent);

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.5rem;
  }
`
