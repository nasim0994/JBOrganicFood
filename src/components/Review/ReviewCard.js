import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const ReviewCard = ({ review }) => {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {review.rating >= index + 1 ? (
          <FaStar className="text-primary" />
        ) : review.rating >= number ? (
          <FaStarHalfAlt className="text-primary" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    );
  });
  return (
    <div
      className="bg-gray-50 border rounded-lg overflow-hidden hover:bg-primary/20 duration-300"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="flex gap-2 items-center">
        <div className="relative overflow-hidden customer-img">
          <img src={review.CustomerImage} alt="" className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-content">
            {review.CustomerName}
          </h3>
          <div className="flex items-center gap-px">{ratingStar}</div>
        </div>
      </div>

      <div className="py-4 px-6 font-medium text-center mb-6 text-neutral-content">
        <p>
          <RiDoubleQuotesL className="inline text-neutral-content/80 text-xl mr-2" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut
          officia consequatur natus id dolor! Nulla dolorem nemo quidem quia.
          <RiDoubleQuotesR className="inline text-neutral-content/80 text-xl ml-2" />
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
