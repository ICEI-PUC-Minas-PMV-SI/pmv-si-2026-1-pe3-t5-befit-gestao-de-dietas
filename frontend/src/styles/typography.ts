import styled from 'styled-components'

const sizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '5xl': '3rem',
} as const

const weights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

type Size = keyof typeof sizes
type Weight = keyof typeof weights

interface TypographyProps {
  $size?: Size
  $weight?: Weight
}

export const Text = styled.p<TypographyProps>`
  font-size: ${({ $size = 'md' }) => sizes[$size]};
  font-weight: ${({ $weight = 'regular' }) => weights[$weight]};
  line-height: 1.6;
`

export const Heading = styled.h1<TypographyProps>`
  font-size: ${({ $size = '3xl' }) => sizes[$size]};
  font-weight: ${({ $weight = 'bold' }) => weights[$weight]};
  line-height: 1.2;
`
