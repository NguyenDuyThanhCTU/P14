"use client";
import moment from "moment";
import React, { Fragment } from "react";
import { useData } from "@Context/AppProvider";
import ThemSanPham from "../SanPham/ThemSanPham";
import SliderShow from "../Home/SliderShow";
import ThanhToan from "../Home/ThanhToan";

export default function ChiTietBaiViet() {
  const { baiviet, baivietSelected, setUid, router } = useData();

  const chiTiet = (
    <div className="m-5 md:flex md:justify-around md:items-start">
      <div className="p-2 md:w-[60vw] shadow-lg border rounded-lg m-2">
        <div
          dangerouslySetInnerHTML={{ __html: baivietSelected[0]?.editor }}
        ></div>
      </div>
      <div className="p-2 md:w-[30vw] shadow-lg border rounded-lg m-2">
        <p className="text-center text-2xl font-extrabold italic text-orange-500">
          TIN TỨC TƯƠNG TỰ
        </p>
        <div className=" flex flex-wrap justify-around items-center">
          {baiviet.map((data: any) => (
            <div
              className="flex flex-col cursor-pointer m-2"
              onClick={() => {
                setUid(data.uid);
                router.push("/chitietbaiviet");
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 1000);
              }}
            >
              <img className="rounded-md" alt="" src={data.photoURL} />
              <p className="active:text-blue-500 px-5 text-center font-bold text-lg">
                {data.tieude}
              </p>{" "}
              <p className="italic text-red-500 text-[12px] text-center">
                Ngày đăng : {moment.unix(data.createdAt).format("DD/MM HH:MM")}{" "}
                by Admin
              </p>
              <p className="italic text-sm px-5 text-center">"{data.phude}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div className="">
        <SliderShow />
        <div>{chiTiet}</div>
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
