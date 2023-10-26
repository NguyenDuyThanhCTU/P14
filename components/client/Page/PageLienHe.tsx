"use client";
import React, { Fragment } from "react";
import "react-quill/dist/quill.bubble.css";
import ThanhToan from "../Home/ThanhToan";
import { useData } from "@Context/AppProvider";

export default function PageLienHe() {
  const { thongtin } = useData();
  return (
    <Fragment>
      <div className="web-bg">
        <div className="text-black mx-10">
          <p className="text-center text-black font-bold text-3xl py-10">
            Liên hệ
          </p>
          <p>{thongtin[0]?.ten}</p>
          <p>
            Chuyên cung cấp - buôn bán sỉ lẽ các loại hải sản khô như mực khô,
            cá khô, tôm khô, khô 1 nắng, mực trứng... và các loại mỹ phẩm & thực
            phẩm chức năng SOCOS
          </p>
          <p>
            Uy tín với chất lượng tốt nhất thị trường và giá cả cạnh tranh đảm
            bảo đáng đồng tiền khách hàng bỏ ra.
          </p>
          <p>Địa chỉ : {thongtin[0]?.diachi1}</p>
          <p>Hotline : {thongtin[0]?.sdtchinh}</p>
          <p>Gmail : {thongtin[0]?.gmail}</p>
        </div>
        <ThanhToan />
      </div>
    </Fragment>
  );
}
