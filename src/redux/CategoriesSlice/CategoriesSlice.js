import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../Products/Categories";
import { descriptionFix } from "../MenuHeaderSlice/descriptionSelectedFIX";

const INITIAL_STATE = {
    categories: categories,
    selectedCategories: 'Todos los Productos',
    descriptionCategorySelected: 'OFRECEMOS UNA ALTA GAMA DE PRODUCTOS',
    filters: false
}
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        getCategories: (state) => {
            return state
        },

        selectCategories: (state, action) => {
            return {
                ...state,
                filters: true,
                selectedCategories:
                    action.payload,
                descriptionCategorySelected: descriptionFix(action.payload)
            }
        },

    }

})

export const { getCategories, selectCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;