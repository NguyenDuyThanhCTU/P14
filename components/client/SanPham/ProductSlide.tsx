"use client";
import { Button } from "@mui/material";
import { Badge } from "antd";
import React, { Fragment, useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { RiShoppingCartFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useData } from "@Context/AppProvider";
import { useFE } from "@Context/FrontEndProvider";

export default function ProductSlide({ sanpham }: any) {
  const { setUid, setLoai, router } = useData();
  const { setThemSanpham } = useFE();
  return (
    <>
      <div className="flex flex-wrap md:justify-center justify-center items-center">
        <div className="m-2 md:m-10 md:w-[18vw]" key={sanpham.uid}>
          <Badge.Ribbon
            placement="start"
            color="red"
            text={
              sanpham.giamgia === undefined
                ? sanpham.loai1
                : "Giảm " + sanpham.giamgia + "%"
            }
          >
            <div className="p-2 bg-gradient-to-bl from-white to-slate-200 rounded-lg shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <ScrollAnimation animateIn="animate__backInLeft">
                <div className="md:w-[17vw] md:h-[17vw] w-[85vw] h-[85vw]">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    alt=""
                    src={sanpham.photoURL}
                  />
                </div>
              </ScrollAnimation>
              <p className="font-bold text-center mt-2 h-[40px] overflow-hidden">
                {sanpham.ten.toUpperCase()}
              </p>
              <div className="flex flex-col justify-center items-center h-[40px]">
                <p className="text-red-500 font-bold">
                  {Number(sanpham.gia).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                {sanpham.giamgia !== undefined && (
                  <p className="text-black line-through">
                    Giá gốc :{" "}
                    {Number(
                      (sanpham.gia * sanpham.giamgia) / 100 +
                        Number(sanpham.gia)
                    ).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                )}
              </div>
              <div className="flex">
                <Button
                  size="small"
                  variant="contained"
                  className="whitespace-nowrap"
                  onClick={() => {
                    setUid(sanpham.uid);
                    setLoai(sanpham.loai1);
                    router.push(`/san-pham/${sanpham.loai1}/${sanpham.uid}`);
                    setTimeout(() => {
                      window.scroll(0, 0);
                    }, 1000);
                  }}
                >
                  XEM
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setThemSanpham(true);
                    setUid(sanpham.uid);
                  }}
                  className="flex items-center"
                >
                  THÊM VÀO GIỎ <RiShoppingCartFill className="ml-2 mb-1" />
                </Button>
              </div>
            </div>
          </Badge.Ribbon>
        </div>
      </div>
    </>
  );
}
