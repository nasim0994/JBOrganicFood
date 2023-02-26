import React from "react";
import { Link } from "react-router-dom";
import product from "../../assets/Images/product.jpg";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductComponent = () => {
  return (
    <div className="py-10">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 md:gap-20 justify-between items-center text-neutral">
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-semibold mb-2">
              Premium Honey Nuts 1 kg
            </h2>
            <p className="mb-2 font-semibold md:w-2/3 text-neutral-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, dolorum.
            </p>
            <p className="flex items-center text-xl font-medium mb-6">
              <TbCurrencyTaka /> <span>1200</span>
            </p>

            <button className="scale-[.96] hover:scale-[1] duration-300">
              <Link
                to=""
                className="uppercase bg-primary shadow rounded px-6 py-2.5 font-semibold"
              >
                Order Now
              </Link>
            </button>
          </div>

          <div className="mb-10 md:mb-0">
            <img src={product} alt="" className="w-full h-80 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
