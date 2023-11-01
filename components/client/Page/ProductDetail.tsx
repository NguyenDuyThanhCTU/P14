"use client";
import { useEffect, useState } from "react";

import { Image, Skeleton, Tabs } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FiPhoneCall } from "react-icons/fi";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FacebookProvider, Comments } from "react-facebook";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useData } from "@Context/AppProvider";
import { useFE } from "@Context/FrontEndProvider";
import { Button } from "@mui/material";

const ProductDetail = () => {
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

  const items: any = [
    // {
    //   key: "1",
    //   label: "Chi tiết sản phẩm",
    //   children: (
    //     <>
    //       <h3 className="text-[24px] font-semibold ">Chi tiết sản phẩm</h3>
    //       <div
    //         className=""
    //         dangerouslySetInnerHTML={{ __html: sanphamSelected[0]?.editor }}
    //       ></div>
    //     </>
    //   ),
    // },
    // {
    //   key: "2",
    //   label: "Bình luận",
    //   children: (
    //     <>
    //       <div className="w-[778px]">
    //         <FacebookProvider appId="781034490143336">
    //           {" "}
    //           <Comments
    //             href="https://khogachcaocaptinphat.com"
    //             width={778}
    //           />{" "}
    //         </FacebookProvider>
    //       </div>
    //     </>
    //   ),
    // },
  ];
  return (
    <div className="flex flex-col gap-5  d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
      <div>
        <div className="flex d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
          {sanphamSelected.map((data: any, idx: number) => (
            <div key={idx}>
              <div className="flex-[40%] rounded-lg d:h-max p:h-auto overflow-hidden">
                <Image.PreviewGroup>
                  <Image
                    className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                    src={data?.photoURL}
                  />
                </Image.PreviewGroup>
              </div>
              <div className="flex-[70%] flex flex-col gap-5">
                <div>
                  <h3 className="text-[26px] uppercase">{data?.ten}</h3>
                  <div className="bg-black w-24 h-1"></div>
                </div>
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

                {/* <div className="py-4 border-t border-b w-full font-light">
                  <h3>Mô tả</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.describe }}
                  ></div>
                </div> */}
                <div className="flex gap-3 items-center font-light">
                  <span className="">
                    Lượt xem {Math.floor(Math.random() * 1000) + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
          <div className="d:px-16 py-5 p:px-2 border col-span-3">
            <Tabs
              defaultActiveKey="1"
              //   items={items}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>

          <div className="col-span-1">
            <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
              Sản phẩm liên quan
            </h3>
            <div>
              {sanphamtheoloai1?.map((item: any, idx: number) => (
                <Link href={`/chi-tiet-san-pham/${item.url}`}>
                  <div className="flex gap-3 py-3 border-b" key={idx}>
                    <div className="flex-[30%]">
                      <img src={item.image} alt="similarProduct" />
                    </div>
                    <div className="flex-[60%]">
                      <h3 className="truncate1">{item.title}</h3>
                      <h3 className="text-mainred text-[18px] font-bold">
                        {item.price}
                      </h3>
                      <div className="flex">
                        <div className="py-1 px-4 bg-mainred text-white flex gap-2 items-center text-[15px]">
                          <FiPhoneCall />
                          <span>Liên hệ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
