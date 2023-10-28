"use client";
import React, { Fragment } from "react";
import Header from "../Home/Header";

import ThanhToan from "../Home/ThanhToan";
import { useData } from "@Context/AppProvider";

export default function PageTinTuc() {
  const { tintuc } = useData();
  const datatintuc = tintuc.map((data: any) => data).reverse();

  return (
    <Fragment>
      <div className="web-bg">
        <div className=" mx-10">
          <p className="text-center py-10  font-bold text-3xl">Tin Tức</p>
        </div>
        <ThanhToan />
      </div>
    </Fragment>
  );
}
