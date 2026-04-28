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
  LoginLink,
} from './styles'

export function Cadastro() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const next: Record<string, string> = {}
    if (!nome.trim()) next.nome = 'Informe seu nome completo.'
    if (!email.trim()) next.email = 'Informe seu e-mail.'
    if (senha.length < 4) next.senha = 'A senha deve ter no mínimo 4 caracteres.'
    if (senha !== confirmarSenha) next.confirmarSenha = 'As senhas não coincidem.'
    return next
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setErrors({})
    setLoading(true)
    try {
      const { user, token } = await authService.register({ name: nome, email, password: senha })
      login(user, token)
      navigate('/dashboard')
    } catch {
      setErrors({ geral: 'Erro ao criar conta. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormCard onSubmit={handleSubmit} noValidate>
      <FormTitle>Crie sua conta</FormTitle>
      <FormSubtitle>Acompanhe suas dietas, receitas e relatórios com mais clareza.</FormSubtitle>

      <FieldsWrapper>
        <InputField
          id="nome"
          label="Nome completo"
          type="text"
          placeholder="Ex.: Maria Silva"
          autoComplete="name"
          value={nome}
          onChange={e => setNome(e.target.value)}
          error={errors.nome}
        />
        <InputField
          id="email"
          label="E-mail"
          type="email"
          placeholder="voce@email.com"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={errors.email}
        />
        <InputField
          id="senha"
          label="Senha"
          type="password"
          placeholder="Crie uma senha"
          autoComplete="new-password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          error={errors.senha}
        />
        <InputField
          id="confirmarSenha"
          label="Confirmar senha"
          type="password"
          placeholder="Repita a senha"
          autoComplete="new-password"
          value={confirmarSenha}
          onChange={e => setConfirmarSenha(e.target.value)}
          error={errors.confirmarSenha}
        />
      </FieldsWrapper>

      {errors.geral && <p style={{ color: '#e53e3e', fontSize: '0.875rem', textAlign: 'center' }}>{errors.geral}</p>}

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'Criando conta...' : 'Cadastrar'}
      </Button>

      <LoginLink>
        Já possui conta? <Link to="/login">Faça login</Link>
      </LoginLink>
    </FormCard>
  )
}
