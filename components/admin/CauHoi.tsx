"use client";
import { Button, Divider, Drawer } from "@mui/material";
import { Button as AntButton, Form, Input, Popconfirm, Popover } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React, { Fragment, useContext, useState } from "react";
import { AiFillDelete, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import "react-quill/dist/quill.snow.css";
import {
  addDocument,
  delAllDocument,
  delDocument,
  updAllDocument,
  updDocument,
} from "../../firebase/services";
import { AppContext } from "./../../Context/AppProvider";

export default function CauHoi() {
  const { uid, setUid, cauhoi, thongbaoSucess, cauhoiSelected } =
    useContext(AppContext);
  const [status, setStatus] = useState();
  const [openAdd, setOpenadd] = useState(false);
  const [openEdit, setOpenedit] = useState(false);
  const [formAdd] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "cauhoi", headerName: "Câu hỏi", width: 250 },
    { field: "cautraloi", headerName: "Câu trả lời", width: 350 },
    { field: "createdAt", headerName: "Ngày Upload", width: 120 },
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
            title="Xác nhận đưa nội dung này lên đầu ?"
            onConfirm={() => {
              updDocument("cauhoi", uid, {
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
              updDocument("cauhoi", uid, {
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
              delDocument("cauhoi", uid);
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
  const rows = cauhoi.map((data: any) => ({
    id: data.uid,
    cauhoi: data.cauhoi,
    cautraloi: data.cautraloi,
    createdAt: moment.unix(data.createdAt).format("HH:MM DD/MM"),
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
        onConfirm={() => updAllDocument("cauhoi", { status: false })}
      >
        <div className="mx-10 my-2">
          <Button variant="contained" color="warning" fullWidth>
            ẨN TẤT CẢ
          </Button>
        </div>
      </Popconfirm>
      <Popconfirm
        title="Xác nhận hiển thị tất cả nội dung ?"
        onConfirm={() => updAllDocument("cauhoi", { status: true })}
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
          onConfirm={() => delAllDocument("cauhoi")}
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
    addDocument("cauhoi", {
      ...values,
    });
    setOpenadd(false);
    thongbaoSucess("câu hỏi");
    formAdd.resetFields();
    setUid("");
  };

  const addContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[80vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        THÊM NỘI DUNG MỚI
      </p>
      <Form onFinish={handleAdd} layout="vertical">
        <Form.Item label="Câu hỏi :" name="cauhoi">
          <Input.TextArea className="rounded-lg" placeholder="Câu hỏi..." />
        </Form.Item>
        <Form.Item label="Câu trả lời :" name="cautraloi">
          <Input.TextArea className="rounded-lg" placeholder="Câu trả lời..." />
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
    updDocument("cauhoi", uid, {
      ...formUpdate.getFieldValue("update"),
    });
    setOpenedit(false);
    thongbaoSucess("câu hỏi");
    formUpdate.resetFields();
    setUid("");
  };
  const editContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[80vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        CHỈNH SỬA NỘI DUNG
      </p>
      {cauhoiSelected.map((data: any) => (
        <Form key={data.uid} onFinish={handleEdit} layout="vertical">
          <Form.Item label="Câu hỏi :" name="cauhoi">
            <Input.TextArea
              defaultValue={data.cauhoi}
              className="rounded-lg"
              placeholder="Câu hỏi..."
            />
          </Form.Item>
          <Form.Item label="Câu trả lời :" name="cautraloi">
            <Input.TextArea
              defaultValue={data.cautraloi}
              className="rounded-lg"
              placeholder="Câu trả lời..."
            />
          </Form.Item>
          <AntButton htmlType="submit">CẬP NHẬT NỘI DUNG</AntButton>
        </Form>
      ))}
    </div>
  );
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Câu hỏi
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <AiOutlineQuestionCircle className="mr-2" /> QUẢN LÝ CÂU HỎI
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
