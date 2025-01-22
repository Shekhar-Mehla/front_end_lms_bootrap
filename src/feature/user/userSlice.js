import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: { user: {} },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export default reducer;
export const { setUserInfo } = actions;
