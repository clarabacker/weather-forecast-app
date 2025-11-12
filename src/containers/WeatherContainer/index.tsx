import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CurrentWeatherCard } from '../../components/CurrentWeatherCard'
import { SearchBar } from '../../components/SearchBar'
import { Alert } from '../../components/UI/Alert'
import { WeatherDetailsGrid } from '../../components/WeatherDetailsGrid'
import { weatherIcons } from '../../helpers/weatherIcons'
import { useWeather } from '../../hooks/useWeather'
import { useWeatherMock } from '../../hooks/useWeatherMock'
import { getWeatherTheme } from '../../themes/weatherThemes'
import { roundNumber } from '../../utils/number'
import { capitalizeAllWords } from '../../utils/string'

interface WeatherContainerProps {
  setTheme: (theme: any) => void
}

export const WeatherContainer: React.FC<WeatherContainerProps> = ({
  setTheme,
}) => {
  const [cidade, setCidade] = useState('')
  const [useMock, setUseMock] = useState(false)

  const useMockEnv = import.meta.env.VITE_USE_MOCK === 'true'
  const realWeather = useWeather()
  const mockWeather = useWeatherMock()
  const { data, loading, error } = useMock ? mockWeather : realWeather

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (data) {
      const newTheme = getWeatherTheme(
        data.weather[0].main,
        data.weather[0].icon
      )
      setTheme(newTheme)
      console.log('tema:', newTheme)
    }
  }, [data, setTheme])

  useEffect(() => {
    const cidadeParam = searchParams.get('cidade')
    if (cidadeParam) {
      setCidade(cidadeParam)
      handleFetch(cidadeParam)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(e.target.value)
  }

  const handleFetch = async (city: string) => {
    const trimmed = city.trim()
    if (!trimmed) return

    if (useMockEnv) {
      console.log('Usando mock (definido em .env)')
      setUseMock(true)
      await mockWeather.fetchWeather(trimmed)
      return
    }

    await realWeather.fetchWeather(trimmed)
  }

  const handleSearch = () => {
    const trimmedCity = cidade.trim()
    if (!trimmedCity) return

    handleFetch(trimmedCity)

    setSearchParams({ cidade: trimmedCity })
  }

  const iconCode = data?.weather[0].icon
  const iconSrc = weatherIcons[iconCode ?? '01d']

  return (
    <>
      {!loading && useMock && (
        <Alert severity="warning" isClosable={true}>
          Usando dados simulados (mock)
        </Alert>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      <SearchBar
        cidade={cidade}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      {loading && <p>Carregando...</p>}

      {data && (
        <>
          <CurrentWeatherCard
            temperature={roundNumber(data.main.temp)}
            weatherStatus={capitalizeAllWords(data.weather[0].description)}
            location={`${data.name}, ${data.sys.country}`}
            iconSrc={iconSrc}
          />
          <WeatherDetailsGrid
            maxTemp={roundNumber(data.main.temp_max)}
            minTemp={roundNumber(data.main.temp_min)}
            humidity={roundNumber(data.main.humidity)}
            windSpeed={data.wind.speed}
          />
        </>
      )}
    </>
  )
}
