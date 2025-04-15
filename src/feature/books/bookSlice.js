import { createSlice } from "@reduxjs/toolkit";
const bookSlice = createSlice({
  name: "bookList",
  initialState: { bookList: [], publicBookList: [], siglePublicBook: {} },
  reducers: {
    setBookList: (state, action) => {
      state.bookList = action.payload;
    },
    setPublicBookList: (state, action) => {
      state.publicBookList = action.payload;
    },
    setSinglePublicBook: (state, action) => {
      state.siglePublicBook = action.payload;
    },
  },
});

const { reducer, actions } = bookSlice;
export default reducer;
export const { setBookList, setPublicBookList, setSinglePublicBook } = actions;
