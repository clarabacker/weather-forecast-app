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
  background: ${({ theme }) => theme.background};

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
export const Title = styled.h1`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  @media (${breakpoints.mobile768}) {
    font-size: 3.75rem;
  }
`
