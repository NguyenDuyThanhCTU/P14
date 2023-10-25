"use client";
import { useData } from "@Context/AppProvider";
import { Popover } from "antd";
import React, { Fragment, useContext } from "react";
import { IoFishSharp } from "react-icons/io5";

export default function SliderShow() {
  const {
    slidershow,
    desktop,
    loaisanpham,
    sanphamtheoloai1,
    setLoai,
    setUid,
    router,
  } = useData();
  const dataloai = loaisanpham.map((data: any) => data).reverse();
  const mobileSlider = (
    <div className="m-2">
      {slidershow.map((data: any) => (
        <img
          className=""
          hidden={!data.status}
          key={data.uid}
          alt=""
          src={data.photoURL}
        />
      ))}
    </div>
  );
  const sanPhamLoai = (
    <ul className="max-w-[60vw] cursor-pointer">
      {sanphamtheoloai1?.map((data: any) => (
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
  );
  const desktopSlider = (
    <div className="flex justify-start items-center cursor-pointer">
      <div className="ml-[80px] h-[500px] bg-white overflow-y-scroll">
        <ul className="w-[20vw]">
          {dataloai.map((data: any) => (
            <Popover key={data.uid} placement="rightTop" content={sanPhamLoai}>
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
                <IoFishSharp className="mr-5" /> {data.loai1?.toUpperCase()}
              </li>
            </Popover>
          ))}
        </ul>
      </div>
      <div className="h-[500px]">
        {slidershow.map((data: any) => (
          <img
            className="h-full object-cover"
            hidden={!data.status}
            key={data.uid}
            alt=""
            src={data.photoURL}
          />
        ))}
      </div>
    </div>
  );
  return (
    <Fragment>
      <div>{desktop ? desktopSlider : mobileSlider}</div>
    </Fragment>
  );
}
