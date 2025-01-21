import { fetchUser } from "./userApi.js";
import { setUserInfo } from "./userSlice.js";
export const userAction = () => async (dispach) => {
  const user = await fetchUser();
  console.log(user.payload);
 return dispach(setUserInfo(user.payload))
};
