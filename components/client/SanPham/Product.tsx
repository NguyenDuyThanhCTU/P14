"use client";
import React from "react";
import SanPham from "./SanPham";
import { useData } from "@Context/AppProvider";

const Product = ({ topic }: any) => {
  const { sanpham, router } = useData();

  const dataloai = sanpham.filter((data: any) => data.loai1 === topic);

  return (
    <>
      <div className="bg-[url(https://pics.freeartbackgrounds.com/fullhd/Azure_Blue_Sea_Background-775.jpg)]  border-b">
        <div className="p-2 bg-gradient-to-tr rounded-lg">
          <div className="flex justify-center items-center p-3">
            <p className="md:text-3xl text-xl italic text-white font-extrabold">
              {topic}
            </p>
          </div>

          <SanPham sanpham={dataloai} />
          <div className="flex justify-center items-center m-3">
            <button
              className="text-white py-2 px-5 bg-red-500 rounded-lg font-bold text-xl"
              onClick={() => {
                router.push("/tatcasanpham");
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 1000);
              }}
            >
              XEM TẤT CẢ...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
