import React from 'react'
import { ImagesWrapperGridStyled } from './ImagesWrapperGridStyles'

export const ImagesGrid = ({children}) => {
  
  return (
    <ImagesWrapperGridStyled>
      {children}
    </ImagesWrapperGridStyled>
  )
}
