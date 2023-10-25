"use client";
import { Button, Divider, Drawer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Form, Input, Popconfirm, Tag } from "antd";
import moment from "moment";
import React, { Fragment, useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import "react-quill/dist/quill.snow.css";
import {
  addDocument,
  delAllDocument,
  delDocument,
  updDocument,
} from "../../firebase/services";
import { AppContext, useData } from "./../../Context/AppProvider";

export default function LoaiSanPham() {
  const { uid, setUid, loaisanpham, loaisanphamSelected, thongbaoSucess } =
    useData();
  const [openAdd, setOpenadd] = useState(false);
  const [openEdit, setOpenedit] = useState(false);
  const [formAdd] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const [loai2, setLoai2] = useState<any>([]);
  const [loai, setLoai] = useState("");
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "loai1",
      headerName: "Loại lớp 1",
      width: 150,
    },
    {
      field: "loai2",
      headerName: "Loại lớp 2",
      width: 150,
    },
    { field: "createdAt", headerName: "Ngày Upload", width: 120 },
    {
      field: "thaotac",
      headerName: "Thao tác",
      width: 200,
      renderCell: (params: any) => (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setUid(params.value.uid);
            setLoai2(params.value.loai2);
          }}
        >
          <div
            className="p-2 hover:bg-blue-300 rounded-full"
            onClick={() => setOpenedit(true)}
          >
            <FaEdit className="text-xl text-orange-500" />
          </div>
          <Popconfirm
            title="Xác nhận xoá nội dung này ?"
            onConfirm={() => {
              delDocument("loaisanpham", uid);
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
  const rows = loaisanpham.map((data: any) => ({
    id: data.uid,
    loai1: data.loai1,
    loai2: data.loai2,
    createdAt: moment.unix(data.createdAt).format("HH:MM DD/MM"),
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setOpenadd(true)}
        >
          THÊM NỘI DUNG
        </Button>
      </div>
      <div className="mx-10 my-2">
        <Popconfirm
          title="Xác nhận xoá tất cả nội dung ?"
          onConfirm={() => delAllDocument("loaisanpham")}
        >
          <Button variant="contained" color="error" fullWidth>
            XOÁ TẤT CẢ
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
  const handleAdd = () => {
    addDocument("loaisanpham", {
      ...formAdd.getFieldValue("add"),
      loai2: loai2,
    });
    setOpenadd(false);
    thongbaoSucess("loại sản phẩm");
    formAdd.resetFields();
    setUid("");
  };
  const addContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[80vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        THÊM NỘI DUNG MỚI
      </p>
      <Form form={formAdd} layout="vertical">
        <Form.Item label="Loại sản phẩm :" name="loai1">
          <Input className="rounded-lg" placeholder="Loại lớp 1..." />
        </Form.Item>
        <Form.Item label="Loại 2 :">
          <div className="flex">
            <Input
              className="rounded-l-lg"
              placeholder="Loại lớp 2..."
              onChange={(e) => setLoai(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => setLoai2((prevState: any) => [...prevState, loai])}
            >
              THÊM
            </Button>
          </div>
          <div className="flex flex-wrap border-2 p-2 m-2">
            {loai2.map((data: any) => (
              <Tag key={data}>{data}</Tag>
            ))}
          </div>
        </Form.Item>
        <Button variant="contained" fullWidth onClick={handleAdd}>
          THÊM NỘI DUNG MỚI
        </Button>
      </Form>
    </div>
  );
  const handleEdit = () => {
    updDocument("loaisanpham", uid, {
      ...formUpdate.getFieldValue("update"),
      loai2: loai2,
    });
    setOpenedit(false);
    thongbaoSucess("loại sản phẩm");
    formUpdate.resetFields();
    setUid("");
  };
  const editContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[80vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        CHỈNH SỬA NỘI DUNG
      </p>
      {loaisanphamSelected.map((data: any) => (
        <Form key={data.uid} form={formUpdate} layout="vertical">
          <Form.Item label="Loại sản phẩm :" name="loai1">
            <Input
              defaultValue={data.loai1}
              className="rounded-lg"
              placeholder="Loại lớp 1..."
            />
          </Form.Item>
          <Form.Item label="Loại 2 :">
            <div className="flex">
              <Input
                className="rounded-l-lg"
                placeholder="Loại lớp 2..."
                onChange={(e) => setLoai(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={() =>
                  setLoai2((prevState: any) => [...prevState, loai])
                }
              >
                THÊM
              </Button>
            </div>
            <div className="flex flex-wrap border-2 p-2 m-2">
              {loai2.map((data: any) => (
                <Tag key={data}>{data}</Tag>
              ))}
            </div>
          </Form.Item>
          <Button variant="contained" fullWidth onClick={handleEdit}>
            CẬP NHẬT NỘI DUNG
          </Button>
        </Form>
      ))}
    </div>
  );
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Phân
          loại sản phẩm
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <BsMenuButtonWideFill className="mr-2" /> PHÂN LOẠI SẢN PHẨM
          </div>
        </Divider>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="m-5 md:w-3/4">{dataTable}</div>
        <div className="md:w-1/4">{chucnang}</div>
      </div>
      <div>
        <Drawer
          anchor="left"
          open={openAdd}
          onClose={() => {
            setOpenadd(false);
            setLoai2([]);
          }}
        >
          {addContent}
        </Drawer>
        <Drawer
          anchor="right"
          open={openEdit}
          onClose={() => {
            setOpenedit(false);
            setLoai2([]);
          }}
        >
          {editContent}
        </Drawer>
      </div>
    </Fragment>
  );
}
