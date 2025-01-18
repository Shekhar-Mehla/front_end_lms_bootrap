import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;

const apihelper = async ({ method, url, data, headers }) => {
  try {
    const result = await axios({
      method,
      url,
      data,
      headers,
    });
    return result.data;
  } catch (error) {
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
