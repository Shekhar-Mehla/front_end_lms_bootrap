import { createSlice } from "@reduxjs/toolkit";
const bookSlice = createSlice({
  name: "bookList",
  initialState: { bookList: [] },
  reducers: {
    setBookList: (state, action) => {
      state.bookList = action.payload;
    },
  },
});

const { reducer, actions } = bookSlice;
export default reducer;
export const { setBookList } = actions;
