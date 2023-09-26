import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.jsx";
import Signup from "./views/auth/Signup.jsx";
import Login from "./views/auth/Login.jsx";
import ProductView from "./views/ProductView.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/product/:slug',
        element: <ProductView />
    }

])

export default router;
