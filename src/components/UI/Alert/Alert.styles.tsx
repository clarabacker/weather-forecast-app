import styled, { css, keyframes } from 'styled-components'

interface WrapperProps {
  $severity: 'success' | 'error' | 'warning' | 'info'
  $shake?: boolean
}

const severityStyles = {
  success: {
    primaryColor: '#418944',
    secondaryColor: '#1E4620',
    bgColor: '#EDF7ED',
  },
  error: {
    primaryColor: '#D74242',
    secondaryColor: '#5F2120',
    bgColor: '#FDEDED',
  },
  warning: {
    primaryColor: '#EF7918',
    secondaryColor: '#663C00',
    bgColor: '#FFF4E5',
  },
  info: {
    primaryColor: '#1893D5',
    secondaryColor: '#014361',
    bgColor: '#bbdefb',
  },
}

const fadeIn = keyframes`
  0% {
    top: -1em;
  }
  100% {
    top: 1.2em;
  }
`
const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 1.2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8em;
  width: 90%;
  height: auto;
  padding: 0.6em 0.8em;
  border-radius: 6px;
  background-color: ${({ $severity }) => severityStyles[$severity].bgColor};
  color: ${({ $severity }) => severityStyles[$severity].primaryColor};
  border: 2px solid ${({ $severity }) => severityStyles[$severity].primaryColor};

  [data-description],
  [data-closeicon] {
    color: ${({ $severity }) => severityStyles[$severity].secondaryColor};
  }

  animation: ${fadeIn} 0.5s ease-in-out;

  ${({ $shake }) =>
    $shake &&
    css`
      animation:
        ${fadeIn} 0.5s ease-in-out,
        ${shake} 0.3s ease-in-out;
    `}
`

export const SeverityIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 1.4em;
  background-color: 'transparent';
  color: inherit;

  svg {
    width: 100%;
    height: auto;
    color: inherit;
    font-size: 1.4em;
  }
`

export const CloseIconButton = styled.button`
  position: absolute;
  right: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 1.2em;
    height: 1.2em;
    color: inherit;
  }

  animation: background-color 0.2s linear;
`

export const Description = styled.p`
  padding-right: 1.3em;
  font-size: 1em;
  word-break: break-word;
`
