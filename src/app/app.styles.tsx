import styled from 'styled-components'

import { breakpoints } from '../components/UI/breakpoints'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: #83b9fc;
  background-size: cover;

  @media (${breakpoints.mobile320}) {
    padding: 20px;
  }

  @media (${breakpoints.desktop}) {
    justify-content: center;
    width: 400px;
    min-height: min-content;
    padding: 30px;
    border-radius: 20px;
  }
`
