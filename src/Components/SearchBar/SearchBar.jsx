import React, { useEffect } from "react";
import { SearchContainer, SearchInput, ButtonSearch } from "./SearchStyles";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuery,
  updateResults,
} from "../../redux/SearchSlice/SearchSlice";
import { SearchResulstList } from "./SearchResultList";

const SearchBar = () => {
  const searchQuery = useSelector((state) => state.searchSlice.searchQuery);
  const isOpen = useSelector((state) => state.searchSlice.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery.length >= 3) {
      dispatch(updateResults(searchQuery));
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    dispatch(updateQuery(e.target.value));
  };

  return (
    <>
      <SearchContainer>
        <SearchInput
          value={searchQuery}
          onChange={(e) => handleSearchChange(e)}
        />
        <ButtonSearch>
          <GrSearch />
        </ButtonSearch>
        {isOpen && <SearchResulstList />}
      </SearchContainer>
    </>
  );
};

export default SearchBar;
