import styled from 'styled-components'
import { Heading, Text } from '../../styles/typography'

export const HeroSection = styled.section`
  background-color: ${props => props.theme['orange-500']};
  min-height: calc(100vh - 72px);
  padding: 3rem 2rem;
  overflow: hidden;
`

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

export const HeroTitle = styled(Heading)`
  color: ${props => props.theme['brown-900']};
  line-height: 1.1;
`

export const HeroSubtitle = styled(Heading).attrs({ as: 'h2' })`
  color: ${props => props.theme['brown-900']};
`

export const HeroBody = styled(Text)`
  color: ${props => props.theme['brown-900']};
  text-align: justify;
  max-width: 440px;
`

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`

export const PrimaryButton = styled.button`
  padding: 0.75rem 2.25rem;
  border-radius: 999px;
  font-weight: 600;
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme['green-700']};
  }

  &:active {
    transform: scale(0.98);
  }
`

export const SecondaryButton = styled.button`
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

export const HeroImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const HeroImage = styled.img`
  max-width: 100%;
  max-height: 520px;
  object-fit: contain;
`
