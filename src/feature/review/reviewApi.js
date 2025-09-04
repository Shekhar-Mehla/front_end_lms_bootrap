import { data } from "react-router-dom";
import { apihelper } from "../../services/api";
const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
export const submitReview = async (data) => {
  const obj = {
    method: "post",
    url: baseUrl + "/review/createReview",
    data: data,
    headers: { authorization: "bearer " + sessionStorage.getItem("accessJwt") },

    showloader: false,
  };
  return await apihelper(obj);
};
