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

  @media (max-width: 480px) {
    padding: 1rem;
    justify-content: end;
  }

  img {
    height: 100%;
    object-fit: contain;

    @media (max-width: 480px) {
      /* or change the logo size */
      display: none;
    }
  }
`
