import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Welcome = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-800']};
  text-align: center;

  span {
    font-weight: 400;
  }
`

export const Highlight = styled.div`
  display: inline;
  color: ${({ theme }) => theme['orange-500']};
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
