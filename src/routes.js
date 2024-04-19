import { useRoutes } from "react-router-dom";
import AuthenticatedRoute from "@components/authenticated-route/AuthenticatedRoute";
import AuthRedirect from "@components/auth-redirect/AuthRedirect";

import Login from "@pages/auth/login/Login";
import ErrorPage from "@pages/404/ErrorPage";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <AuthenticatedRoute />,
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
