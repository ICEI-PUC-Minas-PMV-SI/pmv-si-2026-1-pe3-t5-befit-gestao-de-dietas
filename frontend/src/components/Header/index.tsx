import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo_befit.png'
import { HeaderWrapper, HeaderContent, Logo, Actions, LinkButtonPrimary, LinkButtonSecondary } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link to="/">
          <Logo src={logoImg} alt="BeFit" />
        </Link>
        <Actions>
          <LinkButtonSecondary to="/login">Entrar</LinkButtonSecondary>
          <LinkButtonPrimary to="/cadastro">Começar</LinkButtonPrimary>
        </Actions>
      </HeaderContent>
    </HeaderWrapper>
  )
}
