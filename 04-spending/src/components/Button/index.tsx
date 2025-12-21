import type { ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'destructive'
	children: React.ReactNode
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
	return (
		<ButtonStyled variant={variant} {...props}>
			{children}
		</ButtonStyled>
	)
}
