import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-700']};
`

export const Input = styled.input<{ $hasError: boolean }>`
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ $hasError, theme }) => ($hasError ? '#e53e3e' : theme['gray-300'])};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-900']};
  background: ${({ theme }) => theme.white};
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }

  &:focus {
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 0 0 3px rgba(118, 174, 29, 0.15);
  }
`

export const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: #e53e3e;
`
