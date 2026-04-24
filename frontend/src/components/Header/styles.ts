import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.white};
  padding: 0.85rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Logo = styled.img`
  height: 48px;
  width: auto;
  flex-shrink: 0;
`

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0;
`

export const NavItem = styled.li``

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.4rem 0.85rem;
  font-size: 0.95rem;
  color: ${props => props.theme['gray-900']};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  font-weight: 400;
  white-space: nowrap;
  transition: color 0.15s;

  &.active {
    border-bottom-color: ${props => props.theme['brown-500']};
    font-weight: 600;
  }

  &:hover {
    color: ${props => props.theme['brown-500']};
  }
`

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme['gray-300']};
  border-radius: 999px;
  overflow: hidden;
  background: ${props => props.theme.white};
  padding: 0 0.5rem 0 0.85rem;
`

export const SearchInput = styled.input`
  border: none;
  background: none;
  font-size: 0.875rem;
  width: 150px;
  color: ${props => props.theme['gray-900']};
  padding: 0.35rem 0;

  &::placeholder {
    color: ${props => props.theme['gray-400']};
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0.25rem;
  color: ${props => props.theme['gray-600']};

  &:hover {
    color: ${props => props.theme['gray-900']};
  }
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1.5px solid ${props => props.theme['gray-400']};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: ${props => props.theme['gray-700']};
  transition: background 0.15s;

  &:hover {
    background: ${props => props.theme['gray-200']};
  }
`

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${props => props.theme['gray-700']};
  padding: 0.25rem;

  &:hover {
    color: ${props => props.theme['gray-900']};
  }
`
