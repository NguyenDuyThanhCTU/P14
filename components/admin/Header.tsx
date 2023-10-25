"use client";
import { Drawer, Button } from "@mui/material";
import { Avatar, Badge, Input, Popover } from "antd";
import React, { Fragment, useState } from "react";
import { useContext } from "react";
import {
  AiOutlineAreaChart,
  AiOutlineAudit,
  AiOutlineComment,
  AiOutlineMenuUnfold,
  AiOutlinePicture,
  AiOutlineSetting,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiNews, BiSearchAlt } from "react-icons/bi";
import { FaKeycdn } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import {
  MdNotifications,
  MdOutlineAccountCircle,
  MdOutlineSupportAgent,
  MdVideoSettings,
} from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { AppContext } from "../../Context/AppProvider";
import { BsMenuButtonWideFill } from "react-icons/bs";

export default function Header() {
  const { desktop, setComponentSelect } = useContext(AppContext);
  const [drawerMenu, setDrawerMenu] = useState(false);
  const menu = (
    <div className="px-5 py-3 shadow-lg flex justify-between items-center text-blue-700 cursor-pointer">
      <div>
        {desktop ? (
          <div className="flex items-center justify-center">
            <Button
              onClick={() => setDrawerMenu(true)}
              variant="contained"
              className="text-lg"
              startIcon={<AiOutlineMenuUnfold />}
            >
              DANH MỤC QUẢN LÝ
            </Button>
            <Button className="text-lg" startIcon={<MdOutlineSupportAgent />}>
              SUPPORT
            </Button>
          </div>
        ) : (
          <AiOutlineMenuUnfold
            size={"24px"}
            onClick={() => setDrawerMenu(true)}
          />
        )}
      </div>
      <div className="flex items-center w-1/2">
        <Input
          className="rounded-lg"
          prefix={<BiSearchAlt className="text-blue-700" />}
          placeholder="Tìm kiếm..."
        />
      </div>
      <div className="flex items-center justify-center">
        <Badge count={3}>
          <Popover placement="bottomLeft" content="Bạn có 3 thông báo mới !">
            <MdNotifications className="text-blue-700" size="24px" />
          </Popover>
        </Badge>
        <Avatar
          className="ml-5"
          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
        />
      </div>
    </div>
  );
  const drawerContent = (
    <ul className="mb-5 md:w-[300px]">
      <li className="text-center text-white font-bold text-xl p-3 bg-blue-500">
        DANH MỤC
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("cauhinhchung");
          setDrawerMenu(false);
        }}
      >
        <AiOutlineSetting className="mr-2" /> Cấu hình chung
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("slidershow");
          setDrawerMenu(false);
        }}
      >
        <AiOutlinePicture className="mr-2" /> Slidershow
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("sanpham");
          setDrawerMenu(false);
        }}
      >
        <AiOutlineShoppingCart className="mr-2" /> Sản phẩm
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("loaisanpham");
          setDrawerMenu(false);
        }}
      >
        <BsMenuButtonWideFill className="mr-2" />
        Phân loại sản phẩm
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("donhang");
          setDrawerMenu(false);
        }}
      >
        <RiBillLine className="mr-2" /> Đơn hàng
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("doanhthu");
          setDrawerMenu(false);
        }}
      >
        <AiOutlineAreaChart className="mr-2" /> Doanh thu
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("baiviet");
          setDrawerMenu(false);
        }}
      >
        <BiNews className="mr-2" /> Bài viết
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("tintuc");
          setDrawerMenu(false);
        }}
      >
        <ImNewspaper className="mr-2" /> Tin tức
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("hinhanh");
          setDrawerMenu(false);
        }}
      >
        <AiOutlinePicture className="mr-2" /> Hình ảnh
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("video");
          setDrawerMenu(false);
        }}
      >
        <MdVideoSettings className="mr-2" /> Video
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("danhgia");
          setDrawerMenu(false);
        }}
      >
        <AiOutlineComment className="mr-2" /> Bình luận, Đánh giá
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("cauhoi");
          setDrawerMenu(false);
        }}
      >
        <AiOutlineQuestionCircle className="mr-2" /> Câu hỏi
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("phanhoi");
          setDrawerMenu(false);
        }}
      >
        <AiOutlineUser className="mr-2" /> Khách hàng phản hồi
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("SEOtukhoa");
          setDrawerMenu(false);
        }}
      >
        <FaKeycdn className="mr-2" /> SEO từ khoá
      </li>
      <li
        className="menu-li-be"
        onClick={() => {
          setComponentSelect("taikhoan");
          setDrawerMenu(false);
        }}
      >
        <MdOutlineAccountCircle className="mr-2" /> Tài khoản
      </li>
      <li className="menu-li-be">
        <AiOutlineAudit className="mr-2" /> Hướng dẫn
      </li>
      <li className="menu-li-be">
        <MdOutlineSupportAgent className="mr-2" /> Liên hệ hỗ trợ
      </li>
    </ul>
  );
  return (
    <>
      <div className="fixed w-[100vw] z-50 top-0 right-0 left-0 bg-white">
        {menu}
      </div>
      <div>
        <Drawer
          anchor="left"
          open={drawerMenu}
          onClose={() => setDrawerMenu(false)}
        >
          {drawerContent}
        </Drawer>
      </div>
    </>
  );
}
