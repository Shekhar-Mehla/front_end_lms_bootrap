import { fetchUser } from "./userApi.js";
import { setUserInfo } from "./userSlice.js";
import { renewJwt } from "../../services/api.js";
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
      return;
    }
  }
  if (!acessJWT && refreshJwt) {
    const { payload } = await renewJwt();
    sessionStorage.setItem("accessJwt", payload);
    return await dispach(userAction());
  }
};
