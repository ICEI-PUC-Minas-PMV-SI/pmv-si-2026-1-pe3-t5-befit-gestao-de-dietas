import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  background-color: ${({ theme }) => theme['orange-500']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 3rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`

export const HeroRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Eyebrow = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 0.4rem 0.875rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.88);
  color: ${({ theme }) => theme['green-500']};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
`

export const HeroTitle = styled.div`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.08;
  color: ${({ theme }) => theme['brown-700']};
  margin-bottom: 1rem;
  max-width: 560px;
`

export const HeroSubtitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme['brown-900']};
  margin-bottom: 1rem;
`

export const HeroDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme['brown-700']};
  max-width: 480px;
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`

const baseLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover { transform: scale(1.03); }
  &:active { transform: scale(0.98); }
`

export const LinkButtonPrimary = styled(baseLinkButton)`
  background-color: ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme.white};

  &:hover { background-color: ${({ theme }) => theme['green-500']}; }
`

export const LinkButtonSecondary = styled(baseLinkButton)`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme['green-500']};
  border: 2px solid ${({ theme }) => theme['green-500']};

  &:hover { background-color: rgba(255, 255, 255, 0.85); }
`

export const HeroImage = styled.img`
  width: 100%;
  max-width: 580px;
  height: auto;
  display: block;
  object-fit: cover;
  align-self: flex-end;
`
