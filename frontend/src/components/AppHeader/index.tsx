import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  Utensils,
  BarChart3,
  BookOpen,
  ShoppingCart,
  Calculator,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
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
  UserName,
  LogoutButton,
  HamburgerButton,
  Overlay,
  Sidebar,
  SidebarHeader,
  SidebarCloseButton,
  SidebarNav,
  SidebarNavItem,
  SidebarNavLink,
  SidebarUserInfo,
  SidebarLogout,
} from './styles'

const navLinks = [
  { label: 'Home', path: '/dashboard', icon: <Home size={17} />, end: true },
  { label: 'Dietas', path: '/dietas', icon: <Utensils size={17} /> },
  { label: 'Receitas', path: '/receitas', icon: <BookOpen size={17} /> },
  { label: 'Agenda', path: '/agenda', icon: <BarChart3 size={17} /> },
  { label: 'Lista de Compras', path: '/compras', icon: <ShoppingCart size={17} /> },
  { label: 'IMC', path: '/imc', icon: <Calculator size={17} /> },
  { label: 'Relatórios', path: '/relatorios', icon: <BarChart3 size={17} /> },
]

export function AppHeader() {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/dashboard">
            <Logo src={logoImg} alt="BeFit" />
          </Link>

          <Nav>
            <NavList>
              {navLinks.map(link => (
                <NavItem key={link.path}>
                  <StyledNavLink to={link.path} end={link.end}>
                    {link.icon}
                    <span>{link.label}</span>
                  </StyledNavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>

          <RightArea>
            <UserName>{user?.name}</UserName>
            <LogoutButton onClick={logout} title="Sair">
              <LogOut size={18} />
            </LogoutButton>
            <HamburgerButton onClick={() => setSidebarOpen(true)} aria-label="Abrir menu">
              <Menu size={22} />
            </HamburgerButton>
          </RightArea>
        </HeaderContent>
      </HeaderWrapper>

      <Overlay $open={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      <Sidebar $open={sidebarOpen}>
        <SidebarHeader>
          <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
            <Logo src={logoImg} alt="BeFit" />
          </Link>
          <SidebarCloseButton onClick={() => setSidebarOpen(false)} aria-label="Fechar menu">
            <X size={22} />
          </SidebarCloseButton>
        </SidebarHeader>

        <SidebarNav>
          {navLinks.map(link => (
            <SidebarNavItem key={link.path}>
              <SidebarNavLink to={link.path} end={link.end} onClick={() => setSidebarOpen(false)}>
                {link.icon}
                <span>{link.label}</span>
              </SidebarNavLink>
            </SidebarNavItem>
          ))}
        </SidebarNav>

        <SidebarUserInfo>
          <span>{user?.name}</span>
          <SidebarLogout onClick={() => { logout(); setSidebarOpen(false) }}>
            <LogOut size={16} />
            Sair
          </SidebarLogout>
        </SidebarUserInfo>
      </Sidebar>
    </>
  )
}
