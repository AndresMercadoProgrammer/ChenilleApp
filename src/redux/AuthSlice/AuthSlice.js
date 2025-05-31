import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLogin: false,
    user: null,
    token: null

}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {
            const { user, token } = action.payload

            return {
                ...state,
                isLogin: true,
                user: user,
                token: token
            }
        },
        logout: (state) => {
            return {
                ...state,
                isLogin: false,
                user: null,
                token: null
            }
        }
    }
})

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer

