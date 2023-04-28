import React, { useContext } from "react";
import { AuthContext } from "../components/contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const location = useLocation();
  if (userLoading) {
    return (
      <div className="flex justify-center items-center">
        <progress className="progress progress-primary my-10 w-56"></progress>
      </div>
    );
  }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
