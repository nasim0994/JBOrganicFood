import React, { useState } from "react";
import { AiOutlineDisconnect } from "react-icons/ai";
import { Link } from "react-router-dom";

const CheckoutCard = () => {
  const [couponToggle, setCouponToggle] = useState(false);
  return (
    <div className="mt-8 lg:mt-0 px-4 py-10 shadow-lg">
      <div className="flex justify-between items-center border-b border-neutral text-xl font-semibold mb-4">
        <p>SubTotal</p>
        <p>
          ৳<span> 1200</span>
        </p>
      </div>

      <div className="mb-2 border-b pb-2">
        <p className="text-neutral mb-2">Shipping Charge</p>
        <div className="flex justify-between items-center text-neutral font-medium ">
          <label className="label justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="w-5 h-5 radio checked:bg-neutral-content"
            />
            <span className="label-text text-base">inside Dhaka:</span>
          </label>

          <p>
            ৳<span> 50</span>
          </p>
        </div>
        <div className="flex justify-between items-center text-neutral font-medium ">
          <label className="label py-0 justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="w-5 h-5 radio checked:bg-neutral-content"
            />
            <span className="label-text text-base">outSide Dhaka:</span>
          </label>

          <p>
            ৳<span> 100</span>
          </p>
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
          ৳<span> 1200</span>
        </p>
      </div>

      <div className="my-2">
        <Link
          to="/checkout"
          className="block text-center bg-neutral-content text-base-100 p-2 font-semibold text-sm rounded scale-[.98] hover:scale-[1] duration-300"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>

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
            />
            <button className="w-full border border-neutral-content text-neutral-content p-2 font-bold text-sm rounded scale-[.98]">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
