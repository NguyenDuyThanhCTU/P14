"use client";
import React, { Fragment } from "react";
import { Divider } from "antd";
import { AiOutlinePicture, AiOutlineInfoCircle } from "react-icons/ai";
import { useContext } from "react";
import moment from "moment";
import { AppContext, useData } from "../../Context/AppProvider";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

export default function HinhAnh() {
  const { sanpham, baiviet } = useData();
  const hinhAnh = (
    <div>
      <ImageList rowHeight={180}>
        {sanpham.map((data: any) => (
          <ImageListItem key={data.uid}>
            <img src={data.photoURL} alt={data.ten} />
            <ImageListItemBar
              title={data.ten}
              subtitle={
                <span>{moment.unix(data.createdAt).format("HH:MM DD/MM")}</span>
              }
              actionIcon={
                <IconButton aria-label={`info about ${data.ten}`}>
                  <AiOutlineInfoCircle />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
  const baiViet = (
    <div>
      <ImageList rowHeight={180}>
        {baiviet.map((data: any) => (
          <ImageListItem key={data.uid}>
            <img src={data.photoURL} alt={data.tieude} />
            <ImageListItemBar
              title={data.tieude}
              subtitle={
                <span>{moment.unix(data.createdAt).format("HH:MM DD/MM")}</span>
              }
              actionIcon={
                <IconButton aria-label={`info about ${data.tieude}`}>
                  <AiOutlineInfoCircle />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Hình
          ảnh
        </div>
        <Divider orientation="center">
          <div className="flex items-center text-lg font-bold text-blue-500">
            <AiOutlinePicture className="mr-2" /> QUẢN LÝ HÌNH ẢNH
          </div>
        </Divider>
      </div>
      <div className="m-5">
        <p className="m-5 font-bold text-xl">Ảnh sản phẩm :</p>
        {hinhAnh}
      </div>
      <div className="m-5">
        <p className="m-5 font-bold text-xl">Ảnh bài viết :</p>
        {baiViet}
      </div>
    </Fragment>
  );
}
