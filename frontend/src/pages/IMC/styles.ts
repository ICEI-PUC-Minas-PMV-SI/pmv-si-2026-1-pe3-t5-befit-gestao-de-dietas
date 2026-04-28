import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 2rem;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
`

export const RightPanel = styled.div`
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-800']};
`

export const Description = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme['gray-600']};
  line-height: 1.65;
  max-width: 560px;
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 480px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const ResultCard = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 5px solid ${({ $color }) => $color};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  max-width: 480px;
`

export const ResultLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme['gray-500']};
`

export const ResultValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-900']};
  line-height: 1;
`

export const ResultClass = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-700']};
  margin-bottom: 0.5rem;
`

export const GaugeBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme['gray-200']};
  overflow: hidden;
  margin-top: 0.5rem;
`

export const GaugeFill = styled.div<{ $percent: number; $color: string }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${({ $color }) => $color};
  border-radius: 999px;
  transition: width 0.6s ease;
`

export const GaugeLabels = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GaugeLabel = styled.div`
  font-size: 0.65rem;
  color: ${({ theme }) => theme['gray-400']};
`

export const TableWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.875rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  max-width: 560px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
`

export const Th = styled.th`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
`

export const Tbody = styled.tbody``

export const Tr = styled.tr<{ $highlight?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
  background: ${({ $highlight, theme }) => $highlight ? theme['orange-500'] + '22' : 'transparent'};
  font-weight: ${({ $highlight }) => $highlight ? '700' : '400'};
  transition: background 0.2s;

  &:last-child { border-bottom: none; }
`

export const Td = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-700']};
  text-align: center;
`
