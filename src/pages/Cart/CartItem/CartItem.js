import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useProduct } from "../../../ContextApi/ContextProvider";

const CartItem = ({ product }) => {
  const { handelRemoveCart, handelIncreaseCart, handelDecreaseCart } =
    useProduct();

  const price = product.price;
  const totalPrice = parseInt(product.quantity) * price;

  return (
    <tr className="border-b text-neutral-content/80">
      <td className="p-4">
        <div className="w-max flex gap-2 items-center">
          <img
            src={product.image}
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
          ৳<span> {price}.00</span>
        </p>
      </td>

      <td className="px-6 py-4">
        <div className="w-max flex items-center gap-3">
          <button
            onClick={() => handelDecreaseCart(product)}
            className="text-2xl hover:text-neutral-content duration-200"
          >
            <FiMinusCircle />
          </button>
          <div>
            <div className="w-14 py-px border-2 border-neutral-content/80 text-neutral font-semibold rounded-lg flex justify-center items-center">
              {product.quantity}
            </div>
          </div>
          <button
            onClick={() => handelIncreaseCart(product)}
            className="text-2xl hover:text-neutral-content duration-200"
          >
            <FiPlusCircle />
          </button>
        </div>
      </td>

      <td className="px-6 py-4 font-semibold">
        <p className="w-max">
          ৳<span> {totalPrice}.00</span>
        </p>
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => handelRemoveCart(product)}
          className="font-medium text-sm text-red-600 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
