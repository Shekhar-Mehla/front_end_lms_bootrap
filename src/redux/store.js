import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
import bookReducer from "../feature/books/bookSlice.js";
export default configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
  },
});
