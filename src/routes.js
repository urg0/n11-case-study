import { Navigate, useRoutes } from "react-router-dom";
import AuthenticatedRoute from "@components/authenticated-route/AuthenticatedRoute";
import AuthRedirect from "@components/auth-redirect/AuthRedirect";

import Login from "@pages/auth/login/Login";
import ErrorPage from "@pages/404/ErrorPage";
import Dashboard from "@pages/dashboard/Dashboard";
import CustomerProfiles from "@pages/dashboard/customer-insights/customer-profiles/CustomerProfiles";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/dashboard",
      element: <AuthenticatedRoute />,

      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "customers",
          element: <CustomerProfiles />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthRedirect />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "*", //any other path
      element: <ErrorPage />,
    },
  ]);

  return elements;
};
