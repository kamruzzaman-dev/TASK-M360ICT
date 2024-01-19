import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUP";
import DashboardLayout from "../pages/dashboardLayout";
import Dashboard from "../pages/dashboard";
import Sales from "../pages/dashboard/sales";
import User from "../pages/dashboard/user";
import App from "../App";
import NewUser from "../pages/dashboard/user/newUser";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/dashboard", element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/users",
        element: <User />,
      },
      {
        path: "/dashboard/users-create",
        element: <NewUser />,
      },
      {
        path: "/dashboard/sales",
        element: <Sales />,
      },
    ],
  },
]);

export default router;
