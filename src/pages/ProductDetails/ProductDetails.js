import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaOpencart } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import { Link, useParams } from "react-router-dom";
import { UseContext } from "../../ContextApi/ContextProvider";

import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { products, handelAddToCart } = UseContext();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const product = products.find((product) => product.id == id);
    setProduct(product);
  }, [id, products]);

  const handelIncreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="py-10">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2">
          <div>
            <PhotoProvider>
              <PhotoView src={product?.image}>
                <img
                  src={product?.image}
                  alt=""
                  className="h-96 sm:w-2/3 lg:h-[500px] lg:w-3/4 mx-auto rounded cursor-pointer"
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
              <div className="w-max flex items-center gap-3">
                <button
                  onClick={handelIncreaseQuantity}
                  className="text-2xl hover:text-neutral-content duration-200"
                >
                  <FiMinusCircle />
                </button>
                <div>
                  <p className="w-14 border-2 border-neutral-content/80 text-neutral font-semibold text-center rounded-lg py-px">
                    {quantity}
                  </p>
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-2xl hover:text-neutral-content duration-200"
                >
                  <FiPlusCircle />
                </button>
              </div>

              <button
                onClick={() => handelAddToCart(product, quantity)}
                className="w-40 bg-primary/80 hover:bg-primary text-neutral px-2 py-1.5 rounded font-semibold duration-200 flex items-center gap-1 justify-center"
              >
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

        <div className="w-full h-px bg-gradient-to-l from-base-100 via-gray-300 to-base-100 my-8"></div>

        {/* Review */}
        <div>
          <h3 className="text-2xl font-semibold text-neutral">Reviews</h3>

          <form action="" className="border border-primary rounded p-6 mt-4">
            <h3 className="text-2xl font-semibold text-neutral-content/90">
              {product.title}
            </h3>

            <div className="mt-4">
              <label htmlFor="rating">
                Your Rating - <span>{rating}</span>
                <span className="text-error"> *</span>
              </label>

              <div>
                <ReactStars
                  count={5}
                  onChange={(newRating) => setRating(newRating)}
                  size={30}
                  isHalf={true}
                  activeColor="#E4AE0B"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="mt-4">
                <label htmlFor="rating">
                  Your Name <span className="text-error"> *</span>
                </label>

                <div>
                  <input
                    type="text"
                    className="w-full border outline-primary/50 px-3 py-2 rounded mt-2"
                    required
                  />
                </div>
              </div>
              <div className="sm:mt-4">
                <label htmlFor="rating">
                  Your Name <span className="text-error"> *</span>
                </label>

                <div>
                  <input
                    type="text"
                    className="w-full border outline-primary/50 px-3 py-2 rounded mt-2"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="rating">
                Your review <span className="text-error"> *</span>
              </label>

              <div>
                <textarea
                  name=""
                  id=""
                  rows="4"
                  className="w-full border outline-primary/50 px-3 py-2 rounded mt-2"
                  placeholder="Type something..."
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="font-bold bg-primary text-neutral px-8 py-2 rounded scale-[.98] hover:scale-[1] duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
