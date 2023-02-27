import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../pages/Checkout/Checkout";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Shops from "../pages/Shops/Shops";
import Cart from "./../pages/Cart/Cart";
import ContactUs from "../pages/ContactUs/ContactUs";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Wishlist from "../pages/Wishlist/Wishlist";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

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
        path: "/shop",
        element: <Shops />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/shop/product/:id",
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
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
