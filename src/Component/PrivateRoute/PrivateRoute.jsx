import React, { Children, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ Children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-secondary"></span>
      </div>
    );
  }

  if (user) {
    return Children;
  }
  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
