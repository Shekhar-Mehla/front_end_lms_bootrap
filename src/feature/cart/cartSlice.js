import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    setCartList: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    deleteCartList: (state, { payload }) => {
      console.log(payload);
      state.cart = state.cart.filter((item) => {
        return !payload.includes(item._id);
      });
    },
  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export const { setCartList, deleteCartList } = actions;
