"use client";
import { useData } from "@Context/AppProvider";
import { Popover } from "antd";
import React, { Fragment, useContext } from "react";
import { IoFishSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function SliderShow() {
  const {
    slidershow,
    desktop,
    loaisanpham,
    sanphamtheoloai1,
    setLoai,
    setUid,
    router,
    thongtin,
  } = useData();
  const dataloai = loaisanpham.map((data: any) => data).reverse();
  const mobileSlider = (
    <div className="m-2 w-screen  h-[500px]">
      <Swiper
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slidershow.map((data: any, idx: number) => (
          <SwiperSlide>
            {" "}
            <img
              className="h-full w-full object-contain"
              hidden={!data.status}
              key={data.uid}
              alt=""
              src={data.photoURL}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  const sanPhamLoai = (
    <>
      <ul className="max-w-[60vw] cursor-pointer">
        {sanphamtheoloai1?.map((data: any) => (
          <li
            key={data}
            className="flex justify-start items-center font-bold py-2 px-5 italic hover:bg-gray-200 hover:rounded-md
                border-b border-dotted hover:text-red-500"
            onClick={() => {
              setUid(data.uid);
              setLoai(data.loai1);
              router.push(`/san-pham/${data.loai1}/${data.uid}`);
              setTimeout(() => {
                window.scroll(0, 0);
              }, 1000);
            }}
          >
            <IoFishSharp className="mr-5" /> {data.ten.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
  const desktopSlider = (
    <div className="grid grid-cols-6 justify-start items-center cursor-pointer w-full">
      <div className=" h-[500px] w-max overflow-y-auto bg-gray-100 shadow-lg">
        <ul className="w-max">
          {dataloai.map((data: any) => (
            <Popover key={data.uid} placement="rightTop" content={sanPhamLoai}>
              <li
                className="flex justify-start items-center font-bold py-2 px-5 italic hover:bg-gray-200 hover:rounded-md
                border-b border-dotted hover:text-red-500"
                onMouseEnter={() => setLoai(data.loai1)}
                onClick={() => {
                  setLoai(data.loai1);
                  router.push("/loaisanpham");
                  setTimeout(() => {
                    window.scroll(0, 600);
                  }, 1000);
                }}
              >
                <IoFishSharp className="mr-5" /> {data.loai1?.toUpperCase()}
              </li>
            </Popover>
          ))}
        </ul>
      </div>
      <div className="h-[500px]  col-span-3">
        <Swiper
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {slidershow.map((data: any, idx: number) => (
            <SwiperSlide>
              {" "}
              <img
                className="h-full w-full object-contain"
                hidden={!data.status}
                key={data.uid}
                alt=""
                src={data.photoURL}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/thongtin%2Fa.png?alt=media&token=1556850b-6413-4688-ac02-035f159f3634"
          alt="banner"
          className="w-full"
        />
      </div>
    </div>
  );
  return (
    <Fragment>
      <div>{desktop ? desktopSlider : mobileSlider}</div>
    </Fragment>
  );
}
