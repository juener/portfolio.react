import * as RadixDialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const CurrencyModalOverlayStyled = styled(RadixDialog.Overlay)`
  background-color: color-mix(in srgb, var(--secondary) 50%, transparent);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`

export const CurrencyModalContentStyled = styled(RadixDialog.Content)`
  min-width: 32rem;
  padding: 2rem;
  border-radius: var(--radius);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: var(--primary-foreground);
  background-color: var(--primary);

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  form > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  form > input {
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--radius);
    border: none;
    background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
    color: var(--primary-foreground);
  }

  /* errors.description */
  form > div > span {
    color: var(--destructive);
  }
`
