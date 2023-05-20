/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  //* hooks
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //* conditions
  if (loading) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center px-4 lg:px-0">
        <progress className="progress max-w-[256px]"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    toast.warning("You have to log in first to view details", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <>
      <Navigate to="/signin" state={{ from: location }} replace />
      <ToastContainer />
    </>
  );
};
export default PrivateRoute;
