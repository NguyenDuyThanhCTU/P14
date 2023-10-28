"use client";
import { useData } from "@Context/AppProvider";
import { useFE } from "@Context/FrontEndProvider";
import { Button } from "@mui/material";
import { Badge } from "antd";
import { useParams } from "next/navigation";
import React, { Fragment, useContext } from "react";
import { RiShoppingCartFill } from "react-icons/ri";

import Header from "../Home/Header";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import ThanhToan from "../Home/ThanhToan";
import DanhGia from "../Home/DanhGia";
import CauHoi from "../Home/CauHoi";
import Footer from "../Home/Footer";
import Baiviet from "../Home/BaiViet";

export default function ChiTietSanPham() {
  const { setUid, setLoai, router, sanpham } = useData();
  const params: any = useParams();
  const decodedCategory: any = decodeURIComponent(params.category);

  const sanphamSelected = sanpham.filter((obj: any) => {
    return obj.uid === params.item;
  });
  const sanphamtheoloai1 = sanpham.filter((obj: any) => {
    return obj.loai1 === decodedCategory;
  });
  const { setThemSanpham } = useFE();
  const chiTiet = (
    <div className="m-5 md:flex md:justify-around md:items-start">
      <div className="p-2 md:w-[60vw] shadow-lg border rounded-lg m-2">
        {sanphamSelected.map((data: any) => (
          <div key={data.uid}>
            <p className="text-center text-2xl font-extrabold italic text-black">
              {data.ten}
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-red-500 text-xl font-bold">
                {Number(data.gia).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              {data.giamgia !== undefined && (
                <p className="line-through">
                  Giá gốc :
                  {Number(
                    (data.gia * 15) / 100 + Number(data.gia)
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              )}
              <Button
                variant="contained"
                className=""
                onClick={() => {
                  setThemSanpham(true);
                  setUid(data.uid);
                }}
              >
                THÊM VÀO GIỎ
              </Button>
              <img
                className="w-full m-5 rounded-md"
                alt=""
                src={data.photoURL}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 md:w-[30vw] shadow-lg border rounded-lg m-2">
        <p className="text-center text-2xl font-extrabold italic text-red-500 my-3">
          SẢN PHẨM TƯƠNG TỰ
        </p>
        <div className=" flex flex-wrap justify-around items-center">
          <SanPham sanpham={sanphamtheoloai1} />
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div className="web-bg">
        <div>{chiTiet}</div>
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
