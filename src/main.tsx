import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./errorPage/ErrorPage.tsx";
import ShowCar from "./showCar/ShowCar.tsx";
import UserPanel from "./userPanel/UserPanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/showCar",
    element: <ShowCar />,
  },
  {
    path: "/userPanel",
    element: <UserPanel />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
