import React from "react";
import { ButtonShopStyled } from "./ButtonShopStyles";

export const ButtonShop = ({ onClick, children }) => {
  return <ButtonShopStyled onClick={onClick}>{children}</ButtonShopStyled>;
};
