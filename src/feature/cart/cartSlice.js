import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    setCartList: (state, { payload }) => {
      console.log(state);
      state.cart = [...state.cart, payload];
    },
  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export const { setCartList } = actions;
