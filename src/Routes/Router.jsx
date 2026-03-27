import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Booking from "../Pages/Booking";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                index:true , path:'/',
                Component: Home
            },
            {
                path:"/booking",
                Component:Booking
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Iam error Page</h1>
    }
])
export default router;