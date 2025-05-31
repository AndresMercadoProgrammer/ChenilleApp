import React from "react";
import {
  HeaderMenuSection,
  ProductsCardsSectionStyled,
  ShopStyled,
} from "./ShopStyles";

import { SortProducts } from "../../Components/SortProducts/SortProducts";
import TitleProductSection from "../../Components/ShopSections/TitleProductSection";
import { DescriptionCategory } from "../../Components/ShopSections/DescriptionCategory";
import { CardProduct } from "../../Components/CardProduct/CardProduct";

export const Shop = () => {
  return (
    <>
      <ShopStyled>
        <HeaderMenuSection>
          <TitleProductSection />
          <SortProducts />
        </HeaderMenuSection>
        <DescriptionCategory />
        <ProductsCardsSectionStyled>
          <CardProduct></CardProduct>
        </ProductsCardsSectionStyled>
      </ShopStyled>
    </>
  );
};
