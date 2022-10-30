import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import Main from "./pages/Main";
import Analytics from "./pages/Analytics";
import Articles from "./pages/Articles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/main/analytics",
        element: <Analytics />,
      },
      {
        path: "/main/articles",
        element: <Articles />,
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
