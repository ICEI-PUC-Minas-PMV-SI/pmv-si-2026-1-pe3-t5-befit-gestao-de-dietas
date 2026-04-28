import styled from 'styled-components'

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem 0.5rem;
`

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme['green-500']};
`

export const CardTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-800']};
`

export const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  flex: 1;
`

export const CardAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 0.875rem;
  transition: background 0.2s;

  ${CardWrapper}:hover & {
    background: ${({ theme }) => theme['green-700']};
  }
`
