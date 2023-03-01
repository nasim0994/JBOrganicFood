import React from "react";
import "./Shops.css";
import { Link } from "react-router-dom";
import { UseContext } from "../../ContextApi/ContextProvider";
import Products from "./Products/Products";

import CategorySidebar from "./CategorySidebar/CategorySidebar";

const Shops = () => {
  const { products } = UseContext();

  return (
    <div className="pt-3 min-h-[60vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto ">
        {/* Top Row */}
        <div className="sm:flex justify-between items-center">
          <div className="breadcrumbs text-lg font-semibold">
            <ul>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary duration-200 text-neutral-content"
                >
                  Home
                </Link>
              </li>
              <li>Shop</li>
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <p className="font-semibold">Short by:</p>
            <select
              name=""
              className="w-40 border p-1 rounded border-neutral text-neutral cursor-pointer outline-none"
            >
              <option value="">Popular</option>
              <option value="">Latest</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10 mt-5">
          {/* Categories */}
          <div className="hidden sm:block w-80 mb-10 relative">
            <h3 className="text-lg font-semibold text-neutral">Categories</h3>
            <CategorySidebar />
          </div>

          {/* Shops */}
          <div className="w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {/* Product */}
              {products?.map((product) => (
                <Products key={product.id} product={product}></Products>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
