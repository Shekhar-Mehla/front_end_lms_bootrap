import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
import bookReducer from "../feature/books/bookSlice.js";
import cartReducer from "../feature/cart/cartSlice.js";
export default configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
    cartInfo: cartReducer,
  },
});
