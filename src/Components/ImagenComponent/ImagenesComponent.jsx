import React from 'react'
import { ImgStyled, ImgWrappedStyled } from './ImagenesComponentStyles'

const ImagenComponent = ({src}) => {
  return (
    <ImgWrappedStyled><ImgStyled src={src} alt="" /></ImgWrappedStyled>
  )
}

export default ImagenComponent