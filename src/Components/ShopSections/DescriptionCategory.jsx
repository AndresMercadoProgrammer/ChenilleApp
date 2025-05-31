import React from "react";
import { DescriptionStyled } from "./DescriptionCategoryStyles";

import { useSelector } from "react-redux";

export const DescriptionCategory = () => {
  const description = useSelector(
    (state) => state.categories.descriptionCategorySelected
  );

  return (
    <>
      <DescriptionStyled>
        <p>DESCRIPCION DE NUESTRO PRODUCTOS</p>
      </DescriptionStyled>
    </>
  );
};
