import styled from 'styled-components'

export const FooterContainerStyled = styled.footer`
  background-color: var(--black);
  color: var(--primary-foreground);
  height: 4rem;
  width: 100%;

  position: fixed;
  bottom: 0;
`

export const FooterContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  height: 100%;
`
