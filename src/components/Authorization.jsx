import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Authorization = ({ children }) => {
  const [islogin, setIslogin] = useState(false);
  return (
    <div>{islogin ? { children } : <Navigate to="/login"></Navigate>}</div>
  );
};

export default Authorization;
