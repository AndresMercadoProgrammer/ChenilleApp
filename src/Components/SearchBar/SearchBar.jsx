import { SearchContainer, SearchInput, ButtonSearch } from "./SearchStyles";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuery,
  updateResults,
} from "../../redux/SearchSlice/SearchSlice";
import { SearchResulstList } from "./SearchResultList";

const SearchBar = () => {
  const { isOpen, searchQuery, searchResults } = useSelector(
    (state) => state.searchSlice
  );

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;

    dispatch(updateQuery(inputValue));
    dispatch(updateResults(inputValue));
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
