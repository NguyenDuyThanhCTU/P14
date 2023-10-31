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
import SlideItem from "../Items/SlideItem";

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
      {/* <Swiper
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
      </Swiper> */}
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
    <div className="grid grid-cols-7 gap-5 justify-start items-start cursor-pointer w-full">
      {/* <div className=" h-[500px] w-max overflow-y-auto bg-gray-100 shadow-lg">
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
      </div> */}
      <div className="col-span-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2F18.png?alt=media&token=32360607-ee35-48ef-81dd-1462f0d9926d"
          alt="banner"
          className="w-full"
        />
      </div>
      <div className="  col-span-3 flex flex-col gap-4 ">
        <Swiper
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideItem
              Background={
                "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2FPicture4.png?alt=media&token=a4a14673-bea7-4606-8999-fbcbda2dff3e"
              }
              Data={slidershow?.filter((items: any) => items.type === "rice")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem
              Background={
                "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2FUntitled%20design.png?alt=media&token=b9d6cab3-07fc-4ec4-a638-4f05071d21c7"
              }
              Data={slidershow?.filter(
                (items: any) => items.type === "driedsquid"
              )}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem
              Background={
                "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2FPicture3.png?alt=media&token=0ca29981-d86c-4cc4-a197-8636b1871454"
              }
              Data={slidershow?.filter(
                (items: any) => items.type === "freshsquid"
              )}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideItem
              Background={
                "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2FPicture1.png?alt=media&token=00f68fe4-d2a5-4972-bdf2-d12568f27b4d"
              }
              Data={slidershow?.filter(
                (items: any) => items.type === "seafood"
              )}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fa.png?alt=media&token=0c11d570-98c1-4692-8373-2167993ac1a8"
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
