import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isOpen: false,
    menuSelected: null,
    descriptionSelected: ''
}

export const menuHeaderSlice = createSlice({
    name: 'MenuHeaderSlice',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMenu: (state, action) => {
            return (
                {
                    ...state,
                    isOpen: !state.isOpen,
                    menuSelected: action.payload === state.menuSelected ? null : action.payload
                }
            )
        },




    }
})

export const { toggleMenu } = menuHeaderSlice.actions;

export default menuHeaderSlice.reducer