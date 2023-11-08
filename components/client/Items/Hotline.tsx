"use client";
import { useData } from "@Context/AppProvider";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Hotline = () => {
  const { thongtin } = useData();
  console.log(thongtin);
  return (
    <div className="flex flex-col gap-1 text-[45px] cursor-pointer">
      <div
        className="border shadow-md bg-white p-1 rounded-md"
        onClick={() => window.open(`https://${thongtin[0].fanpage}`)}
      >
        <AiFillFacebook className="text-blue-500" />
      </div>
      <div
        className="border shadow-md bg-white p-1 rounded-md"
        onClick={() => window.open(`https://${thongtin[0].Tiktok}`)}
      >
        <FaTiktok className="p-1 bg-black text-white" />
      </div>
      <div
        className="border shadow-md bg-white p-1 rounded-md"
        onClick={() => window.open(`https://${thongtin[0].zalo}`)}
      >
        <SiZalo className="p-1 text-blue-500" />
      </div>
      <div
        className="border shadow-md bg-white p-1 rounded-md"
        onClick={() => window.open(`https://${thongtin[0].messenger}`)}
      >
        <BsMessenger className="p-1 bg-blue-500 text-white" />
      </div>
    </div>
  );
};

export default Hotline;
