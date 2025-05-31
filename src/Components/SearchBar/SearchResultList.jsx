import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductMiniCard, SearchResultsContainer } from "./SearchStyles";

export const SearchResulstList = () => {
  const results = useSelector((state) => state.searchSlice.searchResults);

  const dispatch = useDispatch();

  return (
    <>
      <SearchResultsContainer>
        {results.map((product) => (
          <ProductMiniCard>
            <p>{product.name}</p>
          </ProductMiniCard>
        ))}
      </SearchResultsContainer>
    </>
  );
};
