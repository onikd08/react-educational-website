import React, { useContext } from "react";
import { AuthContext } from "../components/contexts/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user?.uid) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
