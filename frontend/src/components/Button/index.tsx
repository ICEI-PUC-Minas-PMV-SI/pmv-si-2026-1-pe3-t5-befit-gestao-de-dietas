import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  )
}
