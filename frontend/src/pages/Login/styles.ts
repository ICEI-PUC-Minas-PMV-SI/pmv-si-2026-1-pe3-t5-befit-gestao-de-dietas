import styled from 'styled-components'

export const FormCard = styled.form`
  background: ${({ theme }) => theme.white};
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const FormTitle = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-900']};
  text-align: center;
`

export const FormSubtitle = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
  text-align: center;
  margin-top: -0.5rem;
`

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SignupLink = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-600']};
  text-align: center;

  a {
    color: ${({ theme }) => theme['green-500']};
    font-weight: 600;
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme['green-700']};
    }
  }
`
