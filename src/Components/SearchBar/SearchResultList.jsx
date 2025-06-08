import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductMiniCard, SearchResultsContainer } from "./SearchStyles";

export const SearchResulstList = () => {
  const results = useSelector((state) => state.searchSlice.searchResults);

  const dispatch = useDispatch();

  return (
    <>
      <SearchResultsContainer>
        {results.length === 0 ? (
          <p>No hay productos que coincidan con tu búsqueda.</p>
        ) : (
          results.map((product) => (
            <ProductMiniCard>
              <p>{product.name}</p>
            </ProductMiniCard>
          ))
        )}
      </SearchResultsContainer>
    </>
  );
};
