import React from "react";
import { useSelector } from "react-redux";
import { ProductMiniCard, SearchResultsContainer } from "./SearchStyles";
import { NavLink } from "react-router-dom";

export const SearchResulstList = () => {
  const results = useSelector((state) => state.searchSlice.searchResults);

  return (
    <>
      <SearchResultsContainer>
        {results.length === 0 ? (
          <p>No hay productos que coincidan con tu búsqueda.</p>
        ) : (
          results.map((product) => (
            <ProductMiniCard key={product.id}>
              <NavLink>{product.name}</NavLink>
            </ProductMiniCard>
          ))
        )}
      </SearchResultsContainer>
    </>
  );
};
