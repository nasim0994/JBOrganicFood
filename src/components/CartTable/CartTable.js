import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const CartTable = ({ product }) => {
  return (
    <div className="lg:w-2/3 pt-6">
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
            <tr className="border-b text-neutral-content/80">
              <td className="p-4 ">
                <div className="w-max flex gap-2 items-center">
                  <img
                    src="https://jborganicfoods.com/wp-content/uploads/2022/09/IMG_20221215_153111-scaled-e1672914845144-247x296.jpg"
                    alt="Apple Watch"
                    className="w-14 h-14 rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-neutral">
                    {product.title}
                  </h3>
                </div>
              </td>

              <td className="px-6 py-4 font-semibold">
                <p className="w-max">
                  ৳<span> 1200</span>
                </p>
              </td>

              <td className="px-6 py-4">
                <div className="w-max flex items-center gap-3">
                  <button className="text-2xl hover:text-neutral-content duration-200">
                    <FiMinusCircle />
                  </button>
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      className="w-14 border-2 border-neutral-content/80 text-neutral font-semibold outline-none rounded-lg px-2.5 py-px"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button className="text-2xl hover:text-neutral-content duration-200">
                    <FiPlusCircle />
                  </button>
                </div>
              </td>

              <td className="px-6 py-4 font-semibold">
                <p className="w-max">
                  ৳<span> 1200</span>
                </p>
              </td>

              <td className="px-6 py-4">
                <button className="font-medium text-sm text-red-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
