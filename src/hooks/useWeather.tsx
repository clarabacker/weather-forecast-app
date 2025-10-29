import { useState } from 'react'

import { WeatherService } from '../services/weather/index'
import type { WeatherData } from '../types/weather'

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async (city: string) => {
    setLoading(true)
    setError(null)
    try {
      const result = await WeatherService.getWeatherByCity(city)
      setData(result)
      console.log('Resultado da API:', result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar clima.')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchWeather }
}
