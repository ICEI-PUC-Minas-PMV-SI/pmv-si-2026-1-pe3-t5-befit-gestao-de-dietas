import { useState, useMemo } from 'react'
import { Star, ChevronsUpDown, X, Printer, Clock, Zap } from 'lucide-react'
import { Button } from '../../components/Button'
import imgReceitas from '../../assets/img_receitas.png'
import {
  Wrapper,
  ContentArea,
  PageTitle,
  PageDesc,
  SearchInput,
  TableWrapper,
  Table,
  Thead,
  Th,
  SortButton,
  Tbody,
  Tr,
  Td,
  RecipeLink,
  StarButton,
  RightPanel,
  RightImage,
  ModalOverlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalSection,
  ModalSectionTitle,
  IngredientList,
  IngredientItem,
  PrepText,
  ModalActions,
} from './styles'

interface Ingrediente {
  nome: string
  quantidade: number
  medida: string
}

interface Receita {
  id: number
  nome: string
  tempoPreparo: number
  unidadePreparo: string
  complexidade: string
  favorita: boolean
  ingredientes: Ingrediente[]
  modoPreparo: string
}

const receitasIniciais: Receita[] = [
  {
    id: 1,
    nome: 'Panqueca de banana',
    tempoPreparo: 20,
    unidadePreparo: 'minutos',
    complexidade: 'Fácil',
    favorita: false,
    ingredientes: [
      { nome: 'banana', quantidade: 1, medida: 'unidade' },
      { nome: 'ovos', quantidade: 2, medida: 'unidade' },
      { nome: 'aveia', quantidade: 2, medida: 'colher de sopa' },
      { nome: 'cacau', quantidade: 1, medida: 'colher de sobremesa' },
      { nome: 'coco ralado', quantidade: 1, medida: 'colher de café' },
    ],
    modoPreparo:
      'Amasse a banana e misture com os ovos batidos. Adicione a aveia e o cacau, misturando até obter uma massa homogênea. Despeje pequenas porções em frigideira untada, tampe e vire quando dourarem. Polvilhe coco ralado por cima.',
  },
  {
    id: 2,
    nome: 'Berinjela recheada',
    tempoPreparo: 90,
    unidadePreparo: 'minutos',
    complexidade: 'Fácil',
    favorita: false,
    ingredientes: [
      { nome: 'berinjela', quantidade: 3, medida: 'unidades' },
      { nome: 'azeite', quantidade: 1, medida: 'colher de sopa' },
      { nome: 'alho', quantidade: 1, medida: 'dente' },
      { nome: 'carne moída', quantidade: 500, medida: 'gramas' },
      { nome: 'molho de tomate', quantidade: 300, medida: 'gramas' },
      { nome: 'queijo mussarela ralado', quantidade: 400, medida: 'gramas' },
      { nome: 'azeitonas fatiadas', quantidade: 100, medida: 'gramas' },
    ],
    modoPreparo:
      'Corte a berinjela ao meio, retire parte da polpa e pique em cubos. Refogue alho no azeite, adicione a carne moída, polpa da berinjela, molho de tomate e cebolinha. Recheie as berinjelas, cubra com queijo e azeitonas. Asse a 180°C por 30 minutos.',
  },
  {
    id: 3,
    nome: 'Pudim de chia',
    tempoPreparo: 120,
    unidadePreparo: 'minutos',
    complexidade: 'Médio',
    favorita: false,
    ingredientes: [
      { nome: 'iogurte natural', quantidade: 2, medida: 'unidades' },
      { nome: 'chia', quantidade: 50, medida: 'gramas' },
      { nome: 'leite', quantidade: 200, medida: 'ml' },
      { nome: 'adoçante', quantidade: 30, medida: 'gramas' },
      { nome: 'coco ralado', quantidade: 50, medida: 'gramas' },
    ],
    modoPreparo:
      'Misture o iogurte com a chia, leite, adoçante, baunilha, coco ralado e canela. Leve à geladeira para a chia hidratar. Sirva com frutas a gosto.',
  },
  {
    id: 4,
    nome: 'Frango com abobrinha',
    tempoPreparo: 55,
    unidadePreparo: 'minutos',
    complexidade: 'Médio',
    favorita: false,
    ingredientes: [
      { nome: 'abobrinha', quantidade: 2, medida: 'unidades' },
      { nome: 'azeite', quantidade: 1, medida: 'colher de café' },
      { nome: 'frango desfiado', quantidade: 400, medida: 'gramas' },
      { nome: 'cenoura', quantidade: 1, medida: 'unidade' },
      { nome: 'tomate', quantidade: 1, medida: 'unidade' },
      { nome: 'requeijão', quantidade: 100, medida: 'gramas' },
    ],
    modoPreparo:
      'Corte as abobrinhas em fatias finas e grelhe com azeite. Misture frango desfiado com azeitona, cenoura ralada, tomate picado e requeijão. Sobreponha três fatias, recheie e enrole. Sirva decorado com manjericão.',
  },
]

