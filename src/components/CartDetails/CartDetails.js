import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseContext } from "../../ContextApi/ContextProvider";

const CartDetails = () => {
  const { cart } = UseContext();
  const [shipping, setShipping] = useState("50");

  const subTotal = cart.reduce(
    (price, item) => price + item.quantity * parseInt(item.price),
    0
  );
  const tax = 0;
  const discount = 0;
  const grandTotal = subTotal + discount + tax + parseInt(shipping);

  return (
    <div className="mt-8 lg:mt-0 px-4 pt-10 pb-5 shadow-lg">
      <div className="flex justify-between items-center border-b border-neutral text-xl font-semibold mb-4">
        <p>SubTotal</p>
        <p>
          ৳<span> {subTotal}.00</span>
        </p>
      </div>

      <div className="mb-2 border-b pb-2">
        <p className="text-neutral mb-2">Shipping Charge</p>
        <div className="flex justify-between items-center text-neutral font-medium ">
          <div>
            <label className="label justify-start gap-2 cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="w-5 h-5 radio checked:bg-neutral-content"
                value={50}
                onChange={(e) => setShipping(e.target.value)}
                checked={shipping === "50"}
              />
              <span className="label-text text-base">inside Dhaka:</span>
            </label>

            <label className="label py-0 justify-start gap-2 cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="w-5 h-5 radio checked:bg-neutral-content"
                value={100}
                onChange={(e) => setShipping(e.target.value)}
                checked={shipping === "100"}
              />
              <span className="label-text text-base">outside Dhaka:</span>
            </label>
          </div>

          <p>৳ {shipping}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-neutral-content font-medium border-b py-1">
        <p>Discount</p>
        <p>
          ৳<span> 00</span>
        </p>
      </div>

      <div className="flex justify-between items-center text-neutral-content font-medium border-b py-1">
        <p>Tax</p>
        <p>
          ৳<span> 00</span>
        </p>
      </div>

      <div className="flex justify-between items-center text-lg font-semibold mt-2">
        <p>Grand Total</p>
        <p>
          ৳<span> {grandTotal}.00</span>
        </p>
      </div>

      <div className="my-2 mt-8">
        <Link
          to="/checkout"
          className="block text-center bg-neutral-content text-base-100 p-2 font-semibold text-sm rounded scale-[.98] hover:scale-[1] duration-300"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
