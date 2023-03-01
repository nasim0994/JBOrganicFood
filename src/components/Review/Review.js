import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ReviewCard from "./ReviewCard";
import nasim from "../../assets/Images/na.jpg";

const reviews = [
  {
    CustomerName: "MD Nasim Uddin",
    CustomerImage: nasim,
    rating: 4.5,
  },
  {
    CustomerName: "Marcella Ellis",
    CustomerImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 1.5,
  },
  {
    CustomerName: "Johanna French",
    CustomerImage: "https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large",
    rating: 5,
  },
  {
    CustomerName: "Courtney Sparks",
    CustomerImage:
      "https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg",
    rating: 2,
  },
  {
    CustomerName: "Noah Andrews",
    CustomerImage:
      "https://yt3.googleusercontent.com/ytc/AL5GRJXQJA9WM8QnXIX8Sf1U3XlHhbRiTWiTxVpRNbV4aBI=s900-c-k-c0x00ffffff-no-rj",
    rating: 5,
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
              spaceBetween: 40,
            },
          }}
          className="videoSlider reviewSlider"
        >
          <h2 className="text-xl text-neutral font-semibold uppercase absolute top-[8%]">
            Our Happy Client
          </h2>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
