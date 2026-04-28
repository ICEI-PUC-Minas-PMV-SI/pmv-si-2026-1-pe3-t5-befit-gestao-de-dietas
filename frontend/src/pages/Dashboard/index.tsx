import { Utensils, BookOpen, Calculator, ShoppingCart, BarChart3, Sparkles } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { Card } from '../../components/Card'
import cadDieta from '../../assets/cad_dieta.png'
import favReceita from '../../assets/fav_receita.png'
import calImc from '../../assets/cal_imc.png'
import listaCompra from '../../assets/lista_compra.png'
import imgRelatorio from '../../assets/img_relatorio.png'
import newReceita from '../../assets/new_receita.png'
import { Wrapper, Welcome, Highlight, CardsGrid } from './styles'

const cards = [
  { title: 'Cadastrar Nova Dieta', icon: <Utensils size={20} />, image: cadDieta, to: '/dietas' },
  { title: 'Outras Receitas', icon: <BookOpen size={20} />, image: favReceita, to: '/receitas' },
  { title: 'Cálculo IMC', icon: <Calculator size={20} />, image: calImc, to: '/imc' },
  { title: 'Lista de Compras', icon: <ShoppingCart size={20} />, image: listaCompra, to: '/compras' },
  { title: 'Relatórios', icon: <BarChart3 size={20} />, image: imgRelatorio, to: '/relatorios' },
  { title: 'Receitas Sugeridas', icon: <Sparkles size={20} />, image: newReceita, to: '/receitas' },
]

export function Dashboard() {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0]

  return (
    <Wrapper>
      <Welcome>
        Bem vindo ao B<Highlight>e</Highlight>Fit
        {firstName && <span>, {firstName}</span>}!
      </Welcome>
      <CardsGrid>
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </CardsGrid>
    </Wrapper>
  )
}
