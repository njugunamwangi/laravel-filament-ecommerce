import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.jsx";
import Signup from "./views/auth/Signup.jsx";
import Login from "./views/auth/Login.jsx";
import ProductView from "./views/components/ProductView.jsx";
import ShoppingCart from "./views/ShoppingCart.jsx";

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
    },
    {
        path: '/shopping-cart',
        element: <ShoppingCart />
    },
    {
        path: '/category/:slug',
        element: <Category />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;
