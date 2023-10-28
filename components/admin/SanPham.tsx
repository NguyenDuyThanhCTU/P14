"use client";
import { Button, Divider, Drawer } from "@mui/material";
import { Button as AntButton, Form, Input, Popconfirm, Popover } from "antd";

import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React, { Fragment, useContext, useState } from "react";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import {
  addDocument,
  delAllDocument,
  delDocument,
  updAllDocument,
  updDocument,
  uploadFile,
} from "../../firebase/services";

import { AppContext } from "./../../Context/AppProvider";
import useCollectionLoai1 from "./../../Hooks/useCollectionLoai1";

import TextEditor from "@components/client/CKEditor/TextEditor";

export default function SanPham() {
  const {
    uid,
    setUid,
    sanpham,
    loaisanpham,
    editor,
    setEditor,
    sanphamSelected,
    thongbaoSucess,
    thongbaoError,
  } = useContext(AppContext);
  const [status, setStatus] = useState();
  const [photoURL, setPhotoURL] = useState("");
  const [openAdd, setOpenadd] = useState(false);
  const [openEdit, setOpenedit] = useState(false);
  const [formAdd] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const [phanloai1, setPhanloai1] = useState<any>([]);
  const loai2 = useCollectionLoai1("loaisanpham", phanloai1);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "ten", headerName: "Tên", width: 150 },
    { field: "createdAt", headerName: "Ngày Upload", width: 120 },
    { field: "status", headerName: "Trạng thái", width: 120 },
    {
      field: "photoURL",
      headerName: "Hình ảnh",
      width: 200,
      renderCell: (params: any) => (
        <Popover
          content={<img className="w-[200px]" alt="" src={params.value} />}
        >
          <img alt="" src={params.value} />
        </Popover>
      ),
    },
    { field: "phanloai", headerName: "Nhóm", width: 150 },
    { field: "loai1", headerName: "Loại 1", width: 150 },
    { field: "loai2", headerName: "Loại 2", width: 150 },
    {
      field: "gioitinh",
      headerName: "Giới tính",
      width: 150,
    },
    {
      field: "gia",
      headerName: "Giá tiền",
      width: 120,
      renderCell: (params: any) => (
        <div>
          {Number(params.value).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      ),
    },
    {
      field: "giamgia",
      headerName: "Giảm giá",
      width: 120,
      renderCell: (params: any) => <p>{params.value} %</p>,
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
            setPhotoURL(params.value.photoURL);
            setEditor(params.value.editor);
          }}
        >
          <Popconfirm
            title="Xác nhận đưa nội dung này lên đầu ?"
            onConfirm={() => {
              updDocument("sanpham", uid, {
                createdAt: moment().format("X"),
              });
              thongbaoSucess("lên đầu");
            }}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <BsFillArrowUpCircleFill className="text-xl text-blue-500" />
            </div>
          </Popconfirm>
          <Popconfirm
            title="Xác nhận thay đổi trạng thái hiện thị ?"
            onConfirm={() => {
              updDocument("sanpham", uid, {
                status: !status,
              });
              thongbaoSucess("hiển thị");
            }}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <BiHide className="text-xl text-green-500" />
            </div>
          </Popconfirm>
          <div
            className="p-2 hover:bg-blue-300 rounded-full"
            onClick={() => setOpenedit(true)}
          >
            <FaEdit className="text-xl text-orange-500" />
          </div>
          <Popconfirm
            title="Xác nhận xoá nội dung này ?"
            onConfirm={() => {
              delDocument("sanpham", uid);
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
  const rows = sanpham?.map((data: any) => ({
    id: data.uid,
    ten: data.ten,
    createdAt: moment.unix(data.createdAt).format("HH:MM DD/MM"),
    photoURL: data.photoURL,
    phanloai: data.phanloai,
    loai1: data.loai1,
    loai2: data.loai2,
    gioitinh: data.gioitinh,
    gia: data.gia,
    giamgia: data.giamgia,
    thaotac: data,
    status: data.status ? "Đang hiển thị" : "Đang ẩn",
  }));
  const dataTable = (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
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
      <Popconfirm
        title="Xác nhận ẩn tất cả nội dung ?"
        onConfirm={() => updAllDocument("sanpham", { status: false })}
      >
        <div className="mx-10 my-2">
          <Button variant="contained" color="warning" fullWidth>
            ẨN TẤT CẢ
          </Button>
        </div>
      </Popconfirm>
      <Popconfirm
        title="Xác nhận hiển thị tất cả nội dung ?"
        onConfirm={() => updAllDocument("sanpham", { status: true })}
      >
        <div className="mx-10 my-2">
          <Button variant="contained" color="success" fullWidth>
            HIỂN THỊ TẤT CẢ
          </Button>
        </div>
      </Popconfirm>
      <div className="mx-10 my-2">
        <Popconfirm
          title="Xác nhận xoá tất cả nội dung ?"
          onConfirm={() => delAllDocument("sanpham")}
        >
          <Button variant="contained" color="error" fullWidth>
            XOÁ TẤT CẢ
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
  const handleAdd = (values: any) => {
    for (let key in values) {
      if (values[key] === undefined || values[key] === "") {
        delete values[key];
      }
    }
    // if (photoURL === "") {
    //   thongbaoError("Chưa Upload hình ảnh lên !!");
    // } else {
    addDocument("sanpham", {
      ...values,
      photoURL: photoURL,
      editor: editor === undefined ? "" : editor,
    });
    setOpenadd(false);
    thongbaoSucess("sản phẩm");
    values.resetFields();
    setPhotoURL("");
    setEditor({ value: null });
    setUid("");
    // }
  };
  const addContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[80vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        THÊM NỘI DUNG MỚI
      </p>
      <Form onFinish={handleAdd} layout="vertical">
        <Form.Item label="Tên sản phẩm :" name="ten">
          <Input className="rounded-lg" placeholder="Tên sản phẩm..." />
        </Form.Item>
        <Form.Item label="Loại cấp 1 :" name="loai1">
          <select
            className="rounded-lg w-full p-2 border"
            onChange={(e) => setPhanloai1(e.target.value)}
          >
            <option className="py-2">---Trống---</option>
            {loaisanpham?.map((data: any) => (
              <option className="py-2" key={data.uid} value={data.loai1}>
                {data.loai1}
              </option>
            ))}
          </select>
        </Form.Item>
        <Form.Item label="Loại cấp 2 :" name="loai2">
          <select className="rounded-lg w-full p-2 border">
            <option className="py-2">---Trống---</option>
            {loai2[0]?.loai2?.map((data: any) => (
              <option className="py-2" key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </Form.Item>
        <Form.Item label="Loại :" name="phanloai">
          <select className="rounded-lg w-full p-2 border">
            <option className="py-2">---Trống---</option>
            <option className="py-2" value="Sản phẩm nổi bật">
              Sản phẩm nổi bật
            </option>
            <option className="py-2" value="Sản phẩm sales off">
              Sản phẩm sales off
            </option>
            <option className="py-2" value="Sản phẩm mới">
              Sản phẩm mới
            </option>
          </select>
        </Form.Item>
        <Form.Item label="Giới tính :" name="gioitinh">
          <select className="rounded-lg w-full p-2 border">
            <option className="py-2">---Trống---</option>
            <option className="py-2" value="Nam">
              Nam
            </option>
            <option className="py-2" value="Nữ">
              Nữ
            </option>
            <option className="py-2" value="Unisex">
              Unisex
            </option>
          </select>
        </Form.Item>
        <Form.Item label="Giá tiền :" name="gia">
          <Input
            type="number"
            className="rounded-lg"
            placeholder="Giá tiền..."
          />
        </Form.Item>
        <Form.Item label="Phần trăm giảm giá :" name="giamgia">
          <Input
            defaultValue={0}
            type="number"
            className="rounded-lg"
            placeholder="Phần trăm giảm giá..."
          />
        </Form.Item>
        <Form.Item label="Hình ảnh :">
          <Button
            variant="contained"
            color="secondary"
            component="label"
            fullWidth
          >
            TẢI LÊN HÌNH ẢNH
            <Input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => uploadFile("sanpham", e, setPhotoURL)}
            />
          </Button>
          <Input
            className="rounded-lg mt-1"
            placeholder="Hoặc nhập link hình ảnh..."
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          {photoURL && (
            <img className="w-screen p-3" alt="Ảnh upload" src={photoURL} />
          )}
        </Form.Item>
        <Form.Item label="Viết bài viết mô tả :">
          <TextEditor />
        </Form.Item>
        <AntButton htmlType="submit">THÊM NỘI DUNG MỚI</AntButton>
      </Form>
    </div>
  );
  const handleEdit = (values: any) => {
    for (let key in values) {
      if (values[key] === undefined || values[key] === "") {
        delete values[key];
      }
    }

    // if (photoURL === "") {
    //   thongbaoError("Chưa Upload hình ảnh lên !!");
    // } else {
    updDocument("sanpham", uid, {
      ...values,
      photoURL: photoURL,
      editor: editor === undefined ? "" : editor,
    });
    setOpenedit(false);
    thongbaoSucess("sản phẩm");
    values.resetFields();
    setPhotoURL("");
    setEditor({ value: null });
    setUid("");
    // }
  };
  const editContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[80vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        CHỈNH SỬA NỘI DUNG
      </p>
      {sanphamSelected?.map((data: any) => (
        <Form key={data.uid} onFinish={handleEdit} layout="vertical">
          <Form.Item label="Tên sản phẩm :" name="ten">
            <Input
              defaultValue={data.ten}
              className="rounded-lg"
              placeholder="Tên sản phẩm..."
            />
          </Form.Item>
          <Form.Item label="Loại cấp 1 :" name="loai1">
            <select
              defaultValue={data.loai1}
              className="rounded-lg w-full p-2 border"
              onChange={(e) => setPhanloai1(e.target.value)}
            >
              <option className="py-2">---Trống---</option>
              {loaisanpham?.map((data: any) => (
                <option className="py-2" key={data.uid} value={data.loai1}>
                  {data.loai1}
                </option>
              ))}
            </select>
          </Form.Item>
          <Form.Item label="Loại cấp 2 :" name="loai2">
            <select
              className="rounded-lg w-full p-2 border"
              defaultValue={data.loai2}
            >
              <option className="py-2">---Trống---</option>
              {loai2[0]?.loai2?.map((data: any) => (
                <option className="py-2" key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </Form.Item>
          <Form.Item label="Loại :" name="phanloai">
            <select
              className="rounded-lg w-full p-2 border"
              defaultValue={data.phanloai}
            >
              <option className="py-2">---Trống---</option>
              <option className="py-2" value="Sản phẩm nổi bật">
                Sản phẩm nổi bật
              </option>
              <option className="py-2" value="Sản phẩm sales off">
                Sản phẩm sales off
              </option>
              <option className="py-2" value="Sản phẩm mới">
                Sản phẩm mới
              </option>
            </select>
          </Form.Item>
          <Form.Item label="Giới tính :" name="gioitinh">
            <select
              className="rounded-lg w-full p-2 border"
              defaultValue={data.gioitinh}
            >
              <option className="py-2">---Trống---</option>
              <option className="py-2" value="Nam">
                Nam
              </option>
              <option className="py-2" value="Nữ">
                Nữ
              </option>
              <option className="py-2" value="Unisex">
                Unisex
              </option>
            </select>
          </Form.Item>
          <Form.Item label="Giá tiền :" name="gia">
            <Input
              type="number"
              defaultValue={data.gia}
              className="rounded-lg"
              placeholder="Giá tiền..."
            />
          </Form.Item>
          <Form.Item label="Phần trăm giảm giá :" name="giamgia">
            <Input
              defaultValue={data.giamgia}
              type="number"
              className="rounded-lg"
              placeholder="Phần trăm giảm giá..."
            />
          </Form.Item>
          <Form.Item label="Hình ảnh :">
            <Button
              variant="contained"
              color="secondary"
              component="label"
              fullWidth
            >
              TẢI LÊN HÌNH ẢNH
              <Input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => uploadFile("sanpham", e, setPhotoURL)}
              />
            </Button>
            <Input
              className="rounded-lg mt-1"
              placeholder="Hoặc nhập link hình ảnh..."
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            {photoURL && (
              <img className="w-screen p-3" alt="Ảnh upload" src={photoURL} />
            )}
          </Form.Item>
          <Form.Item label="Viết bài viết mô tả :">
            <TextEditor />
          </Form.Item>

          <AntButton htmlType="submit"> CẬP NHẬT NỘI DUNG</AntButton>
        </Form>
      ))}
    </div>
  );
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Sản
          phẩm
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <AiOutlineShoppingCart className="mr-2" /> QUẢN LÝ SẢN PHẨM
          </div>
        </Divider>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="m-5 md:w-3/4">{dataTable}</div>
        <div className="md:w-1/4">{chucnang}</div>
      </div>
      <div>
        <Drawer anchor="left" open={openAdd} onClose={() => setOpenadd(false)}>
          {addContent}
        </Drawer>
        <Drawer
          anchor="right"
          open={openEdit}
          onClose={() => setOpenedit(false)}
        >
          {editContent}
        </Drawer>
      </div>
    </Fragment>
  );
}
