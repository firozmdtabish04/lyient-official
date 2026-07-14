import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return React.createElement(Navigate, {
      to: "/login",
      replace: true,
    });
  }

  return children;
}

export default ProtectedRoute;
