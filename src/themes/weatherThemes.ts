export const weatherThemes = {
  clearDay: {
    background: 'linear-gradient(to bottom right, #38bdf8, #60a5fa, #3b82f6)',
    cardBg:
      'linear-gradient(to bottom right, rgba(125, 211, 252, 0.8), rgba(96, 165, 250, 0.8))',
    textPrimary: '#ffffff',
    textSecondary: '#eff6ff',
    accent: 'rgba(255, 255, 255, 0.2)',
    colorSearchBar: '#0070f3',
  },
  clearNight: {
    background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #334155)',
    cardBg:
      'linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.8))',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    accent: 'rgba(255, 255, 255, 0.2)',
    colorSearchBar: '#38bdf8',
  },
  clouds: {
    background: 'linear-gradient(to bottom right, #94a3b8, #64748b, #475569)',
    cardBg:
      'linear-gradient(to bottom right, rgba(203, 213, 225, 0.8), rgba(148, 163, 184, 0.8))',
    textPrimary: '#ffffff',
    textSecondary: '#f1f5f9',
    accent: 'rgba(255, 255, 255, 0.2)',
    colorSearchBar: '#1e293b',
  },
  rain: {
    background: 'linear-gradient(to bottom right, #475569, #334155, #1f2937)',
    cardBg:
      'linear-gradient(to bottom right, rgba(100, 116, 139, 0.8), rgba(71, 85, 105, 0.8))',
    textPrimary: '#ffffff',
    textSecondary: '#e2e8f0',
    accent: 'rgba(255, 255, 255, 0.2)',
    colorSearchBar: '#60a5fa',
  },
  thunderstorm: {
    background: 'linear-gradient(to bottom right, #374151, #1f2937, #111827)',
    cardBg:
      'linear-gradient(to bottom right, rgba(75, 85, 99, 0.8), rgba(55, 65, 81, 0.8))',
    textPrimary: '#ffffff',
    textSecondary: '#e5e7eb',
    accent: 'rgba(250, 204, 21, 0.3)',
    colorSearchBar: '#fcd34d',
  },
  snow: {
    background: 'linear-gradient(to bottom right, #cbd5e1, #94a3b8, #64748b)',
    cardBg:
      'linear-gradient(to bottom right, rgba(226, 232, 240, 0.8), rgba(203, 213, 225, 0.8))',
    textPrimary: '#1e293b',
    textSecondary: '#334155',
    accent: 'rgba(255, 255, 255, 0.4)',
    colorSearchBar: '#1e40af',
  },
  mist: {
    background: 'linear-gradient(to bottom right, #9ca3af, #6b7280, #4b5563)',
    cardBg:
      'linear-gradient(to bottom right, rgba(156, 163, 175, 0.8), rgba(107, 114, 128, 0.8))',
    textPrimary: '#ffffff',
    textSecondary: '#f3f4f6',
    accent: 'rgba(255, 255, 255, 0.2)',
    colorSearchBar: '#1e293b',
  },
  default: {
    background: 'linear-gradient(to bottom right, #38bdf8, #60a5fa, #3b82f6)',
    cardBg:
      'linear-gradient(to bottom right, rgba(125, 211, 252, 0.8), rgba(96, 165, 250, 0.8))',
    textPrimary: '#ffffff',
    textSecondary: '#eff6ff',
    accent: 'rgba(255, 255, 255, 0.2)',
    colorSearchBar: '#0070f3',
  },
}

export const getWeatherTheme = (weatherMain: string, iconCode?: string) => {
  const main = weatherMain?.toLowerCase()
  const isNight = iconCode?.endsWith('n')

  if (main === 'clear')
    return isNight ? weatherThemes.clearNight : weatherThemes.clearDay
  if (main === 'clouds') return weatherThemes.clouds
  if (main === 'rain' || main === 'drizzle') return weatherThemes.rain
  if (main === 'thunderstorm') return weatherThemes.thunderstorm
  if (main === 'snow') return weatherThemes.snow
  if (main === 'mist' || main === 'fog' || main === 'haze')
    return weatherThemes.mist
  return weatherThemes.default
}
