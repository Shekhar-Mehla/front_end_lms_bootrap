import { apihelper } from "../../services/api";

const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
const getAccessJwt = () => sessionStorage.getItem("accessJwt");

export const fetchBookAdmin = async () => {
  const obj = {
    method: "get",
    url: baseUrl + "/book/admin/book-list",
    headers: { authorization: "bearer " + getAccessJwt() },
    showloader: false,
  };
  return await apihelper(obj);
};
