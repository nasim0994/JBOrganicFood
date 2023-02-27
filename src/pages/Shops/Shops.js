import React, { useState } from "react";
import "./Shops.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { UseContext } from "../../ContextApi/ContextProvider";
import Products from "./Products/Products";

const Shops = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const { products } = UseContext();

  return (
    <div className="pt-3 min-h-[60vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
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
          <div className="hidden sm:block w-80">
            <h3 className="text-lg font-semibold text-neutral">Categories</h3>
            <div className="mt-2 font-semibold text-neutral-content/80">
              <ul className="categories">
                <li>
                  <button onClick={() => setDropdownToggle(!dropdownToggle)}>
                    <p>Clothing</p>
                    <IoIosArrowDown />
                  </button>

                  <ul
                    className={`w-full pl-2 text-neutral-content/70 dropdown ${
                      dropdownToggle && "dropdownShow"
                    }`}
                  >
                    <li>
                      <button>Mens Fashion</button>
                    </li>
                    <li>
                      <button>Mens Fashion</button>
                    </li>
                    <li>
                      <button>Mens Fashion</button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button>
                    <p>Food</p>
                  </button>
                </li>
                <li>
                  <button>
                    <p>Vegetable</p>
                  </button>
                </li>
                <li>
                  <button>
                    <p>Electronic</p>
                  </button>
                </li>
                <li>
                  <button>
                    <p>Education</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Shops */}
          <div className="w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
