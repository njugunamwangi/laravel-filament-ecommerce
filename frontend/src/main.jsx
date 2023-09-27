import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./views/contexts/ContextProvider.jsx";
import {CartProvider} from "./views/contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
          <CartProvider>
              <RouterProvider router={router} />
          </CartProvider>
      </ContextProvider>
  </React.StrictMode>,
)
