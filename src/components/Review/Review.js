import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";

import nasim from "../../assets/Images/na.jpg";
import review1 from "../../assets/Images/Review/review1.jpg";
import review2 from "../../assets/Images/Review/review2.jpg";
import review3 from "../../assets/Images/Review/review3.jpg";
import review4 from "../../assets/Images/Review/review4.jpg";
import review5 from "../../assets/Images/Review/review5.jpg";
const reviews = [
  {
    ReviewImage: review5,
    CustomerName: "MD NAsim Uddin",
    CustomerImage: nasim,
  },
  {
    ReviewImage: review2,
    CustomerName: "MD NAsim Uddin",
    CustomerImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    ReviewImage: review3,
    CustomerName: "MD NAsim Uddin",
    CustomerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    ReviewImage: review4,
    CustomerName: "MD NAsim Uddin",
    CustomerImage:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    ReviewImage: review1,
    CustomerName: "MD NAsim Uddin",
    CustomerImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Review = () => {
  return (
    <div className="py-10 ">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <Swiper
          style={{
            "--swiper-navigation-color": "#1DAD00",
          }}
          slidesPerView={1}
          spaceBetween={10}
          speed={600}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            620: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="videoSlider reviewSlider"
        >
          <h2 className="text-xl text-neutral font-semibold uppercase absolute top-[8%]">
            Our Valuable Client
          </h2>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 rounded-xl w-72 overflow-hidden">
                <div className="mb-4 cursor-pointer">
                  <PhotoProvider>
                    <PhotoView src={review.ReviewImage}>
                      <img
                        src={review.ReviewImage}
                        alt=""
                        className="h-80 w-full"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                {/* Customer info */}
                <div className="flex gap-4 p-4 pt-0 items-center">
                  <img
                    src={review.CustomerImage}
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold text-neutral">
                      {review.CustomerName}
                    </h2>
                    <div className="flex gap-1 text-primary">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
