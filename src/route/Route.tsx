import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUP";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/dashboard", element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <SignUp />,
      },
      {
        path: "/dashboard/users",
        element: <SignIn />,
      },
      {
        path: "/dashboard/sales",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
