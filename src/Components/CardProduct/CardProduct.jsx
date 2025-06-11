import React from "react";
import { useParams } from "react-router-dom";

import { stock } from "../../Products/PRODUCTS.JS";
import { CardProductMap } from "./CardProductMap";

export const CardProduct = () => {
  const { category } = useParams(); // obtenés la categoría desde la URL

  // Filtrás los productos si hay categoría en la URL
  const productsToShow = category
    ? stock.filter((product) =>
        product.category
          .map((c) => c.toLowerCase())
          .includes(category.toLowerCase())
      )
    : stock;

  return (
    <>
      {productsToShow.map((product) => (
        <CardProductMap key={product.id} product={product} />
      ))}
    </>
  );
};
