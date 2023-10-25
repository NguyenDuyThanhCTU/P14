"use client";
import React, { Fragment } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
import { useData } from "@Context/AppProvider";

export default function Baiviet() {
  const { baiviet, desktop, setUid, router } = useData();
  const baiViet = (
    <div>
      <Swiper
        slidesPerView={desktop ? 3 : 1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {baiviet.map((data: any) => (
          <SwiperSlide
            key={data.uid}
            hidden={!data.status}
            className="swiper-slide2"
            onClick={() => {
              setUid(data.uid);
              router.push("/chitietbaiviet");
              setTimeout(() => {
                window.scroll(0, 0);
              }, 1000);
            }}
          >
            <div className="bg-gradient-to-bl from-white to-slate-300  rounded-lg flex flex-col cursor-pointer m-2">
              <img className="rounded-md" alt="" src={data.photoURL} />
              <p className="active:text-blue-500 px-5 text-center font-bold text-lg">
                {data.tieude}
              </p>{" "}
              <p className="italic text-red-500 text-[12px] text-center">
                Ngày đăng : {moment.unix(data.createdAt).format("DD/MM HH:MM")}{" "}
                by Admin
              </p>
              <p className="italic text-sm px-5 text-center">"{data.phude}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  return (
    <Fragment>
      <div className="border-b-2 border-red-500 mx-2 pt-2">
        <div className="flex justify-start font-bold">
          <div className="text-white bg-red-500 pt-1 px-2">
            BÀI VIẾT & MẸO VẶT
          </div>
        </div>
      </div>
      <div>{baiViet}</div>
    </Fragment>
  );
}
