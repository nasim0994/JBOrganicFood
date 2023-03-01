import React from "react";
import CartDetails from "../../components/CartDetails/CartDetails";

import { UseContext } from "../../ContextApi/ContextProvider";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { cart } = UseContext();

  return (
    <div className="py-5 min-h-[60vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <p
          className="text-center text-3xl font-semibold mb-8"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Your Cart - <span>{cart.length}</span>{" "}
          {cart.length < 2 ? "Item" : "Items"}
        </p>
        <div className="lg:flex gap-10">
          <div className="lg:w-[70%] pt-6">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="uppercase border-b ">
                  <tr>
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3 text-center">Price</th>
                    <th className="px-6 py-3 text-center">QUANTITY</th>
                    <th className="px-6 py-3 text-center">Total</th>
                    <th className="px-6 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-[30%] ">
            <CartDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
