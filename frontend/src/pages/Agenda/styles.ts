import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const PageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-800']};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

export const PlannerGrid = styled.div`
  display: grid;
  grid-template-columns: 140px repeat(7, 1fr);
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.75rem;
  overflow: hidden;
  background: ${({ theme }) => theme.white};

  @media (max-width: 900px) {
    grid-template-columns: 100px repeat(7, 1fr);
    font-size: 0.8rem;
  }

  @media (max-width: 640px) {
    overflow-x: auto;
    display: block;
    white-space: nowrap;
  }
`

export const CornerCell = styled.div`
  background: ${({ theme }) => theme['green-500']};
  border-right: 1px solid ${({ theme }) => theme['green-700']};
  border-bottom: 1px solid ${({ theme }) => theme['green-700']};
`

export const DayHeader = styled.div`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.75rem 0.25rem;
  border-left: 1px solid ${({ theme }) => theme['green-700']};
  border-bottom: 1px solid ${({ theme }) => theme['green-700']};
  letter-spacing: 0.05em;
`

export const MealLabel = styled.div`
  background: ${({ theme }) => theme['gray-100']};
  border-top: 1px solid ${({ theme }) => theme['gray-200']};
  border-right: 1px solid ${({ theme }) => theme['gray-200']};
  padding: 0.75rem 0.875rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-700']};
  display: flex;
  align-items: flex-start;
`

export const PlannerCell = styled.div`
  border-top: 1px solid ${({ theme }) => theme['gray-200']};
  border-left: 1px solid ${({ theme }) => theme['gray-200']};
  padding: 0.5rem;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;

  &:hover {
    background: ${({ theme }) => theme['gray-100']};
  }
`

export const MealTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.7rem;
  max-width: 100%;
`

export const MealTagName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80px;
`

export const RemoveTag = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`

export const AddButton = styled.button`
  background: none;
  border: 1px dashed ${({ theme }) => theme['gray-300']};
  border-radius: 4px;
  color: ${({ theme }) => theme['gray-400']};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-top: auto;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-500']};
  }
`

export const PlannerActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
`

export const ModalCard = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.875rem;
  padding: 2rem;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`

export const ModalTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-900']};
`

export const ModalInputLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-700']};
`

export const ModalInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 0 0 3px rgba(118, 174, 29, 0.15);
    outline: none;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`
