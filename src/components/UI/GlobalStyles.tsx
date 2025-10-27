import { createGlobalStyle } from 'styled-components'

import { breakpoints } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: "Roboto", sans-serif;
    min-height: 100vh;
  }

  @media (${breakpoints.desktop}) {
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`
