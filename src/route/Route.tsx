import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUP";

const router = createBrowserRouter([
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
]);

export default router;
