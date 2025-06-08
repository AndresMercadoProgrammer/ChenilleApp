import { createSlice } from "@reduxjs/toolkit"
import { addToCartItem, removeItemCart, addQuantityItem, subtractQuantityItem } from "../../Utils/CartUtils/CartUtils"
import { SHIPPING_COST } from '../../Utils/CartUtils/ShippingCost'
const INITIAL_STATE = {
    cartItems: [],
    shippingCost: SHIPPING_COST,

}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: INITIAL_STATE,
    reducers: {

        addToCart: (state, action) => {
            const prevState = state.cartItems
            const producto = action.payload
            return {
                ...state,
                cartItems: addToCartItem(prevState, producto),

            }


        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],

            }
        },
        addQuantity: (state, action) => {
            const prevState = state.cartItems
            return {
                ...state,
                cartItems: addQuantityItem(prevState, action.payload)
            }
        },
        subtractQuantity: (state, action) => {
            const prevState = state.cartItems
            return {
                ...state,
                cartItems: subtractQuantityItem(prevState, action.payload)
            }
        },
        removeProduct: (state, action) => {
            const prevState = state.cartItems

            return {
                ...state,
                cartItems: removeItemCart(prevState, action.payload)

            }
        },

    }
})

export const { addToCart, clearCart, removeProduct, subtractQuantity, addQuantity, } = cartSlice.actions;

export default cartSlice.reducer