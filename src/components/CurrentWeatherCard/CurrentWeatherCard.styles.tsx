import { IoLocationOutline } from 'react-icons/io5'
import styled from 'styled-components'

import { breakpoints } from '../UI/breakpoints'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  border-radius: 30px;
  width: 100%;
  max-width: 600px;
  min-height: 200px;

  background: ${({ theme }) => theme.cardBg};
  backdrop-filter: blur(24px);
  border-radius: 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (${breakpoints.mobileSmall}) {
    padding: 1.5em;
  }

  @media (${breakpoints.desktop}) {
    max-width: 100%;
    padding: 1.5em 2.5em;
  }
`

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
  max-width: 50%;
`

export const Temperature = styled.h2`
  font-size: 4em;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};

  @media (${breakpoints.desktop}) {
    font-size: 3.5em;
  }
`

export const WeatherStatus = styled.div`
  font-size: 1.2em;
  color: ${({ theme }) => theme.textSecondary};
  word-break: break-word;
`

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
  color: #ffffff;
`

export const LocationName = styled.span`
  display: flex;
  max-width: 70%;
  font-size: 0.9em;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  text-align: left;
  word-break: break-word;
`

export const LocationIcon = styled(IoLocationOutline)`
  font-size: 1.2em;
  color: ${({ theme }) => theme.textSecondary};
`

export const WeatherIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;

  @media (${breakpoints.desktop}) {
    width: 80px;
    height: 80px;
  }
`

export const WeatherIcon = styled.img`
  width: 6em;
  height: auto;
`
