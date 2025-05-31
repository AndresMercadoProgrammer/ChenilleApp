import React from "react";
import { CardProductMap } from "./CardProductMap";
import { useSelector } from "react-redux";
import { stock } from "../../Products/PRODUCTS.JS";
export const CardProduct = () => {
  const arrayProducts = stock;

  const { filters, selectedCategories } = useSelector(
    (state) => state.categories
  );

  const productsFiltered = arrayProducts.filter((product) => {
    const productsLowerCase = product.category.map((e) => e.toLowerCase());
    return productsLowerCase.includes(selectedCategories.toLowerCase());
  });

  return (
    <>
      {filters == false
        ? arrayProducts.map((product) => {
            return CardProductMap(product);
          })
        : productsFiltered.map((product) => {
            return CardProductMap(product);
          })}

      {}
    </>
  );
};
