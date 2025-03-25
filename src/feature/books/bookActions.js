import { fetchBookAdmin } from "./booksApi.js";
import { setBookList } from "./bookSlice.js";

const bookActions = () => async (dispach) => {
  // call book api
  const { payload, status } = await fetchBookAdmin();

  return dispach(setBookList(payload));
};

export default bookActions;
