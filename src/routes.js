import { useRoutes } from "react-router-dom";
import AuthenticatedRoute from "@components/authenticated-route/AuthenticatedRoute";
import AuthRedirect from "@components/auth-redirect/AuthRedirect";

import Login from "@pages/auth/login/Login";

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
      /* element: <NotFoundPage />, */
    },
  ]);

  return elements;
};
