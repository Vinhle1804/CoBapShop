import { createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [...cart]
  },
  reducers: {
    addtoCart(state, action) {
      const newProduct = action.payload;
      let cart = [...state.cart];
      
      // Check if the product already exists in the cart
      const existingProductIndex = cart.findIndex(item => item.id === newProduct.id);
      
      if (existingProductIndex !== -1) {
        // Product already exists, increase quantity by 1
        cart[existingProductIndex] = {
          ...cart[existingProductIndex],
          quantity: cart[existingProductIndex].quantity + 1
        };
      } else {
        // Product does not exist, add it to the cart with quantity defaulting to 1
        cart.push({ ...newProduct, quantity: 1 });
      }
      
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      let cart = [...state.cart];
      
      // Ensure quantity is at least 1
      const updatedQuantity = Math.max(quantity, 1);
      
      cart = cart.map(item => 
        item.id === id ? { ...item, quantity: updatedQuantity } : item
      );
      
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    removeItem(state, action) {
      const id = action.payload;
      let cart = [...state.cart];
      cart = cart.filter(item => item.id !== id);
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
});

export const { addtoCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