type SortKey = 'tempoPreparo' | 'complexidade'
type SortOrder = 'asc' | 'desc'

const complexidadeOrdem: Record<string, number> = { Fácil: 1, Médio: 2, Difícil: 3 }

export function Receitas() {
  const [receitas, setReceitas] = useState<Receita[]>(receitasIniciais)
  const [busca, setBusca] = useState('')
  const [sort, setSort] = useState<{ key: SortKey; order: SortOrder } | null>(null)
  const [selecionada, setSelecionada] = useState<Receita | null>(null)

  function toggleFavorita(id: number) {
    setReceitas(prev =>
      prev.map(r => r.id === id ? { ...r, favorita: !r.favorita } : r)
    )
  }

  function toggleSort(key: SortKey) {
    setSort(prev =>
      prev?.key === key
        ? { key, order: prev.order === 'asc' ? 'desc' : 'asc' }
        : { key, order: 'asc' }
    )
  }

  const lista = useMemo(() => {
    let result = receitas.filter(r =>
      r.nome.toLowerCase().includes(busca.toLowerCase())
    )
    if (sort) {
      result = [...result].sort((a, b) => {
        let valA: number, valB: number
        if (sort.key === 'tempoPreparo') {
          valA = a.tempoPreparo
          valB = b.tempoPreparo
        } else {
          valA = complexidadeOrdem[a.complexidade] ?? 99
          valB = complexidadeOrdem[b.complexidade] ?? 99
        }
        return sort.order === 'asc' ? valA - valB : valB - valA
      })
    }
    return result
  }, [receitas, busca, sort])

  return (
    <Wrapper>
      <ContentArea>
        <PageTitle>Receitas</PageTitle>
        <PageDesc>
          Receitas personalizadas de acordo com seu protocolo alimentar. Ordene por complexidade ou
          tempo de preparo e favorite as que mais gostar.
        </PageDesc>

        <SearchInput
          type="text"
          placeholder="Buscar receita..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Receita</Th>
                <Th>
                  <SortButton onClick={() => toggleSort('tempoPreparo')}>
                    <Clock size={14} /> Tempo de preparo <ChevronsUpDown size={13} />
                  </SortButton>
                </Th>
                <Th>
                  <SortButton onClick={() => toggleSort('complexidade')}>
                    <Zap size={14} /> Complexidade <ChevronsUpDown size={13} />
                  </SortButton>
                </Th>
                <Th>Favorita</Th>
              </tr>
            </Thead>
            <Tbody>
              {lista.map(receita => (
                <Tr key={receita.id}>
                  <Td>
                    <RecipeLink onClick={() => setSelecionada(receita)}>
                      {receita.nome}
                    </RecipeLink>
                  </Td>
                  <Td>{receita.tempoPreparo} {receita.unidadePreparo}</Td>
                  <Td>{receita.complexidade}</Td>
                  <Td>
                    <StarButton
                      $active={receita.favorita}
                      onClick={() => toggleFavorita(receita.id)}
                      aria-label={receita.favorita ? 'Remover favorito' : 'Favoritar'}
                    >
                      <Star size={20} fill={receita.favorita ? 'currentColor' : 'none'} />
                    </StarButton>
                  </Td>
                </Tr>
              ))}
              {lista.length === 0 && (
                <tr>
                  <Td colSpan={4} style={{ textAlign: 'center', color: '#a3a3a3' }}>
                    Nenhuma receita encontrada.
                  </Td>
                </tr>
              )}
            </Tbody>
          </Table>
        </TableWrapper>
      </ContentArea>

      <RightPanel>
        <RightImage src={imgReceitas} alt="Receitas saudáveis" />
      </RightPanel>

      {selecionada && (
        <ModalOverlay onClick={() => setSelecionada(null)}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{selecionada.nome}</ModalTitle>
              <ModalClose onClick={() => setSelecionada(null)}><X size={20} /></ModalClose>
            </ModalHeader>

            <ModalSection>
              <ModalSectionTitle>Ingredientes</ModalSectionTitle>
              <IngredientList>
                {selecionada.ingredientes.map((ing, i) => (
                  <IngredientItem key={i}>
                    {ing.quantidade} {ing.medida} de {ing.nome}
                  </IngredientItem>
                ))}
              </IngredientList>
            </ModalSection>

            <ModalSection>
              <ModalSectionTitle>Modo de preparo</ModalSectionTitle>
              <PrepText>{selecionada.modoPreparo}</PrepText>
            </ModalSection>

            <ModalActions>
              <Button variant="ghost" onClick={() => setSelecionada(null)}>Fechar</Button>
              <Button variant="secondary" onClick={() => window.print()}>
                <Printer size={15} /> Imprimir
              </Button>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </Wrapper>
  )
}
