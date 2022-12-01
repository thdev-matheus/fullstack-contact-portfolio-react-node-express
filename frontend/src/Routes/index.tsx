import { createBrowserRouter } from "react-router-dom";
import { Error } from "../pages/ErrorPage";
import { InitialPage } from "../pages/InitialPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    errorElement: <Error />,
  },
]);
