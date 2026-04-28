import { Outlet } from 'react-router-dom'
import { AppHeader } from '../../components/AppHeader'
import { Wrapper, Main, Footer } from './styles'

export function AppLayout() {
  return (
    <Wrapper>
      <AppHeader />
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>Copyright 2025 - BeFit - Todos os direitos reservados</p>
      </Footer>
    </Wrapper>
  )
}
