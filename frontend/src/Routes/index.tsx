import { createBrowserRouter } from "react-router-dom";
import { InitialPage } from "../pages/InitialPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
]);
