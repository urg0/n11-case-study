import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { isAuthenticated } from "@utils/utils.service";

const AuthenticatedRoute = ({ route = "/login" }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={route} replace />;
};

export default AuthenticatedRoute;
