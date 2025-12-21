import styled from 'styled-components'

export const HeaderContainerStyled = styled.header`
  background-color: var(--black);
  color: var(--primary-foreground);
  height: 4rem;
  width: 100%;
`

export const HeaderContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  height: 100%;

  img {
    height: 100%;
    object-fit: contain;
  }
`
