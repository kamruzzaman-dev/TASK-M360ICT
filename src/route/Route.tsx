import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";

const router = createBrowserRouter([
  { path: "/sign-in", element: <SignIn /> },
]);

export default router;
