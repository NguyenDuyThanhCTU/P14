"use client";
import React, { Fragment } from "react";
import { useData } from "@Context/AppProvider";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import ThanhToan from "../Home/ThanhToan";

export default function PageSalesOff() {
  const { sanphamsalesoff } = useData();
  return (
    <Fragment>
      <div className="web-bg">
        <p className="text-center italic m-5 text-black text-2xl">SALES OFF</p>
        <SanPham sanpham={sanphamsalesoff} />
        <ThanhToan />
        <ThemSanPham />
      </div>
    </Fragment>
  );
}
