import styled, { css } from 'styled-components'

import { breakpoints } from '../UI/breakpoints'

interface IconWrapperProps {
  color?: string
  $bgColor?: string
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
  background: ${({ theme }) => theme.accent};
  backdrop-filter: blur(24px);
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);

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
  background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
  border-radius: 8px;

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 2px;
    `}

  svg {
    width: 100%;
    height: auto;
    color: ${({ color }) => color || '#000000'};
    ${({ size }) => {
      switch (size) {
        case 'small':
          return 'font-size: 1.5em'
        case 'medium':
          return 'font-size: 1.8em'
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
  display: inline-block;
  width: fit-content;
  max-width: 60%;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
  word-break: break-word;
`

export const Content = styled.div<{ $unit: string }>`
  display: flex;
  justify-content: center;
  gap: ${({ $unit }) => ($unit === '%' ? '0' : '0.2em')};
  width: 100%;
`

export const Value = styled.span`
  font-size: 1.2em;
  color: ${({ theme }) => theme.textPrimary};
`

export const Unit = styled.span<{ $unit: string }>`
  font-size: ${({ $unit }) => ($unit === '°C' ? '0.9em' : '1.2em')};
  color: ${({ theme }) => theme.textPrimary};
`
