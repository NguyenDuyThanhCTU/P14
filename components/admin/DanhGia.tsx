"use client";
import { Button, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Popconfirm, Rate } from "antd";
import moment from "moment";
import React, { Fragment, useContext, useState } from "react";
import { AiFillDelete, AiOutlineComment } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import {
  delAllDocument,
  delDocument,
  updDocument,
} from "../../firebase/services";
import { AppContext } from "./../../Context/AppProvider";

export default function DanhGia() {
  const { uid, setUid, danhgia, thongbaoSucess } = useContext(AppContext);
  const [status, setStatus] = useState();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "ten", headerName: "Họ và tên", width: 150 },
    { field: "sdt", headerName: "Số điện thoại", width: 150 },
    { field: "sanpham", headerName: "Sản phẩm", width: 150 },
    { field: "noidung", headerName: "Nội dung", width: 250 },
    {
      field: "sao",
      headerName: "Số sao",
      width: 180,
      renderCell: (params: any) => (
        <Rate allowHalf disabled defaultValue={params.value} />
      ),
    },
    { field: "createdAt", headerName: "Ngày", width: 120 },
    { field: "status", headerName: "Trạng thái", width: 120 },
    {
      field: "thaotac",
      headerName: "Thao tác",
      width: 200,
      renderCell: (params: any) => (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setUid(params.value.uid);
            setStatus(params.value.status);
          }}
        >
          <Popconfirm
            title="Xác nhận ẩn nội dung này ?"
            onConfirm={() => {
              updDocument("danhgia", uid, {
                status: !status,
              });
              thongbaoSucess("hiển thị");
            }}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <BiHide className="text-xl text-green-500" />
            </div>
          </Popconfirm>
          <Popconfirm
            title="Xác nhận xoá nội dung này ?"
            onConfirm={() => {
              delDocument("danhgia", uid);
              thongbaoSucess("xoá nội dung");
            }}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <AiFillDelete className="text-xl text-red-500" />
            </div>
          </Popconfirm>
        </div>
      ),
    },
  ];
  const rows = danhgia.map((data: any) => ({
    id: data.uid,
    ten: data.ten,
    sdt: data.sdt,
    sanpham: data.sanpham,
    noidung: data.noidung,
    sao: data.sao,
    createdAt: moment.unix(data.createdAt).format("HH:MM DD/MM"),
    status: data.status ? "Đang hiển thị" : "Đang ẩn",
    thaotac: data,
  }));
  const dataTable = (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      autoHeight
    />
  );
  const chucnang = (
    <div className="border rounded-md m-5 p-3">
      <p className="font-bold text-xl text-blue-500 text-center">TÍNH NĂNG</p>
      <div className="mx-10 my-2">
        <Button variant="contained" color="secondary" fullWidth>
          DANH SÁCH
        </Button>
      </div>
      <div className="mx-10 my-2">
        <Popconfirm
          title="Xác nhận xoá tất cả nội dung ?"
          onConfirm={() => delAllDocument("danhgia")}
        >
          <Button variant="contained" color="error" fullWidth>
            XOÁ TẤT CẢ
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Bình
          luận & Đánh giá
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <AiOutlineComment className="mr-2" /> QUẢN LÝ ĐÁNH GIÁ
          </div>
        </Divider>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="m-5 md:w-3/4">{dataTable}</div>
        <div className="md:w-1/4">{chucnang}</div>
      </div>
    </Fragment>
  );
}
