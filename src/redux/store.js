import { combineReducers, configureStore, } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore"
import sortMenuSlices from "./sortMenuShop/sortMenuSlice"
import MenuHeaderSlice from "./MenuHeaderSlice/menuHeaderSlice"
import cartSlice from "./CartSlice/CartSlice"
import searchSlice from "./SearchSlice/SearchSlice"
import categoriesSlices from "./CategoriesSlice/CategoriesSlice"
import AuthSlice from "./AuthSlice/AuthSlice"
import toggleCartSlice from "./ToggleCartSlice/ToggleCartSlice"



const reducers = combineReducers({
    categories: categoriesSlices,
    sortMenu: sortMenuSlices,
    menuHeaderSlice: MenuHeaderSlice,
    cartSlice: cartSlice,
    searchSlice: searchSlice,
    authSlice: AuthSlice,
    toggleCart: toggleCartSlice
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['categories', 'cartSlice'],

};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({

    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})

export const persistor = persistStore(store)