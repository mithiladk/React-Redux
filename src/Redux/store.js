import { configureStore } from "@reduxjs/toolkit"
import { authenticationSlice } from "./authSlice"
import { productCart } from "./productSlice"

export const store = configureStore({
    reducer:{
        contents:authenticationSlice.reducer,
        cart:productCart.reducer,
       
    }
})