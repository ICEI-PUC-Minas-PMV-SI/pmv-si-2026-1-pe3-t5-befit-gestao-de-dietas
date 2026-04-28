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

export const ViewToggleGroup = styled.div`
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1.5px solid ${({ theme }) => theme['green-500']};
  width: fit-content;
`

export const ViewToggleBtn = styled.button<{ $active?: boolean }>`
  padding: 0.45rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  background: ${({ theme, $active }) => ($active ? theme['green-500'] : theme.white)};
  color: ${({ theme, $active }) => ($active ? theme.white : theme['green-500'])};
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme, $active }) => ($active ? theme['green-500'] : theme['gray-100'])};
  }
`

export const WeekNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const WeekNavBtn = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme['gray-600']};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-500']};
  }
`

export const WeekLabel = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-700']};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${({ theme }) => theme['green-500']};
    background: ${({ theme }) => theme['gray-100']};
  }
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

export const DayHeader = styled.div<{ $today?: boolean }>`
  background: ${({ theme, $today }) => ($today ? theme['green-700'] : theme['green-500'])};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 0.5rem 0.25rem;
  border-left: 1px solid ${({ theme }) => theme['green-700']};
  border-bottom: 1px solid ${({ theme }) => theme['green-700']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`

export const DayHeaderAbr = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
`

export const DayHeaderNum = styled.span<{ $today?: boolean }>`
  font-size: 0.85rem;
  font-weight: ${({ $today }) => ($today ? '700' : '400')};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $today }) => ($today ? 'rgba(255,255,255,0.25)' : 'transparent')};
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

export const PlannerCell = styled.div<{ $past?: boolean }>`
  border-top: 1px solid ${({ theme }) => theme['gray-200']};
  border-left: 1px solid ${({ theme }) => theme['gray-200']};
  padding: 0.5rem;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
  background: ${({ theme, $past }) => ($past ? theme['gray-100'] : theme.white)};
  opacity: ${({ $past }) => ($past ? 0.65 : 1)};

  &:hover {
    background: ${({ theme, $past }) => ($past ? theme['gray-100'] : theme['gray-100'])};
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

export const ModalCard = styled.div<{ $wide?: boolean }>`
  background: ${({ theme }) => theme.white};
  border-radius: 0.875rem;
  padding: 1.75rem;
  width: 100%;
  max-width: ${({ $wide }) => ($wide ? '480px' : '360px')};
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

export const MonthWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.75rem;
  overflow: hidden;
`

export const MonthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
`

export const MonthNav = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme['gray-600']};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-500']};
  }
`

export const MonthTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-800']};
  text-transform: capitalize;
`

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

export const MonthDayHeader = styled.div`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;
  padding: 0.5rem 0.25rem;
  letter-spacing: 0.05em;
  border-right: 1px solid ${({ theme }) => theme['green-700']};

  &:last-child {
    border-right: none;
  }
`

export const MonthDayCell = styled.div<{ $empty?: boolean; $today?: boolean; $past?: boolean }>`
  min-height: 88px;
  border-top: 1px solid ${({ theme }) => theme['gray-200']};
  border-right: 1px solid ${({ theme }) => theme['gray-200']};
  padding: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: ${({ theme, $empty, $today, $past }) =>
    $empty || $past
      ? theme['gray-100']
      : $today
        ? 'rgba(80, 124, 32, 0.05)'
        : theme.white};
  opacity: ${({ $past }) => ($past ? 0.6 : 1)};
  cursor: ${({ $empty, $past }) => ($empty || $past ? 'default' : 'pointer')};

  &:nth-child(7n) {
    border-right: none;
  }

  &:hover {
    background: ${({ theme, $empty, $past }) =>
      !$empty && !$past ? theme['gray-100'] : undefined};
  }
`

export const MonthDayNumber = styled.div<{ $today?: boolean }>`
  font-size: 0.8rem;
  font-weight: ${({ $today }) => ($today ? '700' : '500')};
  color: ${({ theme, $today }) => ($today ? theme['green-500'] : theme['gray-700'])};
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $today }) => ($today ? 'rgba(80, 124, 32, 0.18)' : 'transparent')};
`

export const MonthMealTag = styled.div<{ $more?: boolean }>`
  font-size: 0.65rem;
  background: ${({ theme, $more }) => ($more ? theme['gray-200'] : theme['green-500'])};
  color: ${({ theme, $more }) => ($more ? theme['gray-600'] : theme.white)};
  border-radius: 3px;
  padding: 1px 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`

export const RecipeSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  border: 1.5px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme['gray-400']};
  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 0 0 3px rgba(118, 174, 29, 0.15);
    color: ${({ theme }) => theme['green-500']};
  }
`

export const RecipeSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0.65rem 0;
  font-size: 0.9rem;
  background: transparent;
  color: ${({ theme }) => theme['gray-800']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }
`

export const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-height: 260px;
  overflow-y: auto;
  margin: 0 -0.25rem;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['gray-300']};
    border-radius: 4px;
  }
`

export const RecipeItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${({ theme }) => theme['gray-100']};
  }

  &:active {
    background: rgba(80, 124, 32, 0.1);
  }
`

export const RecipeItemName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-800']};
`

export const RecipeItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme['gray-400']};
`

export const RecipeEmptyMsg = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-400']};
`
