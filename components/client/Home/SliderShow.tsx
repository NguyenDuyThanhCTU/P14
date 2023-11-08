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
import SanPham from "../SanPham/SanPham";
import ProductSlide from "../SanPham/ProductSlide";

export default function SliderShow() {
  const {
    slidershow,
    desktop,
    loaisanpham,
    sanphamtheoloai1,
    setLoai,
    setUid,
    router,
    sanpham,
  } = useData();
  const dataloai = loaisanpham.map((data: any) => data).reverse();
  const datasanpham = sanpham.map((data: any) => data).reverse();
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
  // const sanPhamLoai = (
  //   <>
  //     <ul className="max-w-[60vw] cursor-pointer">
  //       {sanphamtheoloai1?.map((data: any) => (
  //         <li
  //           key={data}
  //           className="flex justify-start items-center font-bold py-2 px-5 italic hover:bg-gray-200 hover:rounded-md
  //               border-b border-dotted hover:text-red-500"
  //           onClick={() => {
  //             setUid(data.uid);
  //             setLoai(data.loai1);
  //             router.push(`/san-pham/${data.loai1}/${data.uid}`);
  //             setTimeout(() => {
  //               window.scroll(0, 0);
  //             }, 1000);
  //           }}
  //         >
  //           <IoFishSharp className="mr-5" /> {data.ten.toUpperCase()}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
  const desktopSlider = (
    <div className="grid grid-cols-7  bg-left-bottom bg-no-repeat  gap-5 justify-start items-center cursor-pointer w-full bg-[url(https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fz4853091603323_a9b2b25ca0bce4c69fd44baac9a317a5.jpg?alt=media&token=943d6097-9222-496d-861f-3e21f7cb328a)]">
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
          src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fa.png?alt=media&token=3a6f6730-8498-4274-9784-2db82ff83c67"
          alt="banner"
          className="w-full"
        />
      </div>
      <div className="  col-span-5 flex flex-col gap-4 ">
        <Swiper
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <div className="flex w-full justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fa.png?alt=media&token=0c11d570-98c1-4692-8373-2167993ac1a8"
                alt="banner"
                className="w-[60%] object-contain"
              />
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {datasanpham
                .filter(
                  (item: any) => item.loai1 === "SẢN PHẨM NỔI BẬT GIẢM GIÁ"
                )
                .map((data: any, idx: number) => (
                  <div key={idx}>
                    {" "}
                    <SwiperSlide>
                      <ProductSlide sanpham={data} type={"slide"} />
                    </SwiperSlide>
                  </div>
                ))}
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {datasanpham
                .filter((item: any) => item.loai1 === "THỦY SẢN TƯƠI CÀ MAU")
                .map((data: any, idx: number) => (
                  <div key={idx}>
                    {" "}
                    <SwiperSlide>
                      <ProductSlide sanpham={data} type={"slide"} />
                    </SwiperSlide>
                  </div>
                ))}
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {datasanpham
                .filter(
                  (item: any) => item.loai1 === "THỦY SẢN ĐÔNG LẠNH CÀ MAU"
                )
                .map((data: any, idx: number) => (
                  <div key={idx}>
                    {" "}
                    <SwiperSlide>
                      <ProductSlide sanpham={data} type={"slide"} />
                    </SwiperSlide>
                  </div>
                ))}
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {datasanpham
                .filter((item: any) => item.loai1 === "KHÔ HẢI SẢN CÀ MAU")
                .map((data: any, idx: number) => (
                  <div key={idx}>
                    {" "}
                    <SwiperSlide>
                      <ProductSlide sanpham={data} type={"slide"} />
                    </SwiperSlide>
                  </div>
                ))}
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {datasanpham
                .filter((item: any) => item.loai1 === "NÔNG SẢN SẠCH CÀ MAU")
                .map((data: any, idx: number) => (
                  <div key={idx}>
                    {" "}
                    <SwiperSlide>
                      <ProductSlide sanpham={data} type={"slide"} />
                    </SwiperSlide>
                  </div>
                ))}
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div>{desktop ? desktopSlider : mobileSlider}</div>
    </Fragment>
  );
}
