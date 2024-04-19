import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { isAuthenticated } from "@utils/utils.service";

const AuthRedirect = ({ route = "/dashboard" }) => {
  if (isAuthenticated()) {
    return <Navigate to={route} replace />;
  }
  return <Outlet />;
};

export default AuthRedirect;
