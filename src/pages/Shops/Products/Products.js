import React from "react";
import { FaOpencart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseContext } from "../../../ContextApi/ContextProvider";

const Products = ({ product }) => {
  const { handelAddToCart, handelAddWishlist } = UseContext();

  return (
    <div className="p-2 rounded bg-base-100 product-card">
      <div className="mb-2 relative">
        <img src={product.image} alt="" className="rounded w-full h-64" />

        <Link
          to={`product/${product.id}`}
          className="hover-btn absolute top-0 flex flex-col right-0 bg-[#00000061] w-full h-full p-2 rounded"
        ></Link>
        <div className="w-max absolute top-0 flex flex-col right-0 hover-btn">
          <button onClick={() => handelAddWishlist(product)}>
            <FaRegHeart />
          </button>
        </div>
      </div>

      <div className="text-center text-lg font-semibold">
        <Link
          to={`product/${product.id}`}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h3 className="hover:text-primary duration-300">{product.title}</h3>
        </Link>
        <p className=" py-2">
          ৳ <span>{product.price}.00</span>
        </p>
      </div>

      <button
        onClick={() => handelAddToCart(product)}
        className="w-full bg-primary/80 hover:bg-primary text-neutral px-2 py-1.5 rounded-lg font-semibold duration-200 flex items-center gap-1 justify-center"
      >
        <FaOpencart />
        Add To Card
      </button>
    </div>
  );
};

export default Products;
