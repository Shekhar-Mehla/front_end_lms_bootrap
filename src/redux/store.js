import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
import bookReducer from "../feature/books/bookSlice.js";
import cartReducer from "../feature/cart/cartSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// first define which key and storage you want to store data in browser like local or session
const cartPersistConfig = {
  key: "cart",
  storage,
};
// 2. define the combine reduce which you can decide which data you want to store into browser
const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  cartInfo: persistReducer(cartPersistConfig, cartReducer),
});

// give this to the configure store

const store = configureStore({
  reducer: rootReducer,
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
