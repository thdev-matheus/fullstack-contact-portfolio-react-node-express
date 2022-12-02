import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Error } from "../pages/ErrorPage";
import { InitialPage } from "../pages/InitialPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);
