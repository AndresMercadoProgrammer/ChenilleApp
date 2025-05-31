import { createSlice } from "@reduxjs/toolkit";
import { filterStockItems } from "../../Utils/Search/actionSearch";

const INITIAL_STATE = {
    searchQuery: '',
    searchResults: [],
    isOpen: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: INITIAL_STATE,
    reducers: {

        updateQuery: (state, action) => {
            return {
                ...state,
                searchQuery: action.payload
            }
        },
        cleanSearch: (state) => {
            return {
                ...state,
                searchQuery: '',
                searchResults: [],
                isOpen: false
            }
        }
        ,
        updateResults: (state, action) => {

            return {
                ...state,
                searchResults: filterStockItems(action.payload)
            }
        },
    }
}
)

export const { updateQuery, cleanSearch, updateResults } = searchSlice.actions;

export default searchSlice.reducer