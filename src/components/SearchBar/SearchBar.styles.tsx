import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'

import { breakpoints } from '../UI/breakpoints'

export const Wrapper = styled.form`
  position: relative;
  width: 100%;
  max-width: 600px;

  @media (${breakpoints.desktop}) {
    width: 100%;
    max-width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 2.6rem 0.5rem 1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  font-size: 1rem;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0070f3;
  }
`

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #555;
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`
