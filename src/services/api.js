import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;

const apihelper = async ({ method, url, data, headers }) => {
  const result = await axios({
    method,
    url,
    data,
    headers,
  });
  return result;
};

export const resgisterUser = async (form) => {
  const obj = {
    method: "post",
    url: baseUrl + "/auth/register",
    data: form,
    headers: {
      Authorization: "Bearer your-token-here",
      "Custom-Header": "value",
    },
  };
  return await apihelper(obj);
};
