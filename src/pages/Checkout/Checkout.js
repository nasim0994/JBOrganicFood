import React, { useState } from "react";
import { AiOutlineDisconnect } from "react-icons/ai";

const Checkout = () => {
  const [couponToggle, setCouponToggle] = useState(false);
  return (
    <div className="py-5">
      <div className="w-[90%] xl:w-[1200px] mx-auto">
        <div className="lg:flex gap-10">
          <div className="lg:w-[60%]">
            <form action="">
              <h2 className="text-xl font-semibold text-neutral">
                BILLING & SHIPPING
              </h2>

              <div className="mt-6">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  <div className="mb-4">
                    <label htmlFor="">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="mb-4">
                  <label htmlFor="">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue="Bangladesh"
                    readOnly
                    className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                  />
                </div>

                {/* Address */}
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  <div className="mb-4">
                    <label htmlFor="">
                      Street address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="">
                      Town / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  <div className="mb-4">
                    <label htmlFor="">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="">Postcode / ZIP (optional) </label>
                    <input
                      type="text"
                      className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center mt-2">
                    <span className="bg-gray-100 py-1.5 px-3 border border-neutral-content text-neutral">
                      +880
                    </span>
                    <input
                      type="number"
                      required
                      placeholder="706260994"
                      className="border border-l-0 rounded-l-none w-full border-neutral-content px-3 py-1.5 outline-none  rounded"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                  />
                </div>

                {/* ADDITIONAL INFORMATION */}
                <div className="mb-4 mt-8">
                  <label htmlFor="">
                    <p className="text-lg font-semibold">
                      ADDITIONAL INFORMATION
                    </p>
                    <p>Order notes (optional)</p>
                  </label>
                  <textarea
                    name=""
                    rows="5"
                    className="border w-full border-neutral-content px-3 py-1.5 outline-none mt-2 rounded"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:w-[40%]">
            <div className="mt-8 lg:mt-0 px-4 py-10 shadow-lg">
              <div>
                <p className="text-xl font-semibold text-neutral mb-4">
                  YOUR ORDER
                </p>
              </div>
              <div className="mb-4">
                <div className="border-b border-neutral text-xl font-semibold ">
                  <p>Product</p>
                </div>
                <div className="flex justify-between items-center mt-2 border-b pb-2">
                  <p>Premium Honey Nuts 1 kg</p>
                  <p>
                    ৳<span> 1200</span>
                  </p>
                </div>
              </div>

              <div className="mb-2 border-b pb-2">
                <p className="text-neutral mb-2">Shipping Charge</p>
                <div className="flex justify-between items-center text-neutral font-medium ">
                  <label className="label justify-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="w-5 h-5 radio checked:bg-neutral-content"
                      checked
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
                <button className="w-full bg-neutral-content text-base-100 p-2 font-semibold text-sm rounded scale-[.98] hover:scale-[1] duration-300">
                  PLACE ORDER
                </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
