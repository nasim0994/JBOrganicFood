import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import productsData from "./../Data/productsData";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProduct] = useState(productsData);
  const localStorageCart = JSON.parse(localStorage.getItem("JBCart"));
  const [cart, setCart] = useState(localStorageCart || []);
  const localStorageWishlist = JSON.parse(localStorage.getItem("JBWishlist"));
  const [wishlist, setWishtlist] = useState(localStorageWishlist || []);

  // Set LocalStorage
  useEffect(() => {
    localStorage.setItem("JBCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("JBWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add To cart
  const handelAddToCart = (product, quantity) => {
    const existed = cart.find((item) => item.id == product.id);
    if (existed) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existed, quantity: quantity || existed.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: quantity || 1 }]);
    }

    toast.success("Add to Cart Success", {
      position: "top-center",
      autoClose: 2000,
    });
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

  const handelDecreaseCart = (product) => {
    const existed = cart.find((item) => item.id === product.id);
    if (existed.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existed, quantity: existed.quantity - 1 }
            : item
        )
      );
    }
  };

  // Delete Cart
  const handelDeleteCart = (product) => {
    const confirm = window.confirm("Are you sure delete this item");
    if (confirm) {
      const newCart = cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );
      setCart(newCart);
    }
  };

  // Add To cart
  const handelAddWishlist = (product) => {
    const existed = wishlist.find((item) => item.id == product.id);
    if (!existed) {
      setWishtlist([...wishlist, product]);
      toast.success("Add to Wishlist", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error("Already Add this items", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // Delete Cart
  const handelDeleteWishlist = (product) => {
    const confirm = window.confirm("Are you sure delete this item");
    if (confirm) {
      const newWishlist = wishlist.filter(
        (wishlistProduct) => wishlistProduct.id !== product.id
      );
      setWishtlist(newWishlist);
    }
  };

  const contextInfo = {
    products,
    cart,
    handelAddToCart,
    handelDeleteCart,
    handelIncreaseCart,
    handelDecreaseCart,
    handelAddWishlist,
    handelDeleteWishlist,
    wishlist,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
