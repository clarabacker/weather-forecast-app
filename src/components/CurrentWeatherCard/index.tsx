import * as S from './CurrentWeatherCard.styles'

interface CurrentWeatherCardProps {
  temperature: number
  weatherStatus: string
  location: string
}

export const CurrentWeatherCard = ({
  temperature,
  weatherStatus,
  location,
}: CurrentWeatherCardProps) => {
  return (
    <S.Wrapper>
      <S.WeatherInfo>
        <S.Temperature>{temperature}°</S.Temperature>
        <S.WeatherStatus>{weatherStatus}</S.WeatherStatus>
        <S.WrapperLocation>
          <S.LocationName>{location}</S.LocationName>
          <S.LocationIcon />
        </S.WrapperLocation>
      </S.WeatherInfo>

      <S.WrapperWeatherIcon>
        <S.WeatherIcon></S.WeatherIcon>
      </S.WrapperWeatherIcon>
    </S.Wrapper>
  )
}
