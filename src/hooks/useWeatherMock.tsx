import { useState } from 'react'

import { weatherMocks } from '../mocks/weatherMocks'
import type { WeatherData } from '../types/weather'

export const useWeatherMock = () => {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async (city: string) => {
    setLoading(true)
    setError(null)

    try {
      const key = city.trim()

      if (!key) {
        throw new Error('Digite uma cidade para pesquisar.')
      }

      await new Promise((resolve) => setTimeout(resolve, 300))

      const mock = weatherMocks[key]

      if (mock) {
        setData(mock)
        console.log(`Mock carregado: ${key}`, mock)
      } else {
        throw new Error(`Nenhum mock encontrado para "${city}".`)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar mock.')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchWeather }
}
