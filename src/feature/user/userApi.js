import { apihelper } from "../../services/api.js";
const baseUrl = "http://localhost:8000/api/v1";
const getAccessJwt = () => sessionStorage.getItem("accessJwt");

export const fetchUser = async () => {
  const obj = {
    method: "get",
    url: baseUrl + "/user/profile",
    headers: { authorization: "bearer " + getAccessJwt() },
    showloader: false,
  };
  return await apihelper(obj);
};
