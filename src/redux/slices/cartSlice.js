import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.min(item.quantity + action.payload.quantity, 10);
      } else {
        state.products.push({
          ...action.payload,
          quantity: Math.min(action.payload.quantity, 10),
        });
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.min(quantity, 10);
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  updateItemQuantity,
  deleteItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
