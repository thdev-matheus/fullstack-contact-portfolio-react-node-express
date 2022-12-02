import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
