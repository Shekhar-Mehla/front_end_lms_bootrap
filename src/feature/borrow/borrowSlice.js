import { createSlice } from "@reduxjs/toolkit";
const borrowSlice = createSlice({
  name: "borrowhistory",
  initialState: { borrowHistory: [] },
  reducers: {
    setBorrowHistory: (state, { payload }) => {
      state.borrowHistory = payload;
    },
    // deleteCartList: (state, { payload }) => {
    //   console.log(payload);
    //   state.cart = state.cart.filter((item) => {
    //     return !payload.includes(item._id);
    //   });
    // },
  },
});

const { reducer, actions } = borrowSlice;
export default reducer;
export const { setBorrowHistory } = actions;
