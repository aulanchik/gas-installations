import React from "react";
import { useRoutes } from "react-router-dom";
import { Home, Terms, Policy, ThankYou } from "@/pages";

const paths = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
];

const AppRouter: React.FC = () => {
  const routes = useRoutes(paths);
  return routes;
};

export default AppRouter;
