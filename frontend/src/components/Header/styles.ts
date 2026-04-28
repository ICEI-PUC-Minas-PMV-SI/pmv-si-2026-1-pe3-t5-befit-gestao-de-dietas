import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 48px;
  width: auto;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const baseLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover { transform: scale(1.03); }
  &:active { transform: scale(0.98); }
`

export const LinkButtonPrimary = styled(baseLinkButton)`
  background-color: ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme.white};
  border: none;

  &:hover { background-color: ${({ theme }) => theme['green-500']}; }
`

export const LinkButtonSecondary = styled(baseLinkButton)`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme['green-500']};
  border: 2px solid ${({ theme }) => theme['green-500']};

  &:hover { background-color: ${({ theme }) => theme['gray-100']}; }
`
