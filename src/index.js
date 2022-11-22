import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import Main from "./pages/Main";
import Analytics from "./pages/Analytics";
import Articles from "./pages/Articles";
import MainLink from "./links/mainLink";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/news/:newsId",
        element: <MainLink />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
