"use client";
import React, { Fragment } from "react";
import "react-quill/dist/quill.bubble.css";
import Header from "../Home/Header";

import ThanhToan from "../Home/ThanhToan";
import DanhGia from "../Home/DanhGia";
import CauHoi from "../Home/CauHoi";
import Footer from "../Home/Footer";
import Baiviet from "../Home/BaiViet";

export default function PageTinTuc() {
  return (
    <Fragment>
      <div className="web-bg">
        <div className="text-white mx-10">
          <p className="text-center text-white font-bold text-3xl">Tin Tức</p>
        </div>
        <ThanhToan />
      </div>
    </Fragment>
  );
}
