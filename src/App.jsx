// import React, { useState } from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import {
//   Book,
//   Dashboard,
//   Home,
//   SignUp,
//   SingIn,
//   Borrow,
//   Review,
//   UserProfile,
//   UserList,
//   ForgotPassword,
//   BookList,
// } from "./index.js";
// import DefulatLayout from "./components/DefualtLayout/DefulatLayout.jsx";
// import UserLayout from "./components/DefualtLayout/UserLayout.jsx";

// import ActivateUser from "./pages/ActivateUser.jsx";
// import { ToastContainer } from "react-toastify";

// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { autoLogin } from "./feature/user/userAction.js";
// import NewBookForm from "./components/forms/BookForms/NewBookForm/NewBookForm.jsx";

// import EditBook from "./pages/EditBook.jsx";
// import PublicBookList from "./pages/PublicBookList.jsx";

// import Cart from "./pages/Cart.jsx";
// import { Search } from "./pages/Search.jsx";
// import ThankYouPage from "./pages/ThankYouPage.jsx";
// import ReviewAdmin from "./pages/ReviewAdmin.jsx";

// const App = () => {
//   const { user } = useSelector((state) => state.userInfo);
//   const dispatchUser = useDispatch();

//   useEffect(() => {
//     !user?._id && dispatchUser(autoLogin());
//   }, [user._id]);
//   return (
//     <div className="wrapper  d-flex flex-wrap flex-column">
//       <Routes>
//         {/* public routes */}

//         <Route element={<DefulatLayout></DefulatLayout>}>
//           <Route index element={<Home></Home>}></Route>

//           <Route path="login" element={<SingIn></SingIn>}></Route>
//           <Route path="register" element={<SignUp></SignUp>}></Route>

//           <Route
//             path="all-books"
//             element={<PublicBookList></PublicBookList>}
//           ></Route>
//           <Route path="search" element={<Search></Search>}></Route>
//           <Route path="book/:slug" element={<Book></Book>}></Route>
//           <Route path="cart" element={<Cart></Cart>}></Route>
//           <Route
//             path="forgot-password"
//             element={<ForgotPassword></ForgotPassword>}
//           ></Route>
//           <Route
//             path="activate-user"
//             element={
//               <ActivateUser className="text-white bg-red"></ActivateUser>
//             }
//           ></Route>
//           <Route
//             path="*"
//             element={
//               <h2 className="text-white text-center p-5 mt-5">
//                 404 Page not found
//               </h2>
//             }
//           ></Route>
//         </Route>
//         {/* private routes */}( (
//         <Route path="/user" element={<UserLayout></UserLayout>}>
//           <Route index element={<Dashboard></Dashboard>}></Route>
//           <Route path="insert-new-book" element={<NewBookForm />}></Route>
//           <Route path="admin-book-table" element={<BookList />}></Route>
//           <Route path="borrow-history" element={<Borrow></Borrow>}></Route>
//           <Route
//             path="thank-you"
//             element={<ThankYouPage></ThankYouPage>}
//           ></Route>
//           <Route path="reviews" element={<ReviewAdmin></ReviewAdmin>}></Route>
//           <Route path="edit-book/:_id" element={<EditBook></EditBook>}></Route>
//           <Route path="profile" element={<UserProfile></UserProfile>}></Route>
//           <Route path="user-list" element={<UserList></UserList>}></Route>
//           <Route path="admin-user" element={<UserList></UserList>}></Route>
//         </Route>
//         ) )
//       </Routes>
//       <ToastContainer></ToastContainer>
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { autoLogin } from "./feature/user/userAction.js";

// Layouts
import DefulatLayout from "./components/DefualtLayout/DefulatLayout.jsx";
import UserLayout from "./components/DefualtLayout/UserLayout.jsx";

// Pages
import {
  Book,
  Dashboard,
  Home,
  SignUp,
  SingIn,
  Borrow,
  UserProfile,
  UserList,
  ForgotPassword,
  BookList,
} from "./index.js";

import ActivateUser from "./pages/ActivateUser.jsx";
import NewBookForm from "./components/forms/BookForms/NewBookForm/NewBookForm.jsx";
import EditBook from "./pages/EditBook.jsx";
import PublicBookList from "./pages/PublicBookList.jsx";
import Cart from "./pages/Cart.jsx";
import { Search } from "./pages/Search.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import ReviewAdmin from "./pages/ReviewAdmin.jsx";

const App = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userInfo); // full user state
  const user = userState.user || userState; // support different Redux structures
  console.log(user);
  // AUTO LOGIN
  useEffect(() => {
    if (!user?._id) {
      dispatch(autoLogin());
    }
  }, [dispatch, user?._id]);

  if (!userState) return null; // wait until user state loads

  return (
    <div className="wrapper d-flex flex-wrap flex-column">
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route element={<DefulatLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<SingIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="all-books" element={<PublicBookList />} />
          <Route path="search" element={<Search />} />
          <Route path="book/:slug" element={<Book />} />
          <Route path="cart" element={<Cart />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="activate-user" element={<ActivateUser />} />
          <Route
            path="*"
            element={
              <div style={{ height: "60vh" }}>
                <h2 className=" text-center  p-5 mt-5">404 Page not found</h2>
              </div>
            }
          />
        </Route>

        {/* ================= PRIVATE USER/ADMIN ROUTES ================= */}
        {user?._id && (
          <Route path="/user" element={<UserLayout />}>
            {/* Dashboard */}
            <Route index element={<Dashboard />} />

            {/* Borrow History & Profile – all users */}
            <Route path="borrow-history" element={<Borrow />} />
            <Route path="profile" element={<UserProfile />} />

            {/* Admin Only Routes */}
            {user.role === "admin" && (
              <>
                {/* Book Management */}
                <Route path="insert-new-book" element={<NewBookForm />} />
                <Route path="admin-book-table" element={<BookList />} />
                <Route path="edit-book/:_id" element={<EditBook />} />

                {/* Review & User Management */}
                <Route path="reviews" element={<ReviewAdmin />} />
                <Route path="user-list" element={<UserList />} />
                <Route path="admin-user" element={<UserList />} />
              </>
            )}

            {/* Thank You Page – all users */}
            <Route path="thank-you" element={<ThankYouPage />} />
          </Route>
        )}
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
