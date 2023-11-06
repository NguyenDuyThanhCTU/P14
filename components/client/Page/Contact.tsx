"use client";
import { useData } from "@Context/AppProvider";
import React from "react";

const Contact = () => {
  const { thongtin } = useData();
  return (
    <div>
      <div className="w-[1600px] mx-auto grid grid-cols-2 gap-5 font-LexendDeca font-extralight">
        <div className="h-screen w-full border-r">
          <iframe src={thongtin[0]?.map} className="h-full w-[80%]">
            {" "}
          </iframe>
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            <h1 className="text-[26px] font-bold">Liên hệ</h1>
            <div className="w-10 h-1 bg-black"></div>
          </div>

          <div className="mt-5 flex flex-col gap-5">
            <div>
              <h2>Địa chỉ chúng tôi</h2>
              <p className="font-semibold">{thongtin[0]?.diachi1}</p>
            </div>
            <div>
              <h2>Email chúng tôi</h2>
              <p className="font-semibold">{thongtin[0]?.gmail}</p>
            </div>
            <div>
              <h2>Điện thoại</h2>
              <p className="font-semibold">{thongtin[0]?.sdtchinh}</p>
            </div>
            <div>
              <h2>websitec</h2>
              <p className="font-semibold">{thongtin[0]?.tenmien}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
