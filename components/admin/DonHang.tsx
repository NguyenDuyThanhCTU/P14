"use client";
import { Button, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Popconfirm } from "antd";
import moment from "moment";
import React, { Fragment, useContext, useState } from "react";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import {
  delAllDocument,
  delDocument,
  updDocument,
} from "../../firebase/services";
import { AppContext } from "./../../Context/AppProvider";

export default function DonHang() {
  const { uid, setUid, donhang, thongbaoSucess } = useContext(AppContext);
  const [status, setStatus] = useState();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "ten", headerName: "Tên KH", width: 150 },
    { field: "sdt", headerName: "Số điện thoại", width: 150 },
    { field: "diachi", headerName: "Địa chỉ", width: 200 },
    { field: "createdAt", headerName: "Ngày đặt", width: 120 },
    {
      field: "sanpham",
      headerName: "Sản phẩm",
      width: 400,
      renderCell: (params: any) => (
        <div>
          {params.value.map((data: any) => (
            <div className="flex">
              <p key={data.uid}>
                {data.ten}{" "}
                <strong className="text-gray-500">{data.size}</strong>
              </p>
              <p className="text-red-500 ml-3">
                {data.gia.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    { field: "ghichu", headerName: "Ghi chú", width: 200 },
    {
      field: "thanhtoan",
      headerName: "Hình thức thanh toán",
      width: 220,
      renderCell: (params: any) => (
        <p>
          {params.value === undefined
            ? "Thanh toán khi nhận hàng"
            : params.value}
        </p>
      ),
    },
    { field: "status", headerName: "Trạng thái", width: 180 },
    {
      field: "tongtien",
      headerName: "Tổng tiền",
      width: 120,
      renderCell: (params: any) => (
        <div>
          {params.value.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      ),
    },
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
            title="Xác nhận đã giao hàng ?"
            onConfirm={() => {
              updDocument("donhang", uid, {
                status: !status,
              });
              thongbaoSucess("hiển thị");
            }}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <AiFillCheckCircle className="text-xl text-green-500" />
            </div>
          </Popconfirm>
          <Popconfirm
            title="Xác nhận xoá nội dung này ?"
            onConfirm={() => {
              delDocument("donhang", uid);
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
  const rows = donhang.map((data: any) => ({
    id: data.uid,
    ten: data.ten,
    sdt: data.sdt,
    diachi: data.diachi,
    createdAt: moment.unix(data.createdAt).format("HH:MM DD/MM"),
    sanpham: data.sanpham,
    ghichu: data.ghichu,
    thanhtoan: data.thanhtoan,
    status: data.status ? "Đang chờ giao hàng" : "Đã giao hàng",
    tongtien: data.tongtien,
    mota: data.mota,
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
          onConfirm={() => delAllDocument("donhang")}
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
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/
          Slidershow
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <BsFillCalendar2CheckFill className="mr-2" /> QUẢN LÝ ĐƠN HÀNG
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
