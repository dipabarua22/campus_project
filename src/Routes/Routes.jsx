import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Register/Login";
import Signup from "../Pages/Register/Signup";
import Advisor from "../Pages/Advisor/Advisor";
import Login_Details from "../Pages/Login_Details/Login_Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "login_details",
                element: <Login_Details></Login_Details>
            },
            
        ]
    }
])