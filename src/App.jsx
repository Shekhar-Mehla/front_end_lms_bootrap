import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Book,
  Dashboard,
  Home,
  SignUp,
  SingIn,
  Borrow,
  Review,
  UserProfile,
  UserList,
  ForgotPassword,
  BookList,
} from "./index.js";
import DefulatLayout from "./components/DefualtLayout/DefulatLayout.jsx";
import UserLayout from "./components/DefualtLayout/UserLayout.jsx";

import ActivateUser from "./pages/ActivateUser.jsx";
import { ToastContainer } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./feature/user/userAction.js";
import NewBookForm from "./components/forms/BookForms/NewBookForm/NewBookForm.jsx";

import EditBook from "./pages/EditBook.jsx";
import PublicBookList from "./pages/PublicBookList.jsx";
import BorrowingList from "./pages/BorrowingList.jsx";

const App = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatchUser = useDispatch();

  useEffect(() => {
    !user?._id && dispatchUser(autoLogin());
  }, [user._id]);
  return (
    <div className="wrapper bg-dark d-flex flex-wrap flex-column">
      <Routes>
        {/* public routes */}
        <Route element={<DefulatLayout></DefulatLayout>}>
          <Route index element={<Home></Home>}></Route>

          <Route path="login" element={<SingIn></SingIn>}></Route>
          <Route path="register" element={<SignUp></SignUp>}></Route>

          <Route
            path="all-books"
            element={<PublicBookList></PublicBookList>}
          ></Route>
          <Route path="book/:slug" element={<Book></Book>}></Route>
          <Route
            path="borrowing-list"
            element={<BorrowingList></BorrowingList>}
          ></Route>
          <Route
            path="forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route
            path="activate-user"
            element={
              <ActivateUser className="text-white bg-red"></ActivateUser>
            }
          ></Route>
          <Route path="*" element={<h2>404 Page not found</h2>}></Route>
        </Route>
        {/* private routes */}( (
        <Route path="/user" element={<UserLayout></UserLayout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="insert-new-book" element={<NewBookForm />}></Route>
          <Route path="admin-book-table" element={<BookList />}></Route>
          <Route path="borrow-history" element={<Borrow></Borrow>}></Route>
          <Route path="reviews" element={<Review></Review>}></Route>
          <Route path="edit-book/:_id" element={<EditBook></EditBook>}></Route>
          <Route path="profile" element={<UserProfile></UserProfile>}></Route>
          <Route path="user-list" element={<UserList></UserList>}></Route>
        </Route>
        ) )
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
