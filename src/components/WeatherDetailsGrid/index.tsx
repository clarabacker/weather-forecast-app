import React from 'react'
import { BsWind } from 'react-icons/bs'
import { IoWater } from 'react-icons/io5'
import {
  LiaTemperatureHighSolid,
  LiaTemperatureLowSolid,
} from 'react-icons/lia'

import { WeatherDetailCard } from '../WeatherDetailCard/index'
import * as S from './WeatherDetailsGrid.styles'

interface WeatherDetailsGridProps {
  maxTemp: number
  minTemp: number
  humidity: number
  windSpeed: number
}

export const WeatherDetailsGrid: React.FC<WeatherDetailsGridProps> = ({
  maxTemp,
  minTemp,
  humidity,
  windSpeed,
}) => {
  return (
    <S.Grid>
      <WeatherDetailCard
        label="Temp. máx"
        value={maxTemp}
        unit="°C"
        icon={<LiaTemperatureHighSolid color="red" />}
      />
      <WeatherDetailCard
        label="Temp. mín"
        value={minTemp}
        unit="°C"
        icon={<LiaTemperatureLowSolid color="blue" />}
      />
      <WeatherDetailCard
        label="Umidade"
        value={humidity}
        unit="%"
        icon={<IoWater color="blue" />}
      />
      <WeatherDetailCard
        label="Vento"
        value={windSpeed}
        unit="km/h"
        icon={<BsWind />}
        iconSize="small"
      />
    </S.Grid>
  )
}
