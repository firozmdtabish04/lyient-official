import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function GuestRoute({ children }) {
  if (isAuthenticated()) {
    return React.createElement(Navigate, {
      to: "/",
      replace: true,
    });
  }

  return children;
}

export default GuestRoute;
