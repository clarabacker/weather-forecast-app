import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdErrorOutline } from 'react-icons/md'
import { PiWarning } from 'react-icons/pi'

import * as S from './Alert.styles'

interface AlertProps {
  severity: 'success' | 'error' | 'warning' | 'info'
  isClosable?: boolean
  shake?: boolean
  children: React.ReactNode
}

export const Alert: React.FC<AlertProps> = ({
  severity,
  isClosable = false,
  shake = false,
  children,
}) => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => setVisible(false)

  if (!visible) return null

  return (
    <S.Wrapper $severity={severity} $shake={shake}>
      <S.SeverityIconWrapper>
        {severity === 'error' && <MdErrorOutline></MdErrorOutline>}
        {severity === 'warning' && <PiWarning></PiWarning>}
      </S.SeverityIconWrapper>

      <S.Description data-description="true">{children}</S.Description>

      {isClosable && (
        <S.CloseIconButton data-closeicon="true" onClick={handleClose}>
          <IoMdClose></IoMdClose>
        </S.CloseIconButton>
      )}
    </S.Wrapper>
  )
}
