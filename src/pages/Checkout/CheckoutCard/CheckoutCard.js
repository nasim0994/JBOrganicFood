import React, { useState } from "react";
import { AiOutlineDisconnect } from "react-icons/ai";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { UseContext } from "../../../ContextApi/ContextProvider";

const CheckoutCard = () => {
  const [couponToggle, setCouponToggle] = useState(false);
  const { cart } = UseContext();
  const [shipping, setShipping] = useState("50");
  const [discount, setDiscount] = useState(0);

  const subTotal = cart.reduce(
    (price, item) => price + item.quantity * parseInt(item.price),
    0
  );

  let tax = 0;
  const grandTotal = subTotal + tax + parseInt(shipping) - discount;

  //   Discount Calculation
  const [coupon, setCoupon] = useState("");
  const couponCode = "Jb100";

  const handelCoupon = () => {
    if (coupon.toLowerCase() === couponCode.toLowerCase()) {
      setDiscount(100);
      setCouponToggle(false);
      toast.success("Coupon add Success");
    } else {
      toast.error("Please input valied Coupon");
    }
  };

  const handelPlaceOrder = () => {
    Swal.fire("Thank you 🥰", "Your Order Success", "success");
  };

  return (
    <div className="mt-8 lg:mt-0 px-4 py-10 shadow-lg">
      <div>
        <p className="text-xl font-semibold text-neutral mb-4">YOUR ORDER</p>
      </div>
      <div className="mb-1">
        <div className="border-b border-neutral text-xl font-semibold ">
          <p>Product</p>
        </div>
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mt-2 border-b pb-2"
            >
              <p>
                {product.title} * {product.quantity}
              </p>
              <p>
                ৳<span> {product.price * product.quantity}.00</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between font-semibold mb-4">
        <p>SubTotal</p>
        <p>৳ {subTotal}.00</p>
      </div>

      {/* Shipping */}
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
          ৳<span> {discount}</span>
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

      <div className="my-2">
        <button
          type="submit"
          onClick={handelPlaceOrder}
          className="w-full bg-neutral-content text-base-100 p-2 font-semibold text-sm rounded scale-[.98] hover:scale-[1] duration-300"
        >
          PLACE ORDER
        </button>
      </div>

      {/* Coupon */}
      <div className="mt-6">
        <button
          onClick={() => setCouponToggle(!couponToggle)}
          className="w-full border border-neutral-content text-neutral-content p-2 font-bold text-sm rounded scale-[.98] hover:scale-[1] duration-300"
        >
          Apply Coupon to Discount
        </button>

        <div
          className={`${
            couponToggle
              ? "max-h-80 duration-300"
              : "max-h-0 overflow-hidden duration-300"
          }`}
        >
          <div className="mt-4">
            <p className="border-b border-neutral-content pb-1 mb-2 scale-[.98] text-neutral-content font-semibold flex gap-1 items-center">
              <AiOutlineDisconnect /> Coupon
            </p>
            <input
              type="text"
              className="w-full p-2 border border-neutral-content text-neutral-content outline-none mb-2 rounded scale-[.98]"
              placeholder="Coupon Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              onClick={handelCoupon}
              className="w-full border border-neutral-content text-neutral-content p-2 font-bold text-sm rounded scale-[.98] hover:scale-[1] duration-200"
            >
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
