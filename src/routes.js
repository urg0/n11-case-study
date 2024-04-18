import { useRoutes } from "react-router-dom";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      /* element: <Dashboard/>, */
    },
    {
      path: "*", //any other path
      /* element: <NotFoundPage />, */
    },
  ]);

  return elements;
};
