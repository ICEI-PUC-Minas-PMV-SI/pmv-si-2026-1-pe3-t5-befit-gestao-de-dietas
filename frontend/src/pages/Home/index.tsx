import imgInicio from '../../assets/img_inicio.png'
import {
  HeroSection,
  HeroLeft,
  HeroRight,
  Eyebrow,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroActions,
  LinkButtonPrimary,
  LinkButtonSecondary,
  HeroImage,
} from './styles'

export function Home() {
  return (
    <HeroSection>
      <HeroLeft>
        <Eyebrow>Gestão de dietas BeFit</Eyebrow>
        <HeroTitle>Alimente sua rotina com mais equilíbrio.</HeroTitle>
        <HeroSubtitle>Dietas, receitas e relatórios em um só lugar.</HeroSubtitle>
        <HeroDescription>
          Organize suas refeições, acompanhe seu progresso e encontre receitas que combinam com o
          seu dia a dia. A BeFit ajuda você a transformar escolhas saudáveis em uma rotina simples,
          visual e fácil de manter.
        </HeroDescription>
        <HeroActions>
          <LinkButtonPrimary to="/cadastro">Começar</LinkButtonPrimary>
          <LinkButtonSecondary to="/login">Entrar</LinkButtonSecondary>
        </HeroActions>
      </HeroLeft>

      <HeroRight>
        <HeroImage src={imgInicio} alt="Pessoa preparando uma refeição saudável" />
      </HeroRight>
    </HeroSection>
  )
}
