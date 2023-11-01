"use client";
import React, { Fragment } from "react";
import { useData } from "@Context/AppProvider";
import ThanhToan from "../Home/ThanhToan";

export default function PageGioiThieu() {
  const { baiviet } = useData();
  return (
    <Fragment>
      <div className="  ">
        <div className="text-black mx-10">
          <p className="text-center text-black font-bold text-3xl py-10 uppercase">
            Giới thiệu
          </p>
          <div
            className="pb-5"
            dangerouslySetInnerHTML={{ __html: baiviet[0]?.editor }}
          ></div>
        </div>
        <ThanhToan />
      </div>
    </Fragment>
  );
}
