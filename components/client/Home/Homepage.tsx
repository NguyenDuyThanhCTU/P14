"use client";
import React, { Fragment } from "react";
import SanPhamKhuyenMai from "../SanPham/SanPhamKhuyenMai";
import SanPhamNoiBat from "../SanPham/SanPhamNoiBat";
import ThemSanPham from "../SanPham/ThemSanPham";
import SanPhamMoi from "./../SanPham/SanPhamMoi";
import BaiViet from "./BaiViet";
import CauHoi from "./CauHoi";
import DanhGia from "./DanhGia";
import Footer from "./Footer";
import Header from "./Header";
import SliderShow from "./SliderShow";
import ThanhToan from "./ThanhToan";
import { useData } from "@Context/AppProvider";
import Product from "../SanPham/Product";
import { GiGiantSquid } from "react-icons/gi";
import Partner from "./Partner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { EffectCreative } from "swiper/modules";

export default function Homepage() {
  const { loaisanpham, slidershow } = useData();
  const dataloai = loaisanpham.map((data: any) => data).reverse();

  return (
    <div className="">
      <div className=" ">
        {/* <div className="py-5">
          <SliderShow />
        </div> */}
        {/* <div className="flex flex-col w-full justify-center items-center py-5">
          <h2 className=" text-[#610706] uppercase text-[40px] font-semibold">
            Thực phẩm sạch
          </h2>
          <div className="text-[#EFA125] text-[100px] font-bold uppercase">
            Thiên Ngọc
          </div>
          <div className=" text-[#610706] uppercase text-[30px] font-semibold">
            Uy tính - An Toàn - Chất lượng
          </div>
          <div className=" text-[#610706] uppercase text-[30px] font-semibold">
            Nơi gửi trọn niềm tin
          </div>
        </div> */}
        <div className="h-max">
          <div className="relative h-max w-full ">
            <div className="p:w-auto  d:w-[1300px] mx-auto absolute left-1  right-1">
              <Swiper
                grabCursor={true}
                effect={"creative"}
                loop={true}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper"
              >
                {slidershow.map((item: any, idx: number) => (
                  <SwiperSlide>
                    <div key={idx} className="w-full h-[65vh]">
                      <img
                        className="w-full h-full object-cover hover:scale-125 duration-300 rounded-xl"
                        alt=""
                        src={item.photoURL}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="bg-[url(http://www.baseafood.vn/images/bg_slider.png)] bg-no-repeat h-[70vh] w-full bg-cover py-10    bg-right-bottom relative bottom-full z-50">
              <div className="w-40 h-40 rounded-full border-blue-500 border-[10px] overflow-hidden">
                <Swiper
                  centeredSlides={true}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {slidershow
                    ?.filter((items: any) => items.type === "rice")
                    ?.map((item: any, index: number) => (
                      <SwiperSlide>
                        <div key={index}>
                          <div className="w-40 h-40 rounded-full flex justify-center ">
                            <img
                              src={item.photoURL}
                              alt="project"
                              className="object-cover  origin-center rounded-full w-full h-full "
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="w-40 h-40 overflow-hidden rounded-full border-blue-500 border-[10px] relative  left-56">
                <Swiper
                  centeredSlides={true}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {slidershow
                    ?.filter((items: any) => items.type === "driedsquid")
                    ?.map((item: any, index: number) => (
                      <SwiperSlide>
                        <div key={index}>
                          <div className="w-40 h-40 rounded-full flex justify-center ">
                            <img
                              src={item.photoURL}
                              alt="project"
                              className="object-cover  "
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="absolute left-[600px] top-96   flex  gap-[224px]">
                <div className="w-40 h-40  overflow-hidden rounded-full border-blue-500 border-[10px]">
                  <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {slidershow
                      ?.filter((items: any) => items.type === "freshsquid")
                      ?.map((item: any, index: number) => (
                        <SwiperSlide>
                          <div key={index}>
                            <div className="w-40 h-40  rounded-full flex justify-center  items-center">
                              <img
                                src={item.photoURL}
                                alt="project"
                                className="object-cover  "
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className="w-40 h-40 overflow-hidden rounded-full border-blue-500 border-[10px]">
                  <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {slidershow
                      ?.filter((items: any) => items.type === "seafood")
                      ?.map((item: any, index: number) => (
                        <SwiperSlide>
                          <div key={index}>
                            <div className="w-40 h-40  rounded-full flex justify-center ">
                              <img
                                src={item.photoURL}
                                alt="project"
                                className="object-cover  "
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p:w-auto d:w-[1300px] bg-no-repeat bg-cover mt-10  bg-center mx-auto bg-[url(https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fz4840795432538_e0d93e1fe26a6691c6b3745d8c8f9ae0.jpg?alt=media&token=b85dd234-08a2-4f55-a792-f703ced8ffc2)]">
          <div className="w-full h-full bg-[rgba(0,0,0,0.45)]">
            <div className="p-10 flex flex-col items-center gap-5">
              <h2 className="uppercase text-[30px] text-white">Giới thiệu</h2>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-48 bg-white"></div>
                <div className="text-white text-[40px]">
                  <GiGiantSquid />
                </div>
                <div className="h-[1px] w-48 bg-white"></div>
              </div>
              <div className="text-white text-[16px]">
                <p>
                  Với 100 CBCNV nên xưởng sản xuất và kho đông lạnh có sức chứa
                  hơn 1.000 tấn. Sản lượng hàng hóa mỗi năm sản xuất và kinh
                  doanh nông sản - thủy sản từ 5.000 tấn trở lên để phục vụ xuất
                  nhập khẩu và tiêu thụ nội địa.
                  <br />
                  Công ty tuy mới hoạt động nhưng hàng hóa của Công ty đã được
                  thị trường chấp nhận, đã và đang được ủng hộ nhiệt tình của
                  người tiêu dùng với thương hiệu “ Thiên Ngọc”. Trước mắt công
                  ty đang định hướng cho những năm tiếp theo để chuẩn bị, mở
                  rộng quy mô sản xuất, đầu tư cho thương hiệu và phấn đấu thành
                  một trong những nhà cung cấp hàng đầu về thủy sản đông lạnh và
                  chế biến miền Nam, tiến tới phấn đấu trở thành thương hiệu
                  mạnh quốc gia. Hiện nay doanh nghiệp đang tiến hành kinh doanh
                  theo phương thức kinh doanh online: mở rộng thị đến với các
                  quốc gia qua các app web bán hàng. Thị trường xuất nhập khẩu
                  và Nội địa ...
                </p>
              </div>
              <Link href={`/gioithieu`} className="flex">
                <div className="px-10 hover:bg-blue-600 duration-300 py-2 bg-blue-400 cursor-pointer text-white">
                  Xem thêm
                </div>
              </Link>
              {/* <div className="w-full px-10 ">
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
                      {projectItems.map((item, index) => (
                        <SwiperSlide>
                          <div key={index}>
                            <div className="w-[225px] h-[225px] flex justify-center">
                              <img
                                src={item.image}
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
              </div> */}
            </div>
          </div>
        </div>

        {dataloai.map((items: any, idx: number) => (
          <div key={idx} className="">
            <Product topic={items.loai1} />
          </div>
        ))}

        {/* <SanPhamKhuyenMai />
        <SanPhamNoiBat />
        <SanPhamMoi /> */}

        <ThemSanPham />
        <ThanhToan />
      </div>
    </div>
  );
}
