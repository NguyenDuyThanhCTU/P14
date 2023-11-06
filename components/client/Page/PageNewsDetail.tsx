"use client";
import React, { useEffect, useState } from "react";
import Category from "../Items/Category";
import { useData } from "@Context/AppProvider";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import moment from "moment";
import { useParams } from "next/navigation";

const PageNewsDetail = () => {
  const [Data, setData] = useState<any>([]);
  const { tintuc } = useData();
  const datatintuc = tintuc.map((data: any) => data).reverse();

  const params: any = useParams();
  let decodedParam = decodeURIComponent(params.slug);

  useEffect(() => {
    const sort = datatintuc.filter((item: any) => item.tieude === decodedParam);
    setData(sort);
  }, [params]);

  const DetailPostDate = moment
    .unix(Data[0]?.createdAt.seconds)
    .format("MMMM DD, YYYY");
  const markup = { __html: Data[0]?.editor };

  return (
    <div className="py-5 p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
      {" "}
      <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <Category Data={Data} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className=" pb-5 border-b flex flex-col gap-4">
          <h3 className="text-[#333333] text-[34px] font-normal">
            {" "}
            {Data[0]?.tieude}{" "}
          </h3>
          <div className="flex gap-5">
            <div className="uppercase p-1 text-blue-500 border border-blue-500 ">
              Tin tức
            </div>
            <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
              <AiOutlineClockCircle />
              <p className="">{DetailPostDate}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <AiOutlineUser />
              <p className=""> thuysanthienngoc</p>
            </div>
          </div>
        </div>
        {markup && (
          <div
            className="font-LexendDeca font-extralight py-5 flex flex-col gap-2"
            dangerouslySetInnerHTML={markup}
          ></div>
        )}
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <Category Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default PageNewsDetail;
