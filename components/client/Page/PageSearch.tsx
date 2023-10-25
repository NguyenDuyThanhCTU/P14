"use client";
import React, { Fragment, useContext } from "react";
import "react-quill/dist/quill.bubble.css";
import Header from "../Home/Header";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import SliderShow from "../Home/SliderShow";
import ThanhToan from "../Home/ThanhToan";
import DanhGia from "../Home/DanhGia";
import CauHoi from "../Home/CauHoi";
import Footer from "../Home/Footer";
import { useData } from "@Context/AppProvider";
import Baiviet from "../Home/BaiViet";

export default function PageSearch() {
  const { ketqua } = useData();

  return (
    <Fragment>
      <div className="web-bg">
        <p className="text-center italic m-5 text-white text-2xl">
          SẢN PHẨM TÌM THẤY
        </p>
        <SanPham sanpham={ketqua} />
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
