import { createSlice } from "@reduxjs/toolkit";


const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [...cart]
  },
  reducers: {
    addtoCart(state, action) {
        let cart = [...state.cart]
      cart.push(action.payload)
      state.cart = cart
      localStorage.setItem("cart", JSON.stringify(cart
        
      ))
    }
  }
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;