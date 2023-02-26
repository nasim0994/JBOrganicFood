import React from "react";
import { Link } from "react-router-dom";

const ShopComponent = () => {
  return (
    <div className="shop-banner">
      <div className="w-[90%] xl:w-[1280px] mx-auto h-full">
        <div className="flex justify-end items-center h-full">
          <div className="md:w-1/2 text-end text-neutral">
            <h2 className="text-5xl font-semibold mb-2">
              Try our rich and elegant Honey Nut
            </h2>
            <p className="text-lg font-medium mb-6 text-neutral-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              laborum. Minima nisi inventore consequatur libero corporis
              voluptas, quibusdam vitae quas?
            </p>
            <button className="scale-[.96] hover:scale-[1] duration-300">
              <Link
                to=""
                className="uppercase bg-primary shadow rounded px-10 py-2.5 font-semibold "
              >
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
