import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Home = React.lazy(() => import('@/pages/home'));
const About = React.lazy(() => import("@/pages/about"));
const Mine = React.lazy(() => import("@/pages/mine"));
const SSE = React.lazy(() => import("@/pages/sse"));

const Other = React.lazy(() => import('@/pages/other'));

export const routes = [
  {
    path:"/",
    element: <Navigate to="/home" />,
  },
  {
    element: <Home />,
    children: [
      {
        path:"/home",
        // element: <Home />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/mine",
        element: <Mine />,
      },
      {
        path:"/sse",
        element: <SSE />,
      },
    ],
  },
  {
    path:"/other",
    element: <Other />,
  },
];

const Router = () => useRoutes(routes);

export default Router;
