"use client";
import React, { Fragment } from "react";

import { useData } from "@Context/AppProvider";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import SliderShow from "../Home/SliderShow";
import ThanhToan from "../Home/ThanhToan";

export default function PageSanPham() {
  const { sanpham } = useData();
  const datasanpham = sanpham.map((data: any) => data).reverse();

  return (
    <Fragment>
      <div className="web-bg">
        <SliderShow />

        <SanPham sanpham={datasanpham} />
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
