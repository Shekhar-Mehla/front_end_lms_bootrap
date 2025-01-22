import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Authorization = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);

  return <div>{user?._id ? children : <Navigate to="/login"></Navigate>}</div>;
};

export default Authorization;
