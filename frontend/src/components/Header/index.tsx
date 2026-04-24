import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo_befit.png'
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavList,
  NavItem,
  StyledNavLink,
  RightArea,
  SearchWrapper,
  SearchInput,
  SearchButton,
  IconButton,
  HamburgerButton,
} from './styles'

const navLinks = [
  { label: 'Home', path: '/', end: true },
  { label: 'Saúde', path: '/health', end: false },
  { label: 'Bem-estar', path: '/wellness', end: false },
  { label: 'Dietas', path: '/diets', end: false },
  { label: 'Receitas', path: '/recipes', end: false },
  { label: 'Agenda', path: '/agenda', end: false },
  { label: 'IMC', path: '/imc', end: false },
]

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link to="/">
          <Logo src={logoImg} alt="BeFit" />
        </Link>

        <Nav>
          <NavList>
            {navLinks.map(link => (
              <NavItem key={link.label}>
                <StyledNavLink to={link.path} end={link.end}>
                  {link.label}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>

        <RightArea>
          <SearchWrapper>
            <SearchInput type="text" placeholder="Buscar..." />
            <SearchButton type="button" aria-label="Buscar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </SearchButton>
          </SearchWrapper>

          <IconButton type="button" aria-label="Perfil">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </IconButton>

          <HamburgerButton type="button" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </HamburgerButton>
        </RightArea>
      </HeaderContent>
    </HeaderWrapper>
  )
}
