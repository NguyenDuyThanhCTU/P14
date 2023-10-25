"use client";
import React, { Fragment, useContext } from "react";
import "react-quill/dist/quill.bubble.css";

import { useData } from "@Context/AppProvider";
import Header from "../Home/Header";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import SliderShow from "../Home/SliderShow";
import ThanhToan from "../Home/ThanhToan";
import DanhGia from "../Home/DanhGia";
import CauHoi from "../Home/CauHoi";
import Footer from "../Home/Footer";
import Baiviet from "../Home/BaiViet";

export default function PageSanPham() {
  const { sanphamtheoloai } = useData();
  return (
    <Fragment>
      <div className="web-bg">
        <SliderShow />
        <SanPham sanpham={sanphamtheoloai} />
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
