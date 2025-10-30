import React from 'react'

import * as S from './WeatherDetailCard.styles'

interface WeatherDetailCardProps {
  label: string
  value: number | string
  unit: string
  icon: React.ReactNode
  iconSize?: 'small' | 'medium' | 'large'
  bgColor: string
}

export const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({
  label,
  value,
  unit,
  icon,
  iconSize = 'medium',
  bgColor = 'transparent',
}) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.IconWrapper size={iconSize} $bgColor={bgColor}>
          {icon}
        </S.IconWrapper>
        <S.Label>{label}</S.Label>
      </S.Header>

      <S.Content $unit={unit}>
        <S.Value>{value}</S.Value>
        <S.Unit $unit={unit}>{unit}</S.Unit>
      </S.Content>
    </S.Wrapper>
  )
}
