import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.jsx";
import Signup from "./views/auth/Signup.jsx";
import Login from "./views/auth/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/sign-up',
        element: <Signup />
    },
    {
        path: '/log-in',
        element: <Login />
    }

])

export default router;
