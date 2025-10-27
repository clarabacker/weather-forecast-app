import styled from 'styled-components'

import { breakpoints } from '../UI/breakpoints'

interface IconWrapperProps {
  color?: string
  size?: 'small' | 'medium' | 'large'
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 1em;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (${breakpoints.desktop}) {
    gap: 0.8em;
    padding: 0.8em;
  }
`

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: auto;
    color: ${({ color }) => color || '#000000'};
    ${({ size }) => {
      switch (size) {
        case 'small':
          return 'font-size: 1.5em'
        case 'medium':
          return 'font-size: 2em'
        case 'large':
          return 'font-size: 2.5em'
      }
    }}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  width: 100%;
`

export const Label = styled.h3`
  width: min-content;
  display: inline-block;
  font-weight: bold;
  color: #000000;
`

export const Content = styled.div<{ $unit: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${({ $unit }) => ($unit === '%' ? '0' : '0.2em')};
`

export const Value = styled.span`
  font-size: 1.2em;
  color: #000000;
`

export const Unit = styled.span<{ $unit: string }>`
  font-size: ${({ $unit }) => ($unit === '°C' ? '0.95em' : '1.2em')};
  color: #000000;
`
