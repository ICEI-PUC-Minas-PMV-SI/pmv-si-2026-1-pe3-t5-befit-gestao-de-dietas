import { Header } from '../../components/Header'
import imgInicio from '../../assets/img_inicio.png'
import {
  HeroSection,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroBody,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroImages,
  HeroImage,
} from './styles'

export function Home() {
  return (
    <>
      <Header />

      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle $size="5xl" $weight="bold">
              Chegou a hora<br />de ser fitness
            </HeroTitle>

            <HeroSubtitle $size="xl" $weight="bold">Dieta da vez? Aqui não!</HeroSubtitle>

            <HeroBody $size="md">
              Acreditamos em alimentação consciente, não em restrições.
              Descubra receitas que cabem no seu estilo de vida e fazem você
              se sentir incrível – dentro e fora da cozinha. Clique em Cadastrar
              e comece sua jornada para uma vida mais equilibrada e saudável!
            </HeroBody>

            <HeroActions>
              <PrimaryButton type="button">Cadastrar</PrimaryButton>
              <SecondaryButton type="button">Entrar</SecondaryButton>
            </HeroActions>
          </HeroText>

          <HeroImages>
            <HeroImage src={imgInicio} alt="Alimentos saudáveis e vida fitness" />
          </HeroImages>
        </HeroContent>
      </HeroSection>
    </>
  )
}
