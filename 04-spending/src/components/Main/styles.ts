import styled from 'styled-components'

export const MainContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  min-height: calc(100vh - 8rem); // 4rem (header) + 4rem (footer)
  gap: 1rem;
  padding: 1rem;

  color: var(--primary-foreground);
  background-color: var(--primary);
`
