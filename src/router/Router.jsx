import { createBrowserRouter } from "react-router-dom";
import CreateTask from "../components/Shared/Pages/CreateTask";
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
    children: [
      {
        path: "/createTask",
        element: (
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <SignInSignUp />,
  },
]);

export default router;
