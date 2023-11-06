"use client";
import React, { Fragment } from "react";
import Header from "../Home/Header";
import moment from "moment";
import Link from "next/link";
import ThanhToan from "../Home/ThanhToan";
import { useData } from "@Context/AppProvider";
import Category from "@components/client/Items/Category";

export default function PageTinTuc() {
  const { tintuc } = useData();
  const datatintuc = tintuc.map((data: any) => data).reverse();
  return (
    <>
      <div className="border h-max border-gray-400 d:block p:hidden col-span-2 ">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <Category Data={datatintuc} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className="font-LexendDeca font-extralight ">
          <h1 className="text-[28px] font-semibold">Tin tức</h1>
          <div className="flex flex-col gap-8">
            {datatintuc.map((item: any, idx: number) => {
              const DetailPostDate = moment
                .unix(item?.createdAt.seconds)
                .format("MMMM DD, YYYY");
              const content = item?.editor;
              const maxLength = 200;

              const truncatedContent = content
                ? content.substring(0, maxLength)
                : "";

              const markup = { __html: truncatedContent };
              return (
                <div key={idx} className="hover:bg-gray-100 duration-300">
                  <div className="grid grid-cols-3 gap-5 p-2">
                    <Link href={`/chi-tiet-bai-viet/${item.tieude}`}>
                      <div className="w-full overflow-hidden">
                        <img
                          src={item.photoURL}
                          alt="news"
                          className="w-full h-full hover:scale-110 duration-300"
                        />
                      </div>
                    </Link>
                    <div className="col-span-2">
                      <Link href={`/chi-tiet-bai-viet/${item.tieude}`}>
                        <h2 className=" text-[22px] font-semibold hover:text-blue-400 duration-300">
                          {item.tieude}
                        </h2>
                        <p className="text[15px] text-gray-400">
                          {DetailPostDate}
                        </p>
                      </Link>

                      <div
                        dangerouslySetInnerHTML={markup}
                        className="truncate2 text-[14px] mt-2"
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <Category Data={datatintuc} />
        </div>
      </div>
    </>
  );
}
