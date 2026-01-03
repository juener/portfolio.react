import Logo from '/images/simple-horizontal-logo-white.png'
import { Button } from '../Button'
import { HeaderContainerStyled, HeaderContentStyled } from './styles'

export function Header() {
	return (
		<HeaderContainerStyled>
			<HeaderContentStyled>
				<img src={Logo} alt='' />
				<Button>Login</Button>
			</HeaderContentStyled>
		</HeaderContainerStyled>
	)
}
