import { CurrentWeatherCard } from '../components/CurrentWeatherCard'
import { GlobalStyles } from '../components/UI/GlobalStyles'
import { SearchBarContainer } from '../containers/SearchBarContainer'
import * as S from './app.styles'

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <S.Wrapper>
        <SearchBarContainer />

        <CurrentWeatherCard
          temperature={27}
          weatherStatus="Ensolarado"
          location="Niterói"
        />
      </S.Wrapper>
    </>
  )
}
