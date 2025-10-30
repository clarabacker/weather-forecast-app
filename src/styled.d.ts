import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    cardBg: string
    textPrimary: string
    textSecondary: string
    accent: string
    colorSearchBar: string
  }
}
