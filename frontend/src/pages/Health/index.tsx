import { Header } from '../../components/Header'
// import bannerImg from '../../assets/img_saude_banner.png'
// import bowlImg from '../../assets/img_saude_bowl.png'
// import breadImg from '../../assets/img_saude_bread.png'
import {
  BannerSection,
  BannerTitle,
  // BannerImage,
  ContentSection,
  ContentLeft,
  ContentText,
  LearnMoreButton,
  ContentRight,
  // FoodImage,
} from './styles'

export function Health() {
  return (
    <>
      <Header />

      <BannerSection>
        <BannerTitle>Saúde</BannerTitle>
        {/* <BannerImage src={bannerImg} alt="Saúde e alimentação saudável" /> */}
      </BannerSection>

      <ContentSection>
        <ContentLeft>
          <ContentText>
            Combinar saúde com uma alimentação agora é mais fácil! Aqui há uma
            variedade de receitas adaptadas para todos os tipos de pessoas e
            necessidades, seja de diabéticos a intolerantes a lactose, todos tem
            a oportunidade de comer bem e ainda de acordo com a sua preferência.
          </ContentText>

          <LearnMoreButton type="button">Saiba Mais</LearnMoreButton>
        </ContentLeft>

        <ContentRight>
          {/* <FoodImage src={bowlImg} alt="Tigela de granola saudável" />
          <FoodImage src={breadImg} alt="Pães integrais" /> */}
        </ContentRight>
      </ContentSection>
    </>
  )
}
