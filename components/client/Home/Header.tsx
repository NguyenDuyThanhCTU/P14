"use client";
import { useData } from "@Context/AppProvider";
import { useFE } from "@Context/FrontEndProvider";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Drawer } from "@mui/material";
import { Badge, Button, Input, message, Popover } from "antd";
import React, { Fragment, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu, GiPositionMarker } from "react-icons/gi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { SiGmail, SiZalo } from "react-icons/si";

export default function Header() {
  const { desktop, thongtin, router, setLoai, loaisanpham, setSearch } =
    useData();
  const { gioHang, setGiohang, setThanhToan } = useFE();
  const [checkXoa, setCheckxoa] = useState(false);
  const [open, setOpen] = useState(false);
  const [danhMuc, setDanhmuc] = useState(false);
  const giaTien = gioHang.map((data) => data.tongtien);
  // eslint-disable-next-line no-eval
  const tongtien = eval(giaTien.join("+"));
  function deleteByVal(uid: any) {
    for (let i = 0; i < gioHang.length; i++) {
      if (gioHang[i].uid === uid) {
        gioHang.splice(i, 1);
        break;
      }
    }
    return setGiohang(gioHang);
  }
  const tongHang = (
    <div>
      {tongtien === undefined ? (
        <div>
          <p className="text-center italic">
            Giỏ hàng của bạn hiện tại đang trống !
          </p>
        </div>
      ) : (
        <ul>
          {gioHang.map((data) => (
            <li
              key={data.uid}
              className="flex items-center justify-between py-2 px-5"
            >
              <div className="w-[50px] h-[50px]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                  src={data.photoURL}
                />
              </div>
              <div className="mx-5">
                <p className="text-green-700">
                  {data.ten}{" "}
                  <strong className="text-gray-500">{data.size}</strong>
                </p>
                <p className="text-red-500">
                  {data.gia.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
              <div>
                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    deleteByVal(data.uid);
                    setCheckxoa(!checkXoa);
                    message.error("Đã xoá sản phẩm...");
                  }}
                ></Button>
              </div>
            </li>
          ))}
          <p className="text-center font-bold text-xl text-red-500 border-t-2 border-dotted py-1">
            Tổng tiền :{" "}
            {tongtien?.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <div className="flex justify-center items-center">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500
      font-bold text-white w-full px-5 py-1 rounded-lg"
              onClick={() => setThanhToan(true)}
            >
              THANH TOÁN
            </button>
          </div>
        </ul>
      )}
    </div>
  );
  const danhmuc = (
    <ul className="bg-gray-800 text-white w-[70vw] h-full p-5">
      {loaisanpham?.map((data: any) => (
        <li
          key={data.uid}
          className="menu-li"
          onClick={() => {
            setOpen(false);
            setDanhmuc(false);
            setLoai(data.loai1);
            router.push("/loaisanpham");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        >
          {data.loai1}
        </li>
      ))}
    </ul>
  );
  const menu = (
    <ul className="bg-gray-800 text-white w-[70vw] h-full p-5">
      <li
        className="menu-li"
        onClick={() => {
          router.push("/");
          setTimeout(() => {
            window.scroll(0, 0);
          }, 1000);
        }}
      >
        Trang chủ
      </li>
      <li
        className="menu-li"
        onClick={() => {
          router.push("/gioithieu");
          setTimeout(() => {
            window.scroll(0, 0);
          }, 1000);
        }}
      >
        Giới thiệu
      </li>
      <li
        className="menu-li flex justify-between items-center"
        onClick={() => setDanhmuc(true)}
      >
        Danh mục sản phẩm <AiOutlineArrowRight />
      </li>
      <li
        className="menu-li"
        onClick={() => {
          router.push("/salesoff");
          setTimeout(() => {
            window.scroll(0, 0);
          }, 1000);
        }}
      >
        Sales off
      </li>
      <li
        className="menu-li"
        onClick={() => {
          router.push("/tintuc");
          setTimeout(() => {
            window.scroll(0, 0);
          }, 1000);
        }}
      >
        Tin tức
      </li>
      <li
        className="menu-li"
        onClick={() => {
          router.push("/lienhe");
          setTimeout(() => {
            window.scroll(0, 0);
          }, 1000);
        }}
      >
        Liên hệ
      </li>
    </ul>
  );
  const mobileHeader = (
    <div>
      <div className="bg-black text-white p-1 flex items-center">
        <GiPositionMarker size="28px" />
        {thongtin[0]?.diachi1}
      </div>
      <div className="bg-white p-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-2 rounded-lg"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
        <img
          className="w-[100px]"
          alt=""
          src={thongtin[0]?.logo}
          onClick={() => {
            router.push("/");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        />
        <div>
          <Popover placement="bottomLeft" trigger="click" content={tongHang}>
            <Badge
              color="blue"
              count={
                Object.keys(gioHang).length === 0
                  ? "O"
                  : Object.keys(gioHang).length
              }
              showZero={true}
            >
              <div className=" p-2 border border-dotted rounded-full border-black flex justify-center items-center">
                <RiShoppingBag3Fill className="text-[28px] text-black" />
              </div>
            </Badge>
          </Popover>
        </div>
      </div>
      <div className="bg-white p-2 flex">
        <Input
          prefix={<SearchOutlined />}
          className="rounded-l-lg p-1"
          placeholder="Tìm kiếm sản phẩm..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="primary"
          className="rounded-r-lg"
          onClick={() => {
            router.push("/search");
            window.scroll(0, 0);
          }}
        >
          Tìm
        </Button>
      </div>
    </div>
  );
  const desktopHeader = (
    <div className="bg-[#F0A122]">
      {/* <div className="bg-black p-2 flex justify-between items-center text-white">
        <p className="flex items-center">
          <GiPositionMarker className="mr-1" /> {thongtin[0]?.diachi1}
        </p>
        <p className="flex items-center">
          <SiGmail className="mr-1" /> {thongtin[0]?.gmail}
        </p>
      </div> */}
      <div className="px-10 text-[#8D6222] p-5 flex justify-between items-center">
        <img className="w-[80px]" alt="" src={thongtin[0]?.logo} />
        <div className="bg-white w-1/4 flex">
          <Input
            prefix={<SearchOutlined />}
            className="rounded-l-lg p-1"
            placeholder="Tìm kiếm sản phẩm..."
            onChange={(e) => setSearch(e.target.value)}
            onPressEnter={() => {
              router.push("/search");
              window.scroll(0, 0);
            }}
          />
          <Button
            type="primary"
            className="rounded-r-lg"
            onClick={() => {
              router.push("/search");
              window.scroll(0, 0);
            }}
          >
            Tìm
          </Button>
        </div>
        <div className="flex justify-around items-center">
          <div
            className="p-2 border border-dotted rounded-full border-black flex justify-center items-center mr-3"
            onClick={() => window.open(`${thongtin[0]?.fanpage}`)}
          >
            <BsFacebook className="text-[28px] text-black" />
          </div>
          <div
            className="p-2 border border-dotted rounded-full border-black flex justify-center items-center mr-3"
            onClick={() => window.open(`https://zalo.me/${thongtin[0]?.zalo}`)}
          >
            <SiZalo className="text-[28px] text-black" />
          </div>
          <div>
            <Popover placement="bottomLeft" trigger="click" content={tongHang}>
              <Badge
                color="blue"
                count={
                  Object.keys(gioHang).length === 0
                    ? "O"
                    : Object.keys(gioHang).length
                }
                showZero={true}
              >
                <div className=" p-2 border border-dotted rounded-full border-black flex justify-center items-center">
                  <RiShoppingBag3Fill className="text-[28px] text-black" />
                </div>
              </Badge>
            </Popover>
          </div>
        </div>
        {/* <div className="flex">
          <div className="p-2 border border-dotted border-black flex justify-center items-center mr-2">
            <FiPhoneCall className="text-[28px] text-black" />
          </div>
          <div>
            <p>Hotline</p>
            <p className="font-bold text-xl text-decor">
              {thongtin[0]?.sdtchinh.replace(
                /(\d{3})(\d{3})(\d{4})/,
                "$1 $2 $3"
              )}
            </p>
          </div>
        </div> */}
      </div>
      <ul className="flex ml-[80px] bg-black">
        <li className="menu-li-desktop flex justify-start items-center font-bold">
          <GiHamburgerMenu className="p-1 bg-white text-[20px] rounded-full text-black mr-2" />{" "}
          DANH MỤC SẢN PHẨM
        </li>
        <li
          className="menu-li-desktop"
          onClick={() => {
            router.push("/");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        >
          TRANG CHỦ
        </li>
        <li
          className="menu-li-desktop"
          onClick={() => {
            router.push("/gioithieu");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        >
          GIỚI THIỆU
        </li>
        <li
          className="menu-li-desktop"
          onClick={() => {
            router.push("/salesoff");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        >
          SALES OFF
        </li>
        <li
          className="menu-li-desktop"
          onClick={() => {
            router.push("/tintuc");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        >
          TIN TỨC
        </li>
        <li
          className="menu-li-desktop"
          onClick={() => {
            router.push("/lienhe");
            setTimeout(() => {
              window.scroll(0, 0);
            }, 1000);
          }}
        >
          LIÊN HỆ
        </li>
      </ul>
    </div>
  );
  return (
    <Fragment>
      <div>{desktop ? desktopHeader : mobileHeader}</div>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {menu}
      </Drawer>
      <Drawer open={danhMuc} anchor="right" onClose={() => setDanhmuc(false)}>
        {danhmuc}
      </Drawer>
    </Fragment>
  );
}
