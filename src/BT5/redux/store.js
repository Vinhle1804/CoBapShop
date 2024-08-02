import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slide/cartSlice"
export const store = configureStore({
  reducer: {
    cart :cartReducer 
  }
});