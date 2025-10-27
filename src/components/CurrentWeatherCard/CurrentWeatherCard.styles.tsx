import { FaLocationDot } from 'react-icons/fa6'
import styled from 'styled-components'

import sunnyIcon from '../../assets/sunny.png'
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
  background-color: #63a5f3;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (${breakpoints.mobileSmall}) {
    padding: 1.5em;
  }

  @media (${breakpoints.desktop}) {
    max-width: 100%;
    padding: 1.5em;
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
  color: #ffffff;

  @media (${breakpoints.desktop}) {
    font-size: 3.5em;
  }
`

export const WeatherStatus = styled.div`
  font-size: 1.3em;
  color: #ffffff;
`

export const WrapperLocation = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 1em;
  font-size: 1.1em;
  color: #ffffff;
`

export const LocationName = styled.span`
  font-size: 1em;
  display: flex;
`

export const LocationIcon = styled(FaLocationDot)`
  color: #ffffff;
`

export const WrapperWeatherIcon = styled.div`
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

export const WeatherIcon = styled.div`
  background-image: url(${sunnyIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
