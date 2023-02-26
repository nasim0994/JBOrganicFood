import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Videos = () => {
  return (
    <div className="py-10 bg-slate-100">
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
            className="videoSlider"
          >
            <h2 className="text-xl text-neutral font-semibold uppercase absolute top-[8%]">
              Videos
            </h2>
            <SwiperSlide>
              <div>
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/jjo5sIFg31Q"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/jjo5sIFg31Q"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div>
                  <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/embed/jjo5sIFg31Q"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div>
                  <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/embed/jjo5sIFg31Q"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/jjo5sIFg31Q"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/jjo5sIFg31Q"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/jjo5sIFg31Q"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          </Swiper>

      </div>
    </div>
  );
};

export default Videos;
