import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, X, ShoppingCart, BookOpen } from 'lucide-react'
import { Button } from '../../components/Button'
import {
  Wrapper,
  PageTitle,
  PlannerGrid,
  CornerCell,
  DayHeader,
  MealLabel,
  PlannerCell,
  MealTag,
  MealTagName,
  RemoveTag,
  AddButton,
  PlannerActions,
  ModalOverlay,
  ModalCard,
  ModalTitle,
  ModalInputLabel,
  ModalInput,
  ModalActions,
} from './styles'

const DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
const MEALS = ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar']

type PlannerState = Record<string, string[]>

function cellKey(day: string, meal: string) {
  return `${day}::${meal}`
}

export function Agenda() {
  const navigate = useNavigate()
  const [planner, setPlanner] = useState<PlannerState>({})
  const [modal, setModal] = useState<{ day: string; meal: string } | null>(null)
  const [inputValue, setInputValue] = useState('')

  function openModal(day: string, meal: string) {
    setInputValue('')
    setModal({ day, meal })
  }

  function closeModal() {
    setModal(null)
    setInputValue('')
  }

  function addMeal() {
    if (!inputValue.trim() || !modal) return
    const key = cellKey(modal.day, modal.meal)
    setPlanner(prev => ({
      ...prev,
      [key]: [...(prev[key] ?? []), inputValue.trim()],
    }))
    closeModal()
  }

  function removeMeal(day: string, meal: string, index: number) {
    const key = cellKey(day, meal)
    setPlanner(prev => {
      const lista = (prev[key] ?? []).filter((_, i) => i !== index)
      if (lista.length === 0) {
        const { [key]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [key]: lista }
    })
  }

  return (
    <Wrapper>
      <PageTitle>Planejar a Semana</PageTitle>

      <PlannerGrid>
        <CornerCell />
        {DAYS.map(day => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}

        {MEALS.map(meal => (
          <>
            <MealLabel key={`label-${meal}`}>{meal}</MealLabel>
            {DAYS.map(day => {
              const key = cellKey(day, meal)
              const itens = planner[key] ?? []
              return (
                <PlannerCell key={key}>
                  {itens.map((item, i) => (
                    <MealTag key={i}>
                      <MealTagName>{item}</MealTagName>
                      <RemoveTag onClick={() => removeMeal(day, meal, i)}>
                        <X size={10} />
                      </RemoveTag>
                    </MealTag>
                  ))}
                  <AddButton onClick={() => openModal(day, meal)} title={`Adicionar ${meal} em ${day}`}>
                    <Plus size={14} />
                  </AddButton>
                </PlannerCell>
              )
            })}
          </>
        ))}
      </PlannerGrid>

      <PlannerActions>
        <Button variant="secondary" onClick={() => navigate('/compras')}>
          <ShoppingCart size={16} /> Lista de Compras
        </Button>
        <Button variant="primary" onClick={() => navigate('/receitas')}>
          <BookOpen size={16} /> Adicionar Receitas
        </Button>
      </PlannerActions>

      {modal && (
        <ModalOverlay onClick={closeModal}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <ModalTitle>
              {modal.meal} — {modal.day}
            </ModalTitle>
            <ModalInputLabel htmlFor="modal-input">Nome da refeição ou receita</ModalInputLabel>
            <ModalInput
              id="modal-input"
              type="text"
              placeholder="Ex.: Frango grelhado"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addMeal()}
              autoFocus
            />
            <ModalActions>
              <Button variant="ghost" onClick={closeModal}>Cancelar</Button>
              <Button variant="primary" onClick={addMeal}>Adicionar</Button>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </Wrapper>
  )
}
