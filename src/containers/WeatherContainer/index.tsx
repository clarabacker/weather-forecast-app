import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CurrentWeatherCard } from '../../components/CurrentWeatherCard'
import { SearchBar } from '../../components/SearchBar'
import { WeatherDetailsGrid } from '../../components/WeatherDetailsGrid'
import { weatherIcons } from '../../helpers/weatherIcons'
import { useWeather } from '../../hooks/useWeather'
import { roundNumber } from '../../utils/number'
import { capitalizeAllWords } from '../../utils/string'

export const WeatherContainer = () => {
  const [cidade, setCidade] = useState('')
  const { data, loading, error, fetchWeather } = useWeather()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const cidadeParam = searchParams.get('cidade')
    if (cidadeParam) {
      setCidade(cidadeParam)
      fetchWeather(cidadeParam)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(e.target.value)
  }

  const handleSearch = () => {
    const trimmedCity = cidade.trim()
    if (!trimmedCity) return

    fetchWeather(trimmedCity)

    setSearchParams({ cidade: trimmedCity })
  }

  const iconCode = data?.weather[0].icon
  const iconSrc = weatherIcons[iconCode ?? '01d']

  return (
    <>
      <SearchBar
        cidade={cidade}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

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
