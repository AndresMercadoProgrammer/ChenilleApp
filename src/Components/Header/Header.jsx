import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { HeaderStyled } from "./HeaderStyles";
import { MenuHeader } from "../MenuHeader/MenuHeader";
export const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <MenuHeader />
    </HeaderStyled>
  );
};
