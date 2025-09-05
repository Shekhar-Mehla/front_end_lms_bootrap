import { apihelper } from "../../services/api";

const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
const getAccessJwt = () => sessionStorage.getItem("accessJwt");

export const createBorrowBook = async (data) => {
  const obj = {
    method: "post",
    url: baseUrl + "/borrow-book/add-borrow",
    headers: { authorization: "bearer " + getAccessJwt() },
    showloader: false,
    data:data
  };
  return await apihelper(obj);
};
export const fetchPublickBook = async () => {
  const obj = {
    method: "get",
    url: baseUrl + "/book",

    showloader: false,
  };
  return await apihelper(obj);
};
