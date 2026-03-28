import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Booking from "../Pages/Booking";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Destination from "../Pages/Destination";
import PrivateRoute from "../Components/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true, path: '/',
                Component: Home
            },
            {
                path: "/booking",
                element: <PrivateRoute>
                    <Booking></Booking>
                </PrivateRoute>
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: LoginPage
            },
            {
                path: "/auth/register",
                Component: RegisterPage
            },
            {
                path: "/auth/destination",
                Component:Destination
            }
        ]
    },

    {
        path: '/*',
        element: <h1>Iam error Page</h1>
    }
])
export default router;