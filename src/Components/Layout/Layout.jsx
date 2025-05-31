import React from "react";

import { ContentContainerStyled } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <>
      <ContentContainerStyled>{children}</ContentContainerStyled>
    </>
  );
};

export default Layout;
