import { SearchContainer, SearchInput, ButtonSearch } from "./SearchStyles";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanSearch,
  updateQuery,
  updateResults,
} from "../../redux/SearchSlice/SearchSlice";
import { SearchResulstList } from "./SearchResultList";
import { MdCancel } from "react-icons/md";

const SearchBar = () => {
  const { isOpen, searchQuery } = useSelector((state) => state.searchSlice);

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
        {searchQuery && (
          <MdCancel
            onClick={() => dispatch(cleanSearch())}
            className="restartSearch"
          />
        )}
        <ButtonSearch>
          <GrSearch />
        </ButtonSearch>
        {isOpen && <SearchResulstList />}
      </SearchContainer>
    </>
  );
};

export default SearchBar;
