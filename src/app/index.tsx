import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../components/UI/GlobalStyles'
import { WeatherContainer } from '../containers/WeatherContainer'
import { getWeatherTheme } from '../themes/weatherThemes'
import * as S from './app.styles'

export const App = () => {
  const [theme, setTheme] = useState(getWeatherTheme('clear'))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <S.Wrapper>
        <S.Title>Weather App</S.Title>
        <WeatherContainer setTheme={setTheme} />
      </S.Wrapper>
    </ThemeProvider>
  )
}
