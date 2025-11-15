/* eslint-disable camelcase */

export const weatherMocks: Record<string, any> = {
  'São Paulo': {
    weather: [{ main: 'Clear', description: 'céu limpo', icon: '01d' }],
    main: { temp: 25, temp_min: 23, temp_max: 28, humidity: 40 },
    wind: { speed: 3.5 },
    sys: { country: 'BR' },
    name: 'São Paulo',
  },
  Niterói: {
    weather: [{ main: 'Clear', description: 'céu limpo', icon: '01n' }],
    main: { temp: 20, temp_min: 18, temp_max: 22, humidity: 35 },
    wind: { speed: 2.0 },
    sys: { country: 'BR' },
    name: 'Niterói',
  },
  Curitiba: {
    weather: [{ main: 'Clouds', description: 'nublado', icon: '03d' }],
    main: { temp: 22, temp_min: 20, temp_max: 24, humidity: 50 },
    wind: { speed: 3.0 },
    sys: { country: 'BR' },
    name: 'Curitiba',
  },
  'Rio de Janeiro': {
    weather: [{ main: 'Rain', description: 'chuva moderada', icon: '10d' }],
    main: { temp: 18, temp_min: 16, temp_max: 20, humidity: 90 },
    wind: { speed: 5.0 },
    sys: { country: 'BR' },
    name: 'Rio de Janeiro',
  },
  'Belo Horizonte': {
    weather: [{ main: 'Thunderstorm', description: 'tempestade', icon: '11d' }],
    main: { temp: 19, temp_min: 17, temp_max: 21, humidity: 85 },
    wind: { speed: 6.0 },
    sys: { country: 'BR' },
    name: 'Belo Horizonte',
  },
  Gramado: {
    weather: [{ main: 'Snow', description: 'pouca neve', icon: '13d' }],
    main: { temp: -2, temp_min: -5, temp_max: 0, humidity: 70 },
    wind: { speed: 2.0 },
    sys: { country: 'BR' },
    name: 'Gramado',
  },
  'Porto Alegre': {
    weather: [{ main: 'Mist', description: 'névoa', icon: '50d' }],
    main: { temp: 15, temp_min: 14, temp_max: 16, humidity: 95 },
    wind: { speed: 1.5 },
    sys: { country: 'BR' },
    name: 'Porto Alegre',
  },
}
