"use client";
import React, { Fragment } from "react";
import { useData } from "@Context/AppProvider";
import ThanhToan from "../Home/ThanhToan";

export default function PageGioiThieu() {
  const { baiviet } = useData();

  return (
    <Fragment>
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fz4853719843255_fbc5ac5246a04306729f383c6ceb2de6.jpg?alt=media&token=53323423-c2cc-48c2-92ec-2a835b8b9b94)] bg-cover  ">
        <div className="text-white px-10 bg-[rgba(1,1,1,0.38)] ">
          <p className="text-center text-white font-bold text-3xl py-10 uppercase">
            Giới thiệu
          </p>
          <div
            className="pb-5 flex flex-col gap-2"
            dangerouslySetInnerHTML={{ __html: baiviet[0]?.editor }}
          ></div>
        </div>
        <ThanhToan />
      </div>
    </Fragment>
  );
}
