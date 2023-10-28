"use client";
import React, { Fragment } from "react";
import { useData } from "@Context/AppProvider";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import SliderShow from "../Home/SliderShow";
import ThanhToan from "../Home/ThanhToan";

export default function PageLoaiSanPham() {
  const { sanphamtheoloai1, loai } = useData();

  return (
    <Fragment>
      <div className="web-bg">
        <SliderShow />
        <p className="text-center italic m-5 text-black font-extrabold text-2xl">
          {loai.toUpperCase()}
        </p>
        <SanPham sanpham={sanphamtheoloai1} />
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
