import { CurrentWeatherCard } from '../components/CurrentWeatherCard'
import { GlobalStyles } from '../components/UI/GlobalStyles'
import { WeatherDetailsGrid } from '../components/WeatherDetailsGrid'
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

        <WeatherDetailsGrid
          maxTemp={30}
          minTemp={12}
          humidity={50}
          windSpeed={50}
        />
      </S.Wrapper>
    </>
  )
}
