import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
const refreshJwt = () => localStorage.getItem("refreshJwt");
console.log(refreshJwt());

export const apihelper = async ({
  method,
  url,
  data,
  headers,
  showloader = true,
}) => {
  try {
    if (showloader) {
      const pending = axios({
        method,
        url,
        data,
        headers,
      });
      toast.promise(pending, { pending: "please wait..." });
      const result = await pending;
      const { status, message } = result.data;
      toast[status](message);
      return result.data;
    } else {
      const result = await axios({
        method,
        url,
        data,
        headers,
      });
      return result.data;
    }
  } catch (error) {
    if (showloader) {
      toast.error(error.response.data.message);
    }

    return error.response.data;
  }
};

export const resgisterUser = async (payload) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/register",
    data: payload,
  };
  return await apihelper(obj);
};

export const activatUser = async (_id, t) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/activate-user",
    data: { _id, t },
  };
  return await apihelper(obj);
};
// login user
export const loginUser = async (payload) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/login",
    data: payload,
  };
  return await apihelper(obj);
};
export const renewJwt = async () => {
  const obj = {
    method: "get",
    url: baseUrl + "/auth/renew-accessJwt",

    headers: { authorization: "bearer " + refreshJwt() },
    showloader: false,
  };
  return await apihelper(obj);
};
