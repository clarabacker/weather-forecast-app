import React from 'react'

import * as S from './SearchBar.styles'

interface SearchBarProps {
  cidade: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
}

export const SearchBar = ({ cidade, onChange, onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Input
        type="text"
        name="cidade"
        value={cidade}
        placeholder="Busque uma cidade"
        onChange={onChange}
      />

      <S.SearchIcon onClick={onSearch} />
    </S.Wrapper>
  )
}
