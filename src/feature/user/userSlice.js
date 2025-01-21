import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: { userd: "dufufufuf" },
  reducers: {
    setUserInfo: (state, action) => {
      state.userd = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export default reducer;
export const {setUserInfo} = actions
