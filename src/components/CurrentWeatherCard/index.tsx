import * as S from './CurrentWeatherCard.styles'

interface CurrentWeatherCardProps {
  temperature: number
  weatherStatus: string
  location: string
  iconSrc: string
}

export const CurrentWeatherCard = ({
  temperature,
  weatherStatus,
  location,
  iconSrc,
}: CurrentWeatherCardProps) => {
  return (
    <S.Wrapper>
      <S.WeatherInfo>
        <S.Temperature>{temperature}°</S.Temperature>
        <S.WeatherStatus>{weatherStatus}</S.WeatherStatus>
        <S.LocationWrapper>
          <S.LocationIcon />
          <S.LocationName>{location}</S.LocationName>
        </S.LocationWrapper>
      </S.WeatherInfo>

      <S.WeatherIconWrapper>
        <S.WeatherIcon src={iconSrc} alt={weatherStatus}></S.WeatherIcon>
      </S.WeatherIconWrapper>
    </S.Wrapper>
  )
}
