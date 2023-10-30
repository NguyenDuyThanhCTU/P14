import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const SlideItem = ({ Background, Data }: any) => {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <img src={Background} alt="banner1" />
      </div>
      <div
        className={`${
          Data[0]?.type === "rice"
            ? " top-6 right-0  h-[75%] w-[50%]"
            : Data[0]?.type === "driedsquid"
            ? "h-[50%] top-20 left-28 w-[50%]"
            : "top-6 right-3  h-[75%] w-[50%]"
        } absolute  flex justify-center`}
      >
        <Swiper
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Data.map((data: any, idx: number) => (
            <SwiperSlide>
              {" "}
              <Link
                href={"/sanpham"}
                className="h-full flex items-center  justify-center w-full"
              >
                <div className="w-full h-full py-2 rounded-3xl bg-gray-200">
                  <img
                    className="w-full h-full object-cover rounded-3xl "
                    hidden={!data.status}
                    key={data.uid}
                    alt=""
                    src={data.photoURL}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideItem;
