import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Plus, X, ShoppingCart, BookOpen,
  ChevronLeft, ChevronRight, Search, Clock, Zap,
} from 'lucide-react'
import { Button } from '../../components/Button'
import { receitasIniciais } from '../../data/receitas'
import {
  Wrapper,
  PageTitle,
  ViewToggleGroup,
  ViewToggleBtn,
  WeekNavBar,
  WeekNavBtn,
  WeekLabel,
  PlannerGrid,
  CornerCell,
  DayHeader,
  DayHeaderAbr,
  DayHeaderNum,
  MealLabel,
  PlannerCell,
  MealTag,
  MealTagName,
  RemoveTag,
  AddButton,
  PlannerActions,
  MonthWrapper,
  MonthHeader,
  MonthNav,
  MonthTitle,
  MonthGrid,
  MonthDayHeader,
  MonthDayCell,
  MonthDayNumber,
  MonthMealTag,
  ModalOverlay,
  ModalCard,
  ModalTitle,
  ModalActions,
  RecipeSearchInput,
  RecipeSearchWrapper,
  RecipeList,
  RecipeItem,
  RecipeItemName,
  RecipeItemMeta,
  RecipeEmptyMsg,
} from './styles'

const DAY_ABBR = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
const MEALS = ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar']
const MONTH_NAMES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

type PlannerState = Record<string, string[]>
type ViewMode = 'week' | 'month'

function toDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function cellKey(dateKey: string, meal: string) {
  return `${dateKey}::${meal}`
}

function getWeekStart(date: Date): Date {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - d.getDay())
  return d
}

function getWeekDays(weekStart: Date): Date[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart)
    d.setDate(weekStart.getDate() + i)
    return d
  })
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  )
}

function isPastDay(d: Date, todayStart: Date): boolean {
  const dayStart = new Date(d)
  dayStart.setHours(0, 0, 0, 0)
  return dayStart < todayStart
}

