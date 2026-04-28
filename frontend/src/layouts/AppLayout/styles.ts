import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme['gray-100']};
`

export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Footer = styled.footer`
  flex-shrink: 0;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
  border-top: 1px solid ${({ theme }) => theme['gray-200']};
`
