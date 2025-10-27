import React from 'react'

import * as S from './SearchBar.styles'

interface SearchBarProps {
  cidade: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({ cidade, onChange }: SearchBarProps) => {
  return (
    <S.Wrapper>
      <S.Input
        type="text"
        name="cidade"
        value={cidade}
        placeholder="Busque uma cidade"
        onChange={onChange}
      />

      <S.SearchIcon />
    </S.Wrapper>
  )
}
