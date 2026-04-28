import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 0.75rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
`

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Logo = styled.img`
  height: 44px;
  width: auto;
  flex-shrink: 0;
`

export const Nav = styled.nav`
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0;
`

export const NavItem = styled.li``

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-700']};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.15s;

  &.active {
    color: ${({ theme }) => theme['brown-500']};
    border-bottom-color: ${({ theme }) => theme['brown-500']};
    font-weight: 700;
  }

  &:hover {
    color: ${({ theme }) => theme['green-500']};
  }

  svg {
    flex-shrink: 0;
  }
`

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  margin-left: auto;
`

export const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-700']};

  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1.5px solid ${({ theme }) => theme['gray-300']};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme['gray-600']};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme }) => theme['gray-200']};
    color: ${({ theme }) => theme['gray-900']};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme['gray-700']};

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Overlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 200;
`

export const Sidebar = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? '0' : '-280px')};
  width: 280px;
  height: 100%;
  background-color: ${({ theme }) => theme['brown-500']};
  z-index: 300;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease;
  padding-bottom: 1.5rem;
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

export const SidebarCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
`

export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0.75rem 0;
  flex: 1;
`

export const SidebarNavItem = styled.li``

export const SidebarNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.15s, color 0.15s;

  &.active {
    background: rgba(255, 255, 255, 0.12);
    color: ${({ theme }) => theme.white};
    font-weight: 600;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.white};
  }
`

export const SidebarUserInfo = styled.div`
  padding: 1rem 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
  }
`

export const SidebarLogout = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  color: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  width: fit-content;
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`
