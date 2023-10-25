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

export default function Homepage() {
  return (
    <Fragment>
      <div className="web-bg">
        <SliderShow />
        <SanPhamKhuyenMai />
        <SanPhamNoiBat />
        <SanPhamMoi />
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
