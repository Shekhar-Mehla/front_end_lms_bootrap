import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
export default configureStore({
  reducer: {
    userInfo: userReducer,
  },
});
