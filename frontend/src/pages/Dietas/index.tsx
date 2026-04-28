import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Utensils, Plus, Save, BookOpen, Trash2 } from 'lucide-react'
import { InputField } from '../../components/InputField'
import { Button } from '../../components/Button'
import {
  PageWrapper,
  FormPanel,
  PreviewPanel,
  StepLabel,
  PageTitle,
  PageHelper,
  FormGrid,
  SelectField,
  TextareaField,
  FormActions,
  StatusMessage,
  PreviewTitle,
  EmptyState,
  MealGroup,
  MealGroupTitle,
  FoodList,
  FoodItem,
  FoodInfo,
  FoodName,
  FoodMeta,
  RemoveButton,
} from './styles'

interface Alimento {
  tipo: string
  nome: string
  gramas: number
  alergias: string
}

type DietaState = Record<string, Alimento[]>

const refeicaoOptions = ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar']
const tipoOptions = ['Carboidrato', 'Proteína', 'Gordura Saudável', 'Vegetal']

export function Dietas() {
  const navigate = useNavigate()

  const [dieta, setDieta] = useState<DietaState>({})
  const [refeicao, setRefeicao] = useState('')
  const [tipo, setTipo] = useState('')
  const [nome, setNome] = useState('')
  const [gramas, setGramas] = useState('')
  const [alergias, setAlergias] = useState('')
  const [status, setStatus] = useState<{ text: string; tipo: 'sucesso' | 'erro' } | null>(null)

  function mostrarStatus(text: string, tipo: 'sucesso' | 'erro') {
    setStatus({ text, tipo })
    setTimeout(() => setStatus(null), 3000)
  }

  function adicionarAlimento() {
    if (!refeicao || !tipo || !nome.trim() || !gramas) {
      mostrarStatus('Preencha refeição, tipo, alimento e quantidade.', 'erro')
      return
    }
    if (Number(gramas) <= 0) {
      mostrarStatus('Informe uma quantidade maior que zero.', 'erro')
      return
    }

    setDieta(prev => ({
      ...prev,
      [refeicao]: [...(prev[refeicao] ?? []), { tipo, nome: nome.trim(), gramas: Number(gramas), alergias }],
    }))

    mostrarStatus('Alimento adicionado à dieta.', 'sucesso')
    setRefeicao('')
    setTipo('')
    setNome('')
    setGramas('')
    setAlergias('')
  }

  function removerAlimento(refeicaoKey: string, index: number) {
    setDieta(prev => {
      const lista = prev[refeicaoKey].filter((_, i) => i !== index)
      if (lista.length === 0) {
        const { [refeicaoKey]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [refeicaoKey]: lista }
    })
  }

  function salvarDieta() {
    if (Object.keys(dieta).length === 0) {
      mostrarStatus('Adicione pelo menos um alimento antes de salvar.', 'erro')
      return
    }
    mostrarStatus('Dieta salva com sucesso!', 'sucesso')
    setDieta({})
  }

  const totalAlimentos = Object.values(dieta).reduce((acc, lista) => acc + lista.length, 0)

  return (
    <PageWrapper>
      <FormPanel>
        <StepLabel>Nova dieta</StepLabel>
        <PageTitle>Monte sua dieta</PageTitle>
        <PageHelper>Adicione um alimento por vez e acompanhe a composição antes de salvar.</PageHelper>

        <FormGrid>
          <div>
            <label htmlFor="refeicao">Refeição</label>
            <SelectField id="refeicao" value={refeicao} onChange={e => setRefeicao(e.target.value)}>
              <option value="">Selecione</option>
              {refeicaoOptions.map(r => <option key={r} value={r}>{r}</option>)}
            </SelectField>
          </div>

          <div>
            <label htmlFor="tipo">Tipo de alimento</label>
            <SelectField id="tipo" value={tipo} onChange={e => setTipo(e.target.value)}>
              <option value="">Selecione</option>
              {tipoOptions.map(t => <option key={t} value={t}>{t}</option>)}
            </SelectField>
          </div>

          <InputField
            id="nome"
            label="Alimento"
            type="text"
            placeholder="Ex.: arroz integral"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <InputField
            id="gramas"
            label="Quantidade (g)"
            type="number"
            min={1}
            placeholder="Gramas"
            value={gramas}
            onChange={e => setGramas(e.target.value)}
          />

          <div style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="alergias">Alergias ou observações</label>
            <TextareaField
              id="alergias"
              placeholder="Ex.: sem lactose"
              value={alergias}
              onChange={e => setAlergias(e.target.value)}
            />
          </div>
        </FormGrid>

        <FormActions>
          <Button type="button" variant="primary" onClick={adicionarAlimento}>
            <Plus size={16} /> Adicionar alimento
          </Button>
          <Button type="button" variant="secondary" onClick={salvarDieta}>
            <Save size={16} /> Salvar dieta
          </Button>
          <Button type="button" variant="ghost" onClick={() => navigate('/receitas')}>
            <BookOpen size={16} /> Selecionar receitas
          </Button>
        </FormActions>

        {status && <StatusMessage $tipo={status.tipo}>{status.text}</StatusMessage>}
      </FormPanel>

      <PreviewPanel>
        <PreviewTitle>
          <Utensils size={20} />
          Dieta completa
          {totalAlimentos > 0 && <span>({totalAlimentos} {totalAlimentos === 1 ? 'item' : 'itens'})</span>}
        </PreviewTitle>

        {Object.keys(dieta).length === 0 ? (
          <EmptyState>Nenhum alimento adicionado ainda.</EmptyState>
        ) : (
          Object.entries(dieta).map(([refeicaoKey, alimentos]) => (
            <MealGroup key={refeicaoKey}>
              <MealGroupTitle>{refeicaoKey}</MealGroupTitle>
              <FoodList>
                {alimentos.map((alimento, i) => (
                  <FoodItem key={i}>
                    <FoodInfo>
                      <FoodName>{alimento.nome}</FoodName>
                      <FoodMeta>{alimento.gramas}g · {alimento.tipo}</FoodMeta>
                      {alimento.alergias && <FoodMeta>{alimento.alergias}</FoodMeta>}
                    </FoodInfo>
                    <RemoveButton onClick={() => removerAlimento(refeicaoKey, i)} title="Remover">
                      <Trash2 size={14} />
                    </RemoveButton>
                  </FoodItem>
                ))}
              </FoodList>
            </MealGroup>
          ))
        )}
      </PreviewPanel>
    </PageWrapper>
  )
}
