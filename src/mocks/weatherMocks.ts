/* eslint-disable camelcase */

export const weatherMocks: Record<string, any> = {
  clearDay: {
    weather: [{ main: 'Clear', description: 'Clear sky', icon: '01d' }],
    main: { temp: 25, temp_min: 23, temp_max: 28, humidity: 40 },
    wind: { speed: 3.5 },
    sys: { country: 'BR' },
    name: 'São Paulo',
  },
  clearNight: {
    weather: [{ main: 'Clear', description: 'Clear night', icon: '01n' }],
    main: { temp: 20, temp_min: 18, temp_max: 22, humidity: 35 },
    wind: { speed: 2.0 },
    sys: { country: 'BR' },
    name: 'Rio de Janeiro',
  },
  clouds: {
    weather: [{ main: 'Clouds', description: 'Overcast clouds', icon: '03d' }],
    main: { temp: 22, temp_min: 20, temp_max: 24, humidity: 50 },
    wind: { speed: 3.0 },
    sys: { country: 'BR' },
    name: 'Curitiba',
  },
  rain: {
    weather: [{ main: 'Rain', description: 'Light rain', icon: '10d' }],
    main: { temp: 18, temp_min: 16, temp_max: 20, humidity: 90 },
    wind: { speed: 5.0 },
    sys: { country: 'BR' },
    name: 'Rio de Janeiro',
  },
  thunderstorm: {
    weather: [
      { main: 'Thunderstorm', description: 'Thunderstorm', icon: '11d' },
    ],
    main: { temp: 19, temp_min: 17, temp_max: 21, humidity: 85 },
    wind: { speed: 6.0 },
    sys: { country: 'BR' },
    name: 'Belo Horizonte',
  },
  snow: {
    weather: [{ main: 'Snow', description: 'Snow', icon: '13d' }],
    main: { temp: -2, temp_min: -5, temp_max: 0, humidity: 70 },
    wind: { speed: 2.0 },
    sys: { country: 'BR' },
    name: 'Gramado',
  },
  mist: {
    weather: [{ main: 'Mist', description: 'Misty', icon: '50d' }],
    main: { temp: 15, temp_min: 14, temp_max: 16, humidity: 95 },
    wind: { speed: 1.5 },
    sys: { country: 'BR' },
    name: 'Porto Alegre',
  },
}
