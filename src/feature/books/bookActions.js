import { fetchBookAdmin,fetchPublickBook } from "./booksApi.js";
import { setBookList } from "./bookSlice.js";

export const AdminbookActions = () => async (dispach) => {
  // call book api
  const { payload, status } = await fetchBookAdmin();

  return dispach(setBookList(payload));
};
export const publicBookActions = () => async (dispach) => {
  // call book api
  const { payload, status } = await fetchPublickBook();

  return dispach(setBookList(payload));
};
