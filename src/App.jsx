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
} from "./index.js";
import DefulatLayout from "./components/DefualtLayout/DefulatLayout.jsx";
import UserLayout from "./components/DefualtLayout/UserLayout.jsx";
import Authorization from "./components/Authorization.jsx";
import ActivateUser from "./pages/ActivateUser.jsx";

const App = () => {
  return (
    <div className="wrapper bg-dark d-flex flex-wrap flex-column">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DefulatLayout></DefulatLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="login" element={<SingIn></SingIn>}></Route>
          <Route path="register" element={<SignUp></SignUp>}></Route>
          <Route
            path="activate-user"
            element={
              <ActivateUser className="text-white bg-red"></ActivateUser>
            }
          ></Route>
        </Route>
        {/* private routes */}( (
        {/* <Route path="/user" element={<UserLayout></UserLayout>}>
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path="borrow-history" element={<Borrow></Borrow>}></Route>
        <Route path="reviews" element={<Review></Review>}></Route>
        <Route path="profile" element={<UserProfile></UserProfile>}></Route>
        <Route path="user-list" element={<UserList></UserList>}></Route>
      </Route> */}
        ) )
      </Routes>
    </div>
  );
};

export default App;
