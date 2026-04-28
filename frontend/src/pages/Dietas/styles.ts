import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const FormPanel = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`

export const PreviewPanel = styled.div`
  background: ${({ theme }) => theme['orange-500']};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`

export const StepLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme['green-500']};
`

export const PageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-900']};
  margin-top: -0.5rem;
`

export const PageHelper = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
  margin-top: -0.5rem;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme['gray-700']};
    margin-bottom: 0.375rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const SelectField = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-900']};
  background: ${({ theme }) => theme.white};
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 0 0 3px rgba(118, 174, 29, 0.15);
    outline: none;
  }
`

export const TextareaField = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-900']};
  background: ${({ theme }) => theme.white};
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }

  &:focus {
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 0 0 3px rgba(118, 174, 29, 0.15);
    outline: none;
  }
`

export const FormActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.5rem;
`

export const StatusMessage = styled.div<{ $tipo: 'sucesso' | 'erro' }>`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  background: ${({ $tipo }) => ($tipo === 'sucesso' ? 'rgba(80,124,32,0.1)' : 'rgba(229,62,62,0.1)')};
  color: ${({ $tipo }) => ($tipo === 'sucesso' ? '#507C20' : '#e53e3e')};
`

export const PreviewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme['brown-700']};

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme['brown-900']};
  }
`

export const EmptyState = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme['brown-900']};
  opacity: 0.7;
  text-align: center;
  margin-top: 2rem;
`

export const MealGroup = styled.div`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.75rem;
  padding: 1rem;
`

export const MealGroupTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme['brown-700']};
  margin-bottom: 0.75rem;
`

export const FoodList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FoodItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.5rem;
  padding: 0.625rem 0.875rem;
`

export const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const FoodName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-900']};
`

export const FoodMeta = styled.div`
  font-size: 0.775rem;
  color: ${({ theme }) => theme['gray-600']};
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme['gray-500']};
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
`
