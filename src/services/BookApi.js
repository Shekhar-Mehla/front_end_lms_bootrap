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
export const updateBook = async (formdata) => {
  const obj = {
    method: "post",
    url: baseUrl + "/book/update-book",
    data: formdata,
    headers: { authorization: "bearer " + accessJwt() },
  };
  return await apihelper(obj);
};
export const deletBook = async (_id) => {
  const obj = {
    method: "delete",
    url: baseUrl + `/book/delete-book`,
    data: { _id },

    headers: { authorization: "bearer " + accessJwt() },
  };
  return await apihelper(obj);
};
export const getSingleBook = async (slug) => {
  const obj = {
    method: "get",
    url: baseUrl + `/book/${slug}`,

    showloader: false,
  };
  return await apihelper(obj);
};
