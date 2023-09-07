import { createBrowserRouter } from "react-router-dom";
import SignInSignUp from "../layout/SignInSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSignUp />,
  },
]);

export default router;
