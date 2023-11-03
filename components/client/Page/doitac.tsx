"use client";
import React from "react";

import { useData } from "@Context/AppProvider";

export const Doitac: React.FC = () => {
  const { thongtin } = useData();

  return (
    <div>
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/03/projectsingaporebg.jpg)] h-[315px] flex items-center justify-center bg-center bg-cover">
        <h1 className="text-[#00d8ff] text-[42px] uppercase font-bold text-center">
          Các đối tác của chúng tôi
        </h1>
      </div>
      <div className="flex flex-col gap-5 p:w-auto p-2 d:w-[1200px] mx-auto py-10 text-[20px]  font-normal text-gray-600">
        <p>
          <strong className="text-mainblue">
            Công ty TNHH nông sản thủy sản Thiên Ngọc
          </strong>{" "}
          đã được thị trường chấp nhận, đã và đang được ủng hộ nhiệt tình của
          người tiêu dùng với thương hiệu “ Thiên Ngọc”. Trước mắt công ty đang
          định hướng cho những năm tiếp theo để chuẩn bị, mở rộng quy mô sản
          xuất, đầu tư cho thương hiệu và phấn đấu thành một trong những nhà
          cung cấp hàng đầu về thủy sản đông lạnh và chế biến miền Nam, tiến tới
          phấn đấu trở thành thương hiệu mạnh quốc gia
        </p>
        <p>
          Để biết thêm thông tin hoặc yêu cầu về dự án, vui lòng đặt lịch hẹn để
          trao đổi trực tiếp.
        </p>
        <p className="flex flex-col">
          <strong className="text-mainblue">Tel:</strong>{" "}
          {thongtin[0]?.sdtchinh}
          <strong className="text-mainblue">Email:</strong> {thongtin[0]?.gmail}
        </p>
      </div>
    </div>
  );
};
