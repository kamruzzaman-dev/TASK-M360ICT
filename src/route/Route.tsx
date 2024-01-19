import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUP";
import DashboardLayout from "../pages/dashboardLayout";
import Dashboard from "../component/dashboard/dashboardPages/dashboard";
import Sales from "../component/dashboard/sales";

const router = createBrowserRouter([
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
        element: <SignIn />,
      },
      {
        path: "/dashboard/sales",
        element: <Sales />,
      },
    ],
  },
]);

export default router;
