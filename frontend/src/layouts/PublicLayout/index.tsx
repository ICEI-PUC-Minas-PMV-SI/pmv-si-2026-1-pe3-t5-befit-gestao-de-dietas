import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Wrapper, Main, Footer } from './styles'

export function PublicLayout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>Copyright 2025 - BeFit - Todos os direitos reservados</p>
      </Footer>
    </Wrapper>
  )
}
