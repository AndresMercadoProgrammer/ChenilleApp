import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    sortSelected: 'Popular',
    isOpen: false,
}

export const sortMenuSlices = createSlice({
    name: 'sortMenu',
    initialState: INITIAL_STATE,
    reducers: {
        getSortDefault: (state) => {
            return state
        },

        selectSort: (state, action) => {
            return {
                ...state,
                sortSelected: action.payload,
                isOpen: false
            }
        },
        openMenu: (state) => {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        }




    }
})

export const { getSortDefault, selectSort, openMenu } = sortMenuSlices.actions;

export default sortMenuSlices.reducer