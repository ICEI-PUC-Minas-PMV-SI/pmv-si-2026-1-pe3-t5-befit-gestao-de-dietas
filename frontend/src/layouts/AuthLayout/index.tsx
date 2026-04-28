import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo_befit.png'
import { Wrapper, LogoHeader, Logo, Main, Footer } from './styles'

export function AuthLayout() {
  return (
    <Wrapper>
      <LogoHeader>
        <Link to="/">
          <Logo src={logoImg} alt="BeFit" />
        </Link>
      </LogoHeader>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>Copyright 2025 - BeFit - Todos os direitos reservados</p>
      </Footer>
    </Wrapper>
  )
}
