import styled, { css } from 'styled-components'

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'ghost'
  $size: 'sm' | 'md' | 'lg'
  $fullWidth: boolean
}

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme.white};
    border: none;
    &:hover:not(:disabled) { background-color: ${({ theme }) => theme['green-500']}; }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['green-500']};
    border: 2px solid ${({ theme }) => theme['green-500']};
    &:hover:not(:disabled) { background-color: ${({ theme }) => theme['gray-100']}; }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme['gray-700']};
    border: none;
    &:hover:not(:disabled) { background-color: ${({ theme }) => theme['gray-200']}; }
  `,
}

const sizes = {
  sm: css` padding: 0.5rem 1rem; font-size: 0.875rem; `,
  md: css` padding: 0.75rem 1.5rem; font-size: 1rem; `,
  lg: css` padding: 1rem 2rem; font-size: 1.125rem; `,
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.15s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}

  &:hover:not(:disabled) { transform: scale(1.03); }
  &:active:not(:disabled) { transform: scale(0.98); }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
