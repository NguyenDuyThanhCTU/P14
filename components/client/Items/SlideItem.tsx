import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useData } from "@Context/AppProvider";

const SlideItem = ({ Background, Data, title }: any) => {
  const { thongtin } = useData();
  return (
    <div className="flex">
      <div className="w-full">
        <Swiper
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          slidesPerView={5}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Data.map((data: any, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-2 items-center">
                <div className=" py-2    h-[260px] overflow-hidden">
                  <img
                    className="w-full h-full object-contain hover:scale-125 duration-300 rounded-xl"
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
                  <div
                    className="px-6 flex items-center gap-2  py-1 rounded-full bg-red-500 text-white"
                    onClick={() =>
                      window.open(`tel:${thongtin[0].sdtchinh}`, "_self")
                    }
                  >
                    <span className="font-LexendDeca">Mua ngay</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex-1">
        <div className="flex flex-col gap-2">
          <h2 className=" font-bold text-[30px] uppercase font-UTM">{title}</h2>
          <div className="h-1 w-20 bg-black"></div>
          <div className=" text-[24px]">
            {title === "Gạo sạch Cà Mau" ? (
              <div className="text-black font-fleur">
                Chuyên cung cấp các loại gạo ăn, gạo xuất khẩu
              </div>
            ) : title === "Khô Mực Cà Mau" ? (
              <div className="text-black">
                <p className="font-fleur">
                  Chuyên cung cấp các mặt hàng{" "}
                  <strong>Khô đặc sản Cà Mau </strong>
                </p>
                <div className="text-[18px] text-center text-orange-500 mt-5 font-semibold">
                  <p className="">Các loại khô đặc sản Cà Mau</p>
                  <p className="">
                    An toàn, chất lượng, uy tính - Nơi gửi trọn niềm tin
                  </p>
                </div>
              </div>
            ) : title === "Mực tươi Cà Mau" ? (
              <div className="text-black">
                <p className="font-fleur">
                  Chuyên cung cấp các mặt hàng <strong>Mực xuất khẩu </strong>{" "}
                </p>
                <div className="flex">
                  <p className=" py-2 border border-orange-700 px-6 text-orange-700 mt-5 rounded-full font-bold">
                    Mực, bạch tuộc xuất khẩu
                  </p>
                </div>
              </div>
            ) : title === "Thủy Hải Sản Biển Cà Mau" ? (
              <>
                <div className="text-black">
                  <p className="font-fleur">
                    Thủy hải sản tươi sống - Thủy hải sản đông lạnh
                  </p>
                  <div className="flex">
                    <p className=" py-2  text-center border-orange-700 px-6 text-orange-700 mt-5 rounded-full font-bold">
                      An toàn, chất lượng, uy tính - Nơi gửi trọn niềm tin
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SlideItem;
