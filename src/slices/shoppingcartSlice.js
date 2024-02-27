import { createSlice } from "@reduxjs/toolkit";

export const shoppingcartSlice = createSlice({
  name: "shoppingcart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      } else {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          quantity: 1,
          price: action.payload.price,
        });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementItemQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity === 1) {
          return state.filter((item) => item.id !== action.payload.id);
        } else {
          state[itemIndex].quantity -= 1;
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementItemQuantity, decrementItemQuantity } =
  shoppingcartSlice.actions;

export const selectTotalItems = (state) =>
  state.shoppingcart.reduce((total, item) => total + item.quantity, 0);

export default shoppingcartSlice.reducer;
