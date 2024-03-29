import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

export const router = createBrowserRouter([
{
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: 'register',
            element: <Register></Register>
          },
    ]
}

])