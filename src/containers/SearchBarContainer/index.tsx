import React, { useState } from 'react'

import { SearchBar } from '../../components/SearchBar'

export const SearchBarContainer = () => {
  const [cidade, setCidade] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(e.target.value)
  }

  return <SearchBar cidade={cidade} onChange={handleChange} />
}
