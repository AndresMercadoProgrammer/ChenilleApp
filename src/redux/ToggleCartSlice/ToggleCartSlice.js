import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = {
    active: false,

}


export const toggleCartSlice = createSlice({
    name: 'toggleCartSlice',
    initialState: INITIAL_STATE,
    reducers: {
        toggleCart: (state) => {
            return {
                ...state,
                active: !state.active,

            }
        }
    }
})


export const { toggleCart } = toggleCartSlice.actions;

export default toggleCartSlice.reducer