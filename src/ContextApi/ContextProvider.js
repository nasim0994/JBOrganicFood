import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

import { actionTypes } from "../state/productState/actionTypes";
import { productReducer } from "../state/productState/productReducer";
import { initialState } from "./../state/productState/productReducer";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const localStorageCart = JSON.parse(localStorage.getItem("JBCart"));
  const [cart, setCart] = useState(localStorageCart || []);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  // Set LocalStorage
  useEffect(() => {
    localStorage.setItem("JBCart", JSON.stringify(cart));
  }, [cart]);

  // Add To Cart
  const handelAddToCart = (product) => {
    const existed = cart.find((item) => item.id === product.id);
    if (existed) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existed, quantity: existed.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success("Add to Cart Success");
  };

  // Remove Cart
  const handelRemoveCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // increase Cart Quantity
  const handelIncreaseCart = (product) => {
    const existed = cart.find((item) => item.id === product.id);
    if (existed) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existed, quantity: existed.quantity + 1 }
            : item
        )
      );
    }
  };

  const contextInfo = {
    state,
    dispatch,
    handelAddToCart,
    handelRemoveCart,
    handelIncreaseCart,
    cart,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const useProduct = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
