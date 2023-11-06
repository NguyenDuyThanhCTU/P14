"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useData } from "@Context/AppProvider";

const Partner = () => {
  const { phanhoi } = useData();

  return (
    <div className="flex flex-col">
      <h2 className="uppercase font-bold text-[28px] py-5 text-center">
        Đối tác
      </h2>
      <div className="p:hidden d:block py-2">
        <Swiper
          centeredSlides={true}
          slidesPerView={4}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="grid grid-cols-4">
            {phanhoi.map((item: any, index: number) => (
              <SwiperSlide>
                <div key={index}>
                  <div className="w-[225px] h-[225px] flex justify-center">
                    <img
                      src={item.photoURL}
                      alt="project"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="d:hidden p:block py-2">
        <Swiper
          centeredSlides={true}
          slidesPerView={2}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="grid grid-cols-4">
            {phanhoi.map((item: any, index: number) => (
              <SwiperSlide>
                <div key={index}>
                  <div className="w-full flex justify-center">
                    <img src={item.photoURL} alt="project" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
