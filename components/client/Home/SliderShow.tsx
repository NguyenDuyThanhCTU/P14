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
        <SlideItem
          Background={
            "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2F2.png?alt=media&token=dc65eddb-6ede-4c91-b798-e2a38aaf9947"
          }
          Data={slidershow?.filter(
            (items: any) => items.type === "agricultural"
          )}
        />
        <SlideItem
          Background={
            "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2F3.png?alt=media&token=311a4484-dda9-4006-804a-9d1b3371685c"
          }
          Data={slidershow?.filter((items: any) => items.type === "rice")}
        />

        <SlideItem
          Background={
            "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2F4.png?alt=media&token=5bae338e-c83a-4fa2-8fab-c8a7b7b3e6fa"
          }
          Data={slidershow?.filter((items: any) => items.type === "driedsquid")}
        />

        <SlideItem
          Background={
            "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2F5.png?alt=media&token=e58e0952-14b4-4847-a310-9669264a7376"
          }
          Data={slidershow?.filter((items: any) => items.type === "freshsquid")}
        />
        <SlideItem
          Background={
            "https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2FPicture1.png?alt=media&token=24d55bf5-4c30-49ec-bba7-ed4a59664146"
          }
          Data={slidershow?.filter((items: any) => items.type === "seafood")}
        />
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
              <Link
                href={"/sanpham"}
                className="h-full flex items-center  justify-center w-full"
              >
                <div className="w-full h-full py-2 rounded-3xl ">
                  <img
                    className="w-full h-full object-contain rounded-3xl"
                    hidden={!data.status}
                    key={data.uid}
                    alt=""
                    src={data.photoURL}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      <div className="col-span-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2F13.png?alt=media&token=198b472c-f1b5-4e87-bc45-f532952302ea"
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
