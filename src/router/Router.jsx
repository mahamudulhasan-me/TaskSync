import { createBrowserRouter } from "react-router-dom";
import CreateTask from "../components/Shared/Pages/CreateTask";
import Dashboard from "../components/Shared/Pages/Dashboard";
import MyTask from "../components/Shared/Pages/MyTask";
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
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/createTask",
        element: (
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myTask",
        element: (
          <ProtectedRoute>
            <MyTask />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
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
