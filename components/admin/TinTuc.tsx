"use client";
import { Button, Divider, Drawer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Form, Input, Popconfirm, Popover } from "antd";
import moment from "moment";
import React, { Fragment, useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiHide, BiNews } from "react-icons/bi";
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

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import TextEditor from "@components/client/CKEditor/TextEditor";

export default function TinTuc() {
  const {
    uid,
    setUid,
    tintuc,
    tintucSelected,
    editor,
    setEditor,
    thongbaoSucess,
    thongbaoError,
  } = useContext(AppContext);
  const [status, setStatus] = useState();
  const [photoURL, setPhotoURL] = useState("");
  const [openAdd, setOpenadd] = useState(false);
  const [openEdit, setOpenedit] = useState(false);
  const [formAdd] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "tieude", headerName: "Tiêu đề", width: 150 },
    { field: "phude", headerName: "Phụ đề", width: 150 },
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
              updDocument("tintuc", uid, {
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
              updDocument("tintuc", uid, {
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
              delDocument("tintuc", uid);
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
  const rows = tintuc.map((data: any) => ({
    id: data.uid,
    ten: data.ten,
    tieude: data.tieude,
    phude: data.phude,
    createdAt: moment.unix(data.createdAt).format("HH:MM DD/MM"),
    photoURL: data.photoURL,
    thaotac: data,
    status: data.status ? "Đang hiển thị" : "Đang ẩn",
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
      <Popconfirm
        title="Xác nhận ẩn tất cả nội dung ?"
        onConfirm={() => updAllDocument("tintuc", { status: false })}
      >
        <div className="mx-10 my-2">
          <Button variant="contained" color="warning" fullWidth>
            ẨN TẤT CẢ
          </Button>
        </div>
      </Popconfirm>
      <Popconfirm
        title="Xác nhận hiển thị tất cả nội dung ?"
        onConfirm={() => updAllDocument("tintuc", { status: true })}
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
          onConfirm={() => delAllDocument("tintuc")}
        >
          <Button variant="contained" color="error" fullWidth>
            XOÁ TẤT CẢ
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
  const handleAdd = () => {
    if (photoURL === "") {
      thongbaoError("Chưa Upload hình ảnh lên !!");
    } else {
      addDocument("tintuc", {
        ...formAdd.getFieldValue("add"),
        photoURL: photoURL,
        editor: editor === undefined ? "" : editor,
      });
      setOpenadd(false);
      thongbaoSucess("tin tức");
      formAdd.resetFields();
      setPhotoURL("");
      setEditor({ value: null });
      setUid("");
    }
  };
  const addContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[75vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        THÊM NỘI DUNG MỚI
      </p>
      <Form form={formAdd} layout="vertical">
        <Form.Item label="Tiêu đề :" name="tieude">
          <Input className="rounded-lg" placeholder="Tiêu đề..." />
        </Form.Item>
        <Form.Item label="Phụ đề :" name="phude">
          <Input className="rounded-lg" placeholder="Phụ đề..." />
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
              onChange={(e) => uploadFile("tintuc", e, setPhotoURL)}
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
        <Button variant="contained" fullWidth onClick={handleAdd}>
          THÊM NỘI DUNG MỚI
        </Button>
      </Form>
    </div>
  );
  const handleEdit = () => {
    if (photoURL === "") {
      thongbaoError("Chưa Upload hình ảnh lên !!");
    } else {
      updDocument("tintuc", uid, {
        ...formUpdate.getFieldValue("update"),
        photoURL: photoURL,
        editor: editor === undefined ? "" : editor,
      });
      setOpenedit(false);
      thongbaoSucess("tin tức");
      formUpdate.resetFields();
      setPhotoURL("");
      setEditor({ value: null });
      setUid("");
    }
  };
  const editContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[75vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        CHỈNH SỬA NỘI DUNG
      </p>
      {tintucSelected.map((data: any) => (
        <Form key={data.uid} form={formUpdate} layout="vertical">
          <Form.Item label="Tiêu đề :" name="tieude">
            <Input
              defaultValue={data.tieude}
              className="rounded-lg"
              placeholder="Tiêu đề..."
            />
          </Form.Item>
          <Form.Item label="Phụ đề :" name="phude">
            <Input
              defaultValue={data.phude}
              className="rounded-lg"
              placeholder="Phụ đề..."
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
                onChange={(e) => uploadFile("tintuc", e, setPhotoURL)}
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
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Tin tức
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <BiNews className="mr-2" /> QUẢN LÝ TIN TỨC
          </div>
        </Divider>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="m-5 md:w-3/4">{dataTable}</div>
        <div className="md  ">{chucnang}</div>
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
