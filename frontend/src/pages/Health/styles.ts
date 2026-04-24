import styled from 'styled-components'
import { Heading, Text } from '../../styles/typography'

export const BannerSection = styled.section`
  position: relative;
  background-color: ${props => props.theme['gray-200']};
  width: 100%;
  height: 260px;
  overflow: hidden;
`

export const BannerTitle = styled(Heading)`
  position: absolute;
  top: 2.5rem;
  left: 27.5rem;
  color: ${props => props.theme['orange-700']};
  z-index: 1;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`

export const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

export const ContentText = styled(Text)`
  color: ${props => props.theme['gray-900']};
  text-align: justify;
`

export const LearnMoreButton = styled.button`
  align-self: flex-start;
  padding: 0.75rem 2.25rem;
  border-radius: 999px;
  font-weight: 600;
  background-color: ${props => props.theme['green-300']};
  color: ${props => props.theme.white};
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme['green-500']};
  }

  &:active {
    transform: scale(0.98);
  }
`

export const ContentRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const FoodImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
`
