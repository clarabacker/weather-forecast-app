import styled from 'styled-components'

import { breakpoints } from '../UI/breakpoints'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 600px;

  @media (${breakpoints.mobile320}) {
    gap: 16px;
  }

  @media (${breakpoints.desktop}) {
    gap: 25px;
    max-width: 100%;
  }
`
