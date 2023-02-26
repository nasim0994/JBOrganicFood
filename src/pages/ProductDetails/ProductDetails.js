import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaOpencart } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

import { Link, useParams } from "react-router-dom";
const products = [
  {
    id: 1,
    image:
      "https://jborganicfoods.com/wp-content/uploads/2022/09/IMG_20221215_153111-scaled-e1672914845144-510x578.jpg",
    title: "Premium Honey Nuts 1 kg",
    price: "1,200.00",
  },
  {
    id: 2,
    image:
      "https://jborganicfoods.com/wp-content/uploads/2022/09/IMG_20221215_153111-scaled-e1672914845144-510x578.jpg",
    title: "Premium Honey Nuts 500 gm",
    price: "600.00",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const product = products.find((product) => product.id == id);
    setProduct(product);
  }, [id]);

  console.log(product);
  return (
    <div className="py-10">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <PhotoProvider>
              <PhotoView src={product?.image}>
                <img
                  src={product?.image}
                  alt=""
                  className="h-96 sm:w-1/2 lg:h-[600px] lg:w-3/4 mx-auto lg:ml-auto rounded cursor-pointer"
                />
              </PhotoView>
            </PhotoProvider>
          </div>

          <div className="text-neutral">
            <Link
              to="/shops"
              className="flex gap-2 items-center mb-4 text-secondary"
            >
              <IoReturnDownBackOutline />
              Back To Shop
            </Link>
            <p className="text-4xl font-bold mb-4 sm:w-3/5">{product?.title}</p>
            <p className="text-2xl font-semibold mb-2">
              ৳ <span>{product?.price}</span>
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex">
                <button className="w-10 h-10 flex justify-center items-center text-lg font-semibold bg-slate-100">
                  -
                </button>
                <input
                  type="text"
                  className="w-10 border outline-none"
                  defaultValue="1"
                />
                <button className="w-10 h-10 flex justify-center items-center text-lg font-semibold bg-slate-100">
                  +
                </button>
              </div>

              <button className="w-40 bg-primary/80 hover:bg-primary text-neutral px-2 py-1.5 rounded font-semibold duration-200 flex items-center gap-1 justify-center">
                <FaOpencart />
                Add To Card
              </button>
            </div>

            <div className="mt-4 border-y border-dashed">
              <p className="py-1 text-sm">
                Category:{" "}
                <span className="text-secondary font-semibold">
                  Uncategorized
                </span>
              </p>
            </div>

            <div className="mt-4 flex gap-4">
              <h2>Share:</h2>
              <div className="flex items-center gap-4 pr-4 text-2xl text-neutral-content opacity-70">
                <Link
                  to="https://www.facebook.com/jborganicfoodsBD"
                  className="hover:text-blue-600 duration-200"
                >
                  <FaFacebook className="text-xl" />
                </Link>
                <Link to="" className="hover:text-[#DE1F54] duration-200">
                  <AiFillInstagram />
                </Link>
                <Link to="" className="hover:text-blue-700 duration-200">
                  <AiFillTwitterCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
