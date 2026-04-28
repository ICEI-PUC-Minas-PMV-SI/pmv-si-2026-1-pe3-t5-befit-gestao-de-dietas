import { useState, useMemo } from 'react'
import { Star, ChevronsUpDown, X, Printer, Clock, Zap } from 'lucide-react'
import { Button } from '../../components/Button'
import imgReceitas from '../../assets/img_receitas.png'
import { receitasIniciais, type Receita } from '../../data/receitas'
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