export function Agenda() {
  const navigate = useNavigate()
  const [view, setView] = useState<ViewMode>('week')
  const [planner, setPlanner] = useState<PlannerState>({})
  const [modal, setModal] = useState<{ dateKey: string; meal: string } | null>(null)
  const [busca, setBusca] = useState('')

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [weekStart, setWeekStart] = useState(() => getWeekStart(today))
  const weekDays = useMemo(() => getWeekDays(weekStart), [weekStart])

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  )

  const receitasFiltradas = useMemo(
    () => receitasIniciais.filter(r => r.nome.toLowerCase().includes(busca.toLowerCase())),
    [busca],
  )

  const weekLabel = useMemo(() => {
    const last = weekDays[6]
    const fmt = (d: Date) => d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })
    return `${fmt(weekDays[0])} – ${fmt(last)} ${last.getFullYear()}`
  }, [weekDays])

  function openModal(dateKey: string, meal: string) {
    setBusca('')
    setModal({ dateKey, meal })
  }

  function closeModal() {
    setModal(null)
    setBusca('')
  }

  function selectReceita(nome: string) {
    if (!modal) return
    const key = cellKey(modal.dateKey, modal.meal)
    setPlanner(prev => ({
      ...prev,
      [key]: [...(prev[key] ?? []), nome],
    }))
    closeModal()
  }

  function removeMeal(dateKey: string, meal: string, index: number) {
    const key = cellKey(dateKey, meal)
    setPlanner(prev => {
      const lista = (prev[key] ?? []).filter((_, i) => i !== index)
      if (lista.length === 0) {
        const { [key]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [key]: lista }
    })
  }

  // Month calendar helpers
  function getCalendarDays() {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days: (number | null)[] = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let d = 1; d <= daysInMonth; d++) days.push(d)
    while (days.length % 7 !== 0) days.push(null)
    return days
  }

  function getDateObj(date: number): Date {
    return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date)
  }

  const calendarDays = getCalendarDays()

  return (
    <Wrapper>
      <PageTitle>Planejar a Semana</PageTitle>

      <ViewToggleGroup>
        <ViewToggleBtn $active={view === 'week'} onClick={() => setView('week')}>
          Semana
        </ViewToggleBtn>
        <ViewToggleBtn $active={view === 'month'} onClick={() => setView('month')}>
          Mês
        </ViewToggleBtn>
      </ViewToggleGroup>

      {view === 'week' ? (
        <>
          <WeekNavBar>
            <WeekNavBtn
              onClick={() => setWeekStart(prev => {
                const d = new Date(prev); d.setDate(d.getDate() - 7); return d
              })}
            >
              <ChevronLeft size={16} />
            </WeekNavBtn>
            <WeekLabel
              onClick={() => setWeekStart(getWeekStart(today))}
              title="Voltar para semana atual"
            >
              {weekLabel}
            </WeekLabel>
            <WeekNavBtn
              onClick={() => setWeekStart(prev => {
                const d = new Date(prev); d.setDate(d.getDate() + 7); return d
              })}
            >
              <ChevronRight size={16} />
            </WeekNavBtn>
          </WeekNavBar>

          <PlannerGrid>
            <CornerCell />
            {weekDays.map(d => {
              const isToday = isSameDay(d, today)
              return (
                <DayHeader key={toDateKey(d)} $today={isToday}>
                  <DayHeaderAbr>{DAY_ABBR[d.getDay()]}</DayHeaderAbr>
                  <DayHeaderNum $today={isToday}>{d.getDate()}</DayHeaderNum>
                </DayHeader>
              )
            })}

            {MEALS.map(meal => (
              <>
                <MealLabel key={`label-${meal}`}>{meal}</MealLabel>
                {weekDays.map(d => {
                  const dateKey = toDateKey(d)
                  const key = cellKey(dateKey, meal)
                  const itens = planner[key] ?? []
                  const past = isPastDay(d, today)
                  return (
                    <PlannerCell key={key} $past={past}>
                      {itens.map((item, i) => (
                        <MealTag key={i}>
                          <MealTagName>{item}</MealTagName>
                          {!past && (
                            <RemoveTag onClick={() => removeMeal(dateKey, meal, i)}>
                              <X size={10} />
                            </RemoveTag>
                          )}
                        </MealTag>
                      ))}
                      {!past && (
                        <AddButton
                          onClick={() => openModal(dateKey, meal)}
                          title={`Adicionar ${meal}`}
                        >
                          <Plus size={14} />
                        </AddButton>
                      )}
                    </PlannerCell>
                  )
                })}
              </>
            ))}
          </PlannerGrid>
        </>
      ) : (
        <MonthWrapper>
          <MonthHeader>
            <MonthNav
              onClick={() =>
                setCurrentMonth(m => new Date(m.getFullYear(), m.getMonth() - 1, 1))
              }
            >
              <ChevronLeft size={18} />
            </MonthNav>
            <MonthTitle>
              {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </MonthTitle>
            <MonthNav
              onClick={() =>
                setCurrentMonth(m => new Date(m.getFullYear(), m.getMonth() + 1, 1))
              }
            >
              <ChevronRight size={18} />
            </MonthNav>
          </MonthHeader>

          <MonthGrid>
            {DAY_ABBR.map(d => (
              <MonthDayHeader key={d}>{d}</MonthDayHeader>
            ))}
            {calendarDays.map((date, i) => {
              if (!date) return <MonthDayCell key={`empty-${i}`} $empty />

              const dateObj = getDateObj(date)
              const dateKey = toDateKey(dateObj)
              const todayCell = isSameDay(dateObj, today)
              const past = isPastDay(dateObj, today)
              const allMeals = MEALS.flatMap(meal => planner[cellKey(dateKey, meal)] ?? [])

              return (
                <MonthDayCell
                  key={dateKey}
                  $today={todayCell}
                  $past={past}
                  onClick={past ? undefined : () => openModal(dateKey, MEALS[0])}
                >
                  <MonthDayNumber $today={todayCell}>{date}</MonthDayNumber>
                  {allMeals.slice(0, 2).map((item, idx) => (
                    <MonthMealTag key={idx}>{item}</MonthMealTag>
                  ))}
                  {allMeals.length > 2 && (
                    <MonthMealTag $more>+{allMeals.length - 2} mais</MonthMealTag>
                  )}
                </MonthDayCell>
              )
            })}
          </MonthGrid>
        </MonthWrapper>
      )}

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
          <ModalCard $wide onClick={e => e.stopPropagation()}>
            <ModalTitle>
              {modal.meal} —{' '}
              {new Date(modal.dateKey + 'T00:00:00').toLocaleDateString('pt-BR', {
                weekday: 'short', day: 'numeric', month: 'short',
              })}
            </ModalTitle>

            <RecipeSearchWrapper>
              <Search size={15} />
              <RecipeSearchInput
                type="text"
                placeholder="Filtrar receitas..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
                autoFocus
              />
            </RecipeSearchWrapper>

            <RecipeList>
              {receitasFiltradas.length === 0 ? (
                <RecipeEmptyMsg>Nenhuma receita encontrada.</RecipeEmptyMsg>
              ) : (
                receitasFiltradas.map(r => (
                  <RecipeItem key={r.id} onClick={() => selectReceita(r.nome)}>
                    <RecipeItemName>{r.nome}</RecipeItemName>
                    <RecipeItemMeta>
                      <Clock size={11} /> {r.tempoPreparo} {r.unidadePreparo}
                      <Zap size={11} style={{ marginLeft: '0.5rem' }} /> {r.complexidade}
                    </RecipeItemMeta>
                  </RecipeItem>
                ))
              )}
            </RecipeList>

            <ModalActions>
              <Button variant="ghost" onClick={closeModal}>Cancelar</Button>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </Wrapper>
  )
}
