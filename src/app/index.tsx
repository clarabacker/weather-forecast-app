import { GlobalStyles } from '../components/UI/GlobalStyles'
import { WeatherContainer } from '../containers/WeatherContainer'
import * as S from './app.styles'

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <S.Wrapper>
        <WeatherContainer />
      </S.Wrapper>
    </>
  )
}
