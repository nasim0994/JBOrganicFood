import React from "react";

const CheckoutForm = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral">BILLING & SHIPPING</h2>

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
              className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
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
            className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
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
              className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
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
              className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="">Postcode / ZIP (optional) </label>
            <input
              type="text"
              className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
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
              className="border border-l-0 rounded-l-none w-full border-neutral-content px-3 py-1.5 outline-primary/50  rounded"
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
            className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
          />
        </div>

        {/* ADDITIONAL INFORMATION */}
        <div className="mb-4 mt-8">
          <label htmlFor="">
            <p className="text-lg font-semibold">ADDITIONAL INFORMATION</p>
            <p>Order notes (optional)</p>
          </label>
          <textarea
            name=""
            rows="5"
            placeholder="Type..."
            className="border w-full border-neutral-content px-3 py-1.5 outline-primary/50 mt-2 rounded"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
