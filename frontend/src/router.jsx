import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.jsx";
import Signup from "./views/auth/Signup.jsx";
import Login from "./views/auth/Login.jsx";
import ProductView from "./views/components/ProductView.jsx";
import ShoppingCart from "./views/ShoppingCart.jsx";
import Category from "./views/Category.jsx";
import NotFound from "./views/core/NotFound.jsx";
import Products from "./views/Products.jsx";

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
        path: '/products',
        element: <Products />
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
