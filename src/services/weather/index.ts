import type { WeatherData } from '../../types/weather'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const WeatherService = {
  async getWeatherByCity(
    city: string,
    units: 'metric' | 'imperial' = 'metric'
  ): Promise<WeatherData> {
    const url = `${BASE_URL}/weather?q=${encodeURIComponent(
      city
    )}&units=${units}&appid=${API_KEY}&lang=pt_br`

    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok || data.cod === '404') {
      throw new Error('Cidade não encontrada.')
    }

    return data
  },
}
