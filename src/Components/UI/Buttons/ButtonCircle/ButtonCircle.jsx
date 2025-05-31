import React from "react";
import { ButtonCircleStyled } from "./ButtonCircleStyled";

export const ButtonCircle = (props) => {
  const { color, $bkg, border, children, fontSize } = props;

  return (
    <ButtonCircleStyled
      fontSize={fontSize}
      color={color}
      $bkg={$bkg}
      border={border}
    >
      {children}
    </ButtonCircleStyled>
  );
};
