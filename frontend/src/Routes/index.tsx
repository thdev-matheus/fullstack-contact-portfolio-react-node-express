import { createBrowserRouter } from "react-router-dom";
import * as Pages from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.InitialPage />,
    errorElement: <Pages.Error />,
  },
  {
    path: "/dashboard",
    element: <Pages.Dashboard />,
    errorElement: <Pages.Error />,
  },
]);
