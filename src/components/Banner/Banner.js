import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import banner1 from "../../assets/Images/banner1.png";
import banner2 from "../../assets/Images/banner2.png";
import banner3 from "../../assets/Images/banner3.png";
import { Autoplay } from "swiper";

const Banner = () => {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="bannerSlider h-60 md:h-80 lg:h-[550px]"
        >
          <SwiperSlide>
            <img src={banner1} alt="" className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" className="w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
