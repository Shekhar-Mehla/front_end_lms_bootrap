import { apihelper } from "./api";
const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
const accessJwt = () => sessionStorage.getItem("accessJwt");
export const postNewBook = async (payload) => {
  const obj = {
    method: "post",
    url: baseUrl + "/book/add-new-book",
    data: payload,
    headers: { authorization: "bearer " + accessJwt() },
  };
  return await apihelper(obj);
};
