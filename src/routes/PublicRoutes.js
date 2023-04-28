import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile/Profile";
import Blog from "../components/Blog/Blog";

export const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
