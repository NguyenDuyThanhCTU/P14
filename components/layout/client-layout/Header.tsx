"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import {
  AiFillCaretRight,
  AiOutlineDown,
  AiOutlineMail,
  AiOutlineRight,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";

const Header = () => {
  const { productTypes, TradeMarkData, ContactData, CartItems } = useData();
  const { setOpenCart, OpenCart } = useStateProvider();

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const SupportItems = [
    {
      label: "Hướng dẫn sử dụng",
      value: "huong-dan-su-dung",
    },
    {
      label: "Catalogue sản phẩm",
      value: "catalogue-san-pham",
    },
  ];
  return (
    <div className="shadow-xl">
      <div className="bg-blue-400 py-1 h-[30px] w-full text-white text-[14px] flex justify-center items-center">
        Miễn phí vận chuyển với đơn hàng trên 1.000.000
      </div>
      <div className="w-[1300px] mx-auto d:block p:hidden">
        <div className=" w-full py-5   flex justify-between items-center ">
          <div></div>
          <div className="">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="h-[70px]"
            />
          </div>
          <div className="text-[30px] flex gap-2">
            <AiOutlineSearch />
            <div
              className="text-[24px] relative cursor-pointer"
              onClick={() => setOpenCart(!OpenCart)}
            >
              <div className=" p-1">
                <AiOutlineShoppingCart className="text-[22px] text-black" />
              </div>
              <div className="text-redPrimmary rounded-full bg-white text-[14px]  absolute -bottom-2 -right-2 flex items-center justify-center border w-5 h-5">
                <span> {CartItems.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  gap-8 w-full justify-center font-LexendDeca font-extralight">
          {HeaderItems.map((item: any, idx: number) => (
            <div className="relative group/main " key={idx}>
              <Link
                className="hover:text-blue-400 duration-300 flex items-center gap-2 font-light"
                href={`/${item.link}`}
              >
                <p> {item.name}</p>
                {(item.name === "Hỗ trợ" ||
                  item.name === "Danh mục sản phẩm") && (
                  <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300" />
                )}
              </Link>
              <div className="h-[2px] bg-gray-400 w-0 group-hover/main:w-full duration-300 mt-3 "></div>
              {item.name === "Hỗ trợ" && (
                <div className="flex flex-col top-5 absolute">
                  <div className="bg-none w-full h-4"></div>
                  <div className=" top-9 hidden group-hover/main:block duration-300">
                    <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                      {SupportItems.map((items: any, idx: number) => (
                        <Link
                          key={idx}
                          href={`/bai-viet/${items.value}`}
                          className="w-max  border-b"
                        >
                          <p className="py-2 px-2 hover:text-blue-400 duration-300 ">
                            {" "}
                            {items.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {item.name === "Danh mục sản phẩm" && (
                <div className="flex flex-col top-5 absolute z-50">
                  <div className="bg-none w-full h-4"></div>
                  <div className=" top-9 hidden group-hover/main:block duration-300">
                    <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                      {TypeProductItems.map((items: any, idx: number) => {
                        const sort = productTypes.filter(
                          (item: any) => item.parentUrl === items.value
                        );

                        return (
                          <div
                            key={idx}
                            className=" group/lv1 relative  border-b"
                          >
                            <Link
                              href={`/san-pham/${items.value}`}
                              className="  border-b"
                            >
                              <div className="py-2 px-4 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                {" "}
                                <p className="w-max"> {items.label}</p>
                                {sort.length > 0 && (
                                  <AiFillCaretRight
                                    className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                  />
                                )}
                              </div>
                            </Link>

                            {sort.length > 0 && (
                              <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                <div className="">
                                  {sort.map((items: any, idx: number) => (
                                    <div key={idx}>
                                      <div className=" group/lv2    relative font-light     border-b">
                                        <Link
                                          href={`${`/san-pham/${items.typeUrl}`}`}
                                        >
                                          <div className="py-2 px-4 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                            <p>{items.type}</p>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="d:hidden p:block w-full  font-LexendDeca font-extralight ">
        <div className="flex justify-between px-2 items-center">
          <div className="flex">
            <div className="p-1">
              <FaListUl
                className="text-[22px] text-black"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
          <Link href={`/`} className="">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="h-[70px]"
            />
          </Link>
          <div
            className="text-[24px] relative cursor-pointer"
            onClick={() => setOpenCart(!OpenCart)}
          >
            <div className=" p-1">
              <AiOutlineShoppingCart className="text-[22px] text-black" />
            </div>
            <div className="text-redPrimmary rounded-full bg-white text-[14px]  absolute -bottom-2 -right-2 flex items-center justify-center border w-5 h-5">
              <span> {CartItems.length}</span>
            </div>
          </div>
        </div>
      </div>
      <>
        <Drawer
          placement="left"
          onClose={() => setOpen(false)}
          closable={false}
          open={open}
          width={300}
        >
          <div className="bg-white text-black  ">
            <div className="flex  justify-center  ">
              <img
                src={TradeMarkData.websiteLogo}
                alt="logo"
                className="h-[70px]"
              />
            </div>
            <div className="flex flex-col ">
              {HeaderItems.slice(1).map((items: any, idx: any) => (
                <div key={idx}>
                  <div className="flex justify-between w-full  border-t items-center">
                    <Link
                      className=" py-2 uppercase"
                      href={`/${items.link}`}
                      key={idx}
                      onClick={() => setOpen(false)}
                    >
                      {items.name}
                    </Link>
                    {items.name === "Hỗ trợ" && (
                      <AiOutlineRight
                        className={`${
                          show ? "rotate-90" : "rotate-0"
                        } text-[10px]  duration-300`}
                        onClick={() => setShow(!show)}
                      />
                    )}
                  </div>

                  {items.name === "Hỗ trợ" && (
                    <div
                      className={`${
                        show ? "h-[74px]" : "h-0"
                      } duration-300 overflow-hidden`}
                    >
                      {SupportItems.map((items: any, idx: number) => (
                        <Link
                          onClick={() => setOpen(false)}
                          key={idx}
                          href={`/bai-viet/${items.value}`}
                          className={` w-full  border-t  `}
                        >
                          <p className="py-2 px-2 hover:text-blue-400 duration-300 ">
                            {" "}
                            {items.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col py-2 border-t gap-5">
              <h2 className="uppercase font-normal">Bạn cần hỗ trợ?</h2>
              <div className="flex gap-5 items-center font-medium ">
                <TbPhoneCall className="text-[24px] " />
                <p>Liên hệ: {ContactData.phone}</p>
              </div>
              <div className="flex gap-5 items-center font-medium">
                <AiOutlineMail className="text-[24px] " />

                <p>{ContactData.gmail}</p>
              </div>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
