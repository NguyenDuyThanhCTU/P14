"use client";
import React, { Fragment } from "react";

import { useData } from "@Context/AppProvider";
import SanPham from "../SanPham/SanPham";
import ThemSanPham from "../SanPham/ThemSanPham";
import ThanhToan from "../Home/ThanhToan";
import { Popover } from "antd";
import { IoFishSharp } from "react-icons/io5";
import SliderShow from "../Home/SliderShow";

export default function PageSanPham() {
  const {
    sanpham,
    sanphamtheoloai1,
    sanphamtheoloai2,
    loaisanpham,
    setUid,
    router,
    setLoai,
  } = useData();
  const datasanpham = sanpham.map((data: any) => data).reverse();
  const dataloai = loaisanpham.map((data: any) => data).reverse();
  const tensanpham = (
    <>
      <ul className="max-w-[60vw] cursor-pointer">
        {sanphamtheoloai2?.map((data: any) => (
          <li
            key={data}
            className="flex justify-start items-center font-bold py-2 px-5 italic hover:bg-gray-200 hover:rounded-md
                border-b border-dotted hover:text-red-500"
            onClick={() => {
              setUid(data.uid);
              setLoai(data.loai1);
              router.push(`/san-pham/${data.loai1}/${data.uid}`);
              setTimeout(() => {
                window.scroll(0, 0);
              }, 1000);
            }}
          >
            <IoFishSharp className="mr-5" /> {data.ten.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
  const sanphamloai1 = (
    <>
      <ul className="max-w-[60vw] cursor-pointer">
        {sanphamtheoloai1[0]?.loai2?.map((data: any) => (
          <Popover key={data.uid} placement="rightTop" content={tensanpham}>
            <li
              key={data}
              className="flex justify-start items-center font-bold py-2 px-5 italic hover:bg-gray-200 hover:rounded-md
                border-b border-dotted hover:text-red-500"
              onClick={() => {
                setUid(data.uid);
                setLoai(data);
                router.push("/loaisanpham");
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 1000);
              }}
            >
              <IoFishSharp className="mr-5" /> {data.toUpperCase()}
            </li>
          </Popover>
        ))}
      </ul>
    </>
  );

  return (
    <Fragment>
      <div className="web-bg">
        <SliderShow />

        <div className="flex">
          <div className="flex-[20%] mt-5 ml-5">
            <h2 className="font-bold uppercase text-[30px] pb-2 border-b border-black">
              Danh mục sản phẩm
            </h2>
            <div className="  w-max overflow-y-auto mt-5  ">
              <ul className="w-max">
                {dataloai.map((data: any) => (
                  <Popover
                    key={data.uid}
                    placement="rightTop"
                    content={sanphamloai1}
                  >
                    <li
                      className="flex justify-start items-center font-bold py-2 px-5 italic hover:bg-gray-200 hover:rounded-md
                border-b border-dotted hover:text-red-500"
                      onMouseEnter={() => setLoai(data.loai1)}
                      onClick={() => {
                        setLoai(data.loai1);
                        router.push("/loaisanpham");
                        setTimeout(() => {
                          window.scroll(0, 600);
                        }, 1000);
                      }}
                    >
                      <IoFishSharp className="mr-5" />{" "}
                      {data.loai1?.toUpperCase()}
                    </li>
                  </Popover>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-[80%]">
            <SanPham sanpham={datasanpham} />
          </div>
        </div>
        <ThemSanPham />
        <ThanhToan />
      </div>
    </Fragment>
  );
}
