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
        <S.WrapperLocation>
          <S.LocationIcon />
          <S.LocationName>{location}</S.LocationName>
        </S.WrapperLocation>
      </S.WeatherInfo>

      <S.WrapperWeatherIcon>
        <S.WeatherIcon src={iconSrc} alt={weatherStatus}></S.WeatherIcon>
      </S.WrapperWeatherIcon>
    </S.Wrapper>
  )
}
