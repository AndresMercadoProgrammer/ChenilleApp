import React from "react";
import {
  TitleProductSectionStyled,
  TitleProductStyled,
} from "./TitleProductSeccionStyles";
import { useSelector } from "react-redux";

export const TitleProductSection = () => {
  const { selectedCategories } = useSelector((state) => state.categories);

  const title = selectedCategories;
  return (
    <>
      <TitleProductSectionStyled>
        <TitleProductStyled>{title}</TitleProductStyled>
      </TitleProductSectionStyled>
    </>
  );
};
