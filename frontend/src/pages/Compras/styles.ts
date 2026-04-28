import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 720px;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-800']};
`

export const PageSubtitle = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
  margin-top: 0.25rem;
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`

export const AddForm = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.875rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`

export const AddFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 160px auto;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const PrintArea = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.875rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  @media print {
    box-shadow: none;
    border: 1px solid #ddd;
  }
`

export const ItemsList = styled.ul`
  list-style: none;
`

export const ItemRow = styled.li<{ $purchased: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
  background: ${({ $purchased, theme }) => $purchased ? theme['gray-100'] : theme.white};
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    break-inside: avoid;
  }
`

export const ItemCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: ${({ theme }) => theme['green-500']};
  cursor: pointer;
  flex-shrink: 0;
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ItemName = styled.div<{ $purchased: boolean }>`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ $purchased, theme }) => $purchased ? theme['gray-400'] : theme['gray-800']};
  text-decoration: ${({ $purchased }) => $purchased ? 'line-through' : 'none'};
  transition: color 0.15s;
`

export const ItemQty = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme['gray-500']};
  background: ${({ theme }) => theme['gray-200']};
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme['gray-400']};
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: color 0.15s, background 0.15s;
  flex-shrink: 0;

  &:hover {
    color: #e53e3e;
    background: rgba(229, 62, 62, 0.08);
  }

  @media print {
    display: none;
  }
`

export const EmptyState = styled.div`
  padding: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme['gray-400']};
  font-size: 0.95rem;
`

export const Summary = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
  text-align: right;
`
