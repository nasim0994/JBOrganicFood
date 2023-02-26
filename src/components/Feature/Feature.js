import React from "react";
import logo from "../../assets/Images/logo.png";
import { FaQuestion } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Feature = () => {
  return (
    <div className="w-[90%] xl:w-[1280px] mx-auto py-10">
      <div className="grid lg:grid-cols-3 items-center  text-neutral font-medium">
        {/* Why take honey nuts from us!  */}
        <div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <FaQuestion className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              All our dry fruits and nuts are imported.
            </h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <FaQuestion className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              It contains no artificial colors or preservatives. We do not sell
              products with any local colors or preservatives.
            </h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <FaQuestion className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              You don't have to make any upfront payment. We offer cash on
              delivery. After receiving the product, check it, if necessary,
              test it by eating 2-3 spoons while the delivery man is present and
              then pay the price. If you don't like it, return it immediately.
            </h2>
          </div>
        </div>

        {/* Image */}
        <div className="feature-img flex justify-center items-center ">
          <img src={logo} alt="" className="w-32 lg:w-1/2" />
        </div>

        {/* Benefits of eating nuts */}
        <div className="mt-10 lg:mt-0">
          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              It is digested very quickly, so will give you instant energy.
            </h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">Eliminates tire-ness.</h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              Honey nuts are very useful in keeping the skin clean and prevent
              sunburn.
            </h2>
          </div>

          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              Apart from getting rid of heart disease, it will keep your heart
              healthy.
            </h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              Honey Nuts keep away deadly diseases like cancer.
            </h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              Increases metabolism and relieves constipation.
            </h2>
          </div>
          <div className="flex gap-3 items-center text-xl mb-6">
            <AiFillStar className="opacity-60 w-[5%]" />
            <h2 className="w-[95%]">
              Keeps the brain healthy and improves memory.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
