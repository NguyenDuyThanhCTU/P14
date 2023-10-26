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

export default function Homepage() {
  const { loaisanpham } = useData();

  const dataloai = loaisanpham.map((data: any) => data).reverse();

  return (
    <Fragment>
      <div className=" bg-white">
        <SliderShow />
        {dataloai.map((items: any, idx: number) => (
          <div key={idx}>
            <Product topic={items.loai1} />
          </div>
        ))}

        {/* <SanPhamKhuyenMai />
        <SanPhamNoiBat />
        <SanPhamMoi /> */}

        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
