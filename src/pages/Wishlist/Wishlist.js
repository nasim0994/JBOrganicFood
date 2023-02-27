import React from "react";
import { UseContext } from "../../ContextApi/ContextProvider";
import { FaOpencart } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, handelDeleteWishlist, handelAddToCart } = UseContext();
  return (
    <div className="py-10 min-h-[70vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <p className="text-center text-3xl font-semibold mb-8">
          Your Wishlist - {wishlist.length}{" "}
          {wishlist.length < 2 ? "Item" : "Items"}
        </p>

        <div className="relative overflow-x-auto lg:w-2/3 mx-auto">
          <table className="w-full text-left">
            <thead className="uppercase border-b">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Add Cart</th>
                <th className="px-6 py-3">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr
                  key={product.id}
                  className="border-b text-neutral-content/80"
                >
                  <td className="p-4 ">
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
                      ৳<span> {product.price}.00</span>
                    </p>
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    <button
                      onClick={() => handelAddToCart(product)}
                      className="w-40 bg-primary/80 hover:bg-primary text-neutral px-2 py-1.5 rounded font-semibold duration-200 flex items-center gap-1 justify-center"
                    >
                      <FaOpencart />
                      Add To Card
                    </button>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handelDeleteWishlist(product)}
                      className="font-medium text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
