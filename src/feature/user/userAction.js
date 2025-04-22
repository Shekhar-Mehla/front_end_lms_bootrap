import { fetchUser } from "./userApi.js";
import { setUserInfo } from "./userSlice.js";
import { logoutUser, renewJwt } from "../../services/api.js";
export const userAction = () => async (dispach) => {
  const user = await fetchUser();

  if (user?.payload) {
    return dispach(setUserInfo(user.payload));
  }
  return user;
};

export const autoLogin = () => async (dispach) => {
  const acessJWT = sessionStorage.getItem("accessJwt");
  const refreshJwt = localStorage.getItem("refreshJwt");

  if (acessJWT) {
    const { status, message } = await dispach(userAction());

    if (message === "jwt expired") {
      const { payload } = await renewJwt();

      sessionStorage.setItem("accessJwt", payload);
      return await dispach(userAction());
    }
  }
  if (!acessJWT && refreshJwt) {
    const { payload } = await renewJwt();
    sessionStorage.setItem("accessJwt", payload);
    return await dispach(userAction());
  }
  return;
};
export const logOutUserAction = () => async (dispach) => {
  const { status, message } = await logoutUser();
  if (status == "success") {
    dispach(setUserInfo({}));
    localStorage.removeItem("refreshJwt");
    sessionStorage.removeItem("accessJwt");
  }
};
