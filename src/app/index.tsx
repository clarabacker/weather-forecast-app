import { GlobalStyles } from '../components/UI/GlobalStyles'
import { SearchBarContainer } from '../containers/SearchBarContainer'
import * as S from './app.styles'

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <S.Wrapper>
        <SearchBarContainer />
      </S.Wrapper>
    </>
  )
}
