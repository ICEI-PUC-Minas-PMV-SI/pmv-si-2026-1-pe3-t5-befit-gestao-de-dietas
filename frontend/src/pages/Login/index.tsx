import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { authService } from '../../services/auth.service'
import { InputField } from '../../components/InputField'
import { Button } from '../../components/Button'
import {
  FormCard,
  FormTitle,
  FormSubtitle,
  FieldsWrapper,
  SignupLink,
} from './styles'

export function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Preencha e-mail e senha.')
      return
    }

    setLoading(true)
    try {
      const { user, token } = await authService.login({ email, password })
      login(user, token)
      navigate('/dashboard')
    } catch {
      setError('E-mail ou senha inválidos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormCard onSubmit={handleSubmit} noValidate>
      <FormTitle>Entre na sua conta</FormTitle>
      <FormSubtitle>Continue acompanhando suas dietas e relatórios.</FormSubtitle>

      <FieldsWrapper>
        <InputField
          id="email"
          label="E-mail"
          type="email"
          placeholder="voce@email.com"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={!email && error ? error : ''}
        />
        <InputField
          id="senha"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={error && email ? error : ''}
        />
      </FieldsWrapper>

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>

      <SignupLink>
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </SignupLink>
    </FormCard>
  )
}
