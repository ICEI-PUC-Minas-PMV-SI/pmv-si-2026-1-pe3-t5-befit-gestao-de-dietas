import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme['gray-100']};
`

export const LogoHeader = styled.header`
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

export const Logo = styled.img`
  height: 44px;
  width: auto;
`

export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const Footer = styled.footer`
  flex-shrink: 0;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
  border-top: 1px solid ${({ theme }) => theme['gray-200']};
`
