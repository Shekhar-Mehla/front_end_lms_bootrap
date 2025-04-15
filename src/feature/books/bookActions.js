import { getSingleBook } from "../../services/BookApi.js";
import { fetchBookAdmin, fetchPublickBook } from "./booksApi.js";
import {
  setBookList,
  setPublicBookList,
  setSinglePublicBook,
} from "./bookSlice.js";

export const AdminbookActions = () => async (dispach) => {
  // call book api
  const { payload, status } = await fetchBookAdmin();

  return dispach(setBookList(payload));
};
export const publicBookActions = () => async (dispach) => {
  // call book api
  const { payload, status } = await fetchPublickBook();

  return dispach(setPublicBookList(payload));
};
export const singlepublicBookActions = (slug) => async (dispach) => {
  // call book api
  const { payload, status } = await getSingleBook(slug);

  return dispach(setSinglePublicBook(payload || {}));
};
