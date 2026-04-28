import { useState } from 'react'
import { Printer, Plus, Trash2, ShoppingCart } from 'lucide-react'
import { Button } from '../../components/Button'
import { InputField } from '../../components/InputField'
import {
  Wrapper,
  Header,
  PageTitle,
  PageSubtitle,
  HeaderActions,
  AddForm,
  AddFormRow,
  ItemsList,
  ItemRow,
  ItemCheckbox,
  ItemInfo,
  ItemName,
  ItemQty,
  RemoveButton,
  EmptyState,
  Summary,
  PrintArea,
} from './styles'

interface ShoppingItem {
  id: string
  nome: string
  quantidade: string
  isPurchased: boolean
}

function generateId() {
  return Math.random().toString(36).slice(2)
}

const initialItems: ShoppingItem[] = [
  { id: generateId(), nome: 'Frango', quantidade: '500g', isPurchased: false },
  { id: generateId(), nome: 'Arroz integral', quantidade: '1kg', isPurchased: false },
  { id: generateId(), nome: 'Brócolis', quantidade: '300g', isPurchased: false },
]

export function Compras() {
  const [items, setItems] = useState<ShoppingItem[]>(initialItems)
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [error, setError] = useState('')

  function addItem() {
    if (!nome.trim()) {
      setError('Informe o nome do item.')
      return
    }
    setError('')
    setItems(prev => [
      ...prev,
      { id: generateId(), nome: nome.trim(), quantidade: quantidade.trim(), isPurchased: false },
    ])
    setNome('')
    setQuantidade('')
  }

  function toggleItem(id: string) {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, isPurchased: !item.isPurchased } : item)
    )
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  function clearPurchased() {
    setItems(prev => prev.filter(item => !item.isPurchased))
  }

  const total = items.length
  const purchased = items.filter(i => i.isPurchased).length
  const pending = total - purchased

  return (
    <Wrapper>
      <Header>
        <div>
          <PageTitle>
            <ShoppingCart size={22} /> Lista de Compras
          </PageTitle>
          <PageSubtitle>
            {pending} {pending === 1 ? 'item pendente' : 'itens pendentes'} · {purchased} {purchased === 1 ? 'comprado' : 'comprados'}
          </PageSubtitle>
        </div>
        <HeaderActions>
          {purchased > 0 && (
            <Button variant="ghost" size="sm" onClick={clearPurchased}>
              Limpar comprados
            </Button>
          )}
          <Button variant="secondary" size="sm" onClick={() => window.print()}>
            <Printer size={15} /> Imprimir
          </Button>
        </HeaderActions>
      </Header>

      <AddForm>
        <AddFormRow>
          <InputField
            id="nome-item"
            label="Item"
            type="text"
            placeholder="Ex.: Frango"
            value={nome}
            onChange={e => setNome(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addItem()}
            error={error}
          />
          <InputField
            id="qtd-item"
            label="Quantidade"
            type="text"
            placeholder="Ex.: 500g"
            value={quantidade}
            onChange={e => setQuantidade(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addItem()}
          />
          <Button variant="primary" onClick={addItem} style={{ alignSelf: 'flex-end' }}>
            <Plus size={16} /> Adicionar
          </Button>
        </AddFormRow>
      </AddForm>

      <PrintArea>
        {items.length === 0 ? (
          <EmptyState>Nenhum item na lista. Adicione acima!</EmptyState>
        ) : (
          <ItemsList>
            {items.map(item => (
              <ItemRow key={item.id} $purchased={item.isPurchased}>
                <ItemCheckbox
                  type="checkbox"
                  checked={item.isPurchased}
                  onChange={() => toggleItem(item.id)}
                  aria-label={`Marcar ${item.nome} como comprado`}
                />
                <ItemInfo>
                  <ItemName $purchased={item.isPurchased}>{item.nome}</ItemName>
                  {item.quantidade && <ItemQty>{item.quantidade}</ItemQty>}
                </ItemInfo>
                <RemoveButton onClick={() => removeItem(item.id)} title="Remover item">
                  <Trash2 size={14} />
                </RemoveButton>
              </ItemRow>
            ))}
          </ItemsList>
        )}
      </PrintArea>

      {total > 0 && (
        <Summary>
          {purchased}/{total} {purchased === 1 ? 'item comprado' : 'itens comprados'}
        </Summary>
      )}
    </Wrapper>
  )
}
