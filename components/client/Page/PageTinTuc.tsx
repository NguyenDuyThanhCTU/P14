"use client";
import React, { Fragment } from "react";
import "react-quill/dist/quill.bubble.css";
import Header from "../Home/Header";

import ThanhToan from "../Home/ThanhToan";
import { useData } from "@Context/AppProvider";

export default function PageTinTuc() {
  const { tintuc } = useData();
  const datatintuc = tintuc.map((data: any) => data).reverse();

  return (
    <Fragment>
      <div className="web-bg">
        <div className="text-white mx-10">
          <p className="text-center py-10 text-white font-bold text-3xl">
            Tin Tức
          </p>
        </div>
        <ThanhToan />
      </div>
    </Fragment>
  );
}
