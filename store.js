import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import counterReducer from "./counterSlice"

const store = configureStore({
    reducer:{
        cart:cartReducer,
        counter: counterReducer,
    }
})

export default store;