import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignInSignUp from "../layout/SignInSignUp";
import ProtectedRoute from "./ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <SignInSignUp />,
  },
]);

export default router;
