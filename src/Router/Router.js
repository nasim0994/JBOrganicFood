import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Shops from "../pages/Shops/Shops";
import Cart from "./../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Shops",
        element: <Shops />,
      },
      {
        path: "/Shops/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("../../public/products.json"),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
