import React, { useState } from "react";
import {
  Navigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Authorization = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const location = useLocation();

  return (
    <div>
      {user?._id ? (
        children
      ) : (
        <Navigate to="/login" state={location}></Navigate>
      )}
    </div>
  );
};

export default Authorization;
