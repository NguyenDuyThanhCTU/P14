import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useData } from "@Context/AppProvider";

const SlideItem = ({ Background, Data }: any) => {
  const { thongtin } = useData();
  return (
    <div className="relative w-full">
      <div className="w-full">
        <img src={Background} alt="banner1" />
      </div>
      <div
        className={`
           top-6 right-3  h-[75%] w-[50%]
        absolute  flex justify-center`}
      >
        <Swiper
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          slidesPerView={2}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="flex flex-col gap-3">
            {Data.map((data: any, idx: number) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-full  py-2  bg-gray-200 h-[160px] overflow-hidden">
                    <img
                      className="w-full h-full object-contain hover:scale-125 duration-300 "
                      hidden={!data.status}
                      key={data.uid}
                      alt=""
                      src={data.photoURL}
                    />
                  </div>
                  <div
                    className="flex"
                    onClick={() => {
                      window.open(`tel:${thongtin[0].sdt}`, "_self");
                    }}
                  >
                    <div className="px-6 flex items-center gap-2  py-1 rounded-full bg-red-500 text-white">
                      <BsFillTelephoneFill />
                      <span> Liên hệ</span>
                    </div>
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

export default SlideItem;
