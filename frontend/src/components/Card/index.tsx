import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CardWrapper, CardHeader, CardIcon, CardTitle, CardImage, CardAction } from './styles'

interface CardProps {
  title: string
  icon: ReactNode
  image: string
  to: string
}

export function Card({ title, icon, image, to }: CardProps) {
  const navigate = useNavigate()

  return (
    <CardWrapper onClick={() => navigate(to)}>
      <CardHeader>
        <CardIcon>{icon}</CardIcon>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardImage src={image} alt={title} />
      <CardAction>
        <span>Acessar</span>
        <ArrowRight size={16} />
      </CardAction>
    </CardWrapper>
  )
}
