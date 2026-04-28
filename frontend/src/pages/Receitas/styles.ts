import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
`

export const PageTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-800']};
`

export const PageDesc = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme['gray-500']};
  line-height: 1.6;
  margin-top: -0.5rem;
`

export const SearchInput = styled.input`
  padding: 0.65rem 1rem;
  border: 1.5px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  font-size: 0.95rem;
  width: 100%;
  max-width: 360px;
  background: ${({ theme }) => theme.white};
  transition: border-color 0.2s;

  &::placeholder { color: ${({ theme }) => theme['gray-400']}; }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 0 0 3px rgba(118, 174, 29, 0.15);
  }
`

export const TableWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.875rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
`

export const Th = styled.th`
  padding: 0.875rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
`

export const SortButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;

  &:hover { opacity: 0.8; }
`

export const Tbody = styled.tbody``

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
  transition: background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover { background: ${({ theme }) => theme['gray-100']}; }
`

export const Td = styled.td`
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const RecipeLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme['green-500']};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: underline;
  text-align: left;
  cursor: pointer;
  padding: 0;

  &:hover { color: ${({ theme }) => theme['green-700']}; }
`

export const StarButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: ${({ $active, theme }) => $active ? theme['orange-500'] : theme['gray-300']};
  display: flex;
  align-items: center;
  transition: color 0.15s, transform 0.1s;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme['orange-500']};
    transform: scale(1.2);
  }
`

export const RightPanel = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background: ${({ theme }) => theme['orange-500']};
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  padding: 1rem;
`

export const ModalCard = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`

export const ModalTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-900']};
`

export const ModalClose = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme['gray-500']};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0.25rem;
  border-radius: 0.25rem;

  &:hover {
    background: ${({ theme }) => theme['gray-200']};
    color: ${({ theme }) => theme['gray-800']};
  }
`

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ModalSectionTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme['green-500']};
`

export const IngredientList = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const IngredientItem = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const PrepText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme['gray-700']};
  line-height: 1.65;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`
