/* eslint-disable react/prop-types */

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(-1);
      toast.error("you must login or Sign-up to access this page", {
        duration: 5000,
      });
    }
  }),
    [];

  if (isAuthenticated) return <>{children}</>;
  if (!isAuthenticated)
    return (
      <div className="w-full h-[calc(100dvh-10rem)] flex justify-center items-center ">
        <h2>you must login or Sign-up to access this page</h2>
      </div>
    );
};

export default ProtectedRoute;
