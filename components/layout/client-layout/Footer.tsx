"use client";
import { PolicyTopics } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  const { ContactData } = useData();
  return (
    <>
      <div className="grid gap-4 p:grid-cols-2 d:grid-cols-6 p:w-auto d:w-[1300px] p:mx-2 d:mx-auto font-LexendDeca font-extralight py-10">
        <div className="col-span-2">
          <h2 className="text-[18px] font-normal">
            ALPHA SMART - Nhà Công Nghệ
          </h2>
          <div className="mt-4 flex flex-col text-[14px]">
            <p>
              ALPHA SMART - Nhà Công Nghệ Chuyên các loại khóa cửa điện tử, khóa
              cổng vân tay, chuông cửa màn hình.
            </p>
            <div>
              <img
                src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[18px] font-normal">Liên kết</h2>
          <div className="mt-4 flex flex-col text-[14px] gap-2">
            {PolicyTopics.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={`/bai-viet/${item.value}`}
                className="hover:text-blue-400 duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[18px] font-normal">Thông tin liên hệ</h2>
          <div className="mt-4 flex flex-col gap-2 text-[14px]">
            <div className=" flex gap-3">
              <div className="flex mt-1">
                <IoLocation className="" />
              </div>
              <span>{ContactData.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <GiRotaryPhone />
              <p>{ContactData.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <BiLogoTelegram />
              <p>{ContactData.gmail}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-[18px] font-normal">Fanpage</h2>
          <div className="h-52 overflow-hidden mt-4">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdichvuquangcaotrongoicantho%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
