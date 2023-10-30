"use client";
import React, { Fragment, useContext, useState } from "react";
import { AiFillDelete, AiOutlinePicture } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Divider, Drawer } from "@mui/material";
import {
  Button as AntButton,
  Form,
  Input,
  Popconfirm,
  Popover,
  Radio,
} from "antd";
import moment from "moment";
import {
  addDocument,
  delAllDocument,
  delDocument,
  updAllDocument,
  updDocument,
  uploadFile,
} from "../../firebase/services";
import { useData } from "./../../Context/AppProvider";

interface SliderShowProps {}

export default function SliderShow(props: SliderShowProps) {
  const {
    uid,
    setUid,
    slidershow,
    slidershowSelected,
    thongbaoSucess,
    thongbaoError,
  } = useData();

  const [status, setStatus] = useState<any>();
  const [photoURL, setPhotoURL] = useState<string>("");
  const [openAdd, setOpenadd] = useState<boolean>(false);
  const [openEdit, setOpenedit] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const [formAdd] = Form.useForm<any>();
  const [formUpdate] = Form.useForm();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "type", headerName: "Loại", width: 130 },
    { field: "createdAt", headerName: "Ngày Upload", width: 120 },
    { field: "status", headerName: "Trạng thái", width: 120 },
    {
      field: "photoURL",
      headerName: "Hình ảnh",
      width: 200,
      renderCell: (params) => (
        <Popover
          content={
            <img className="w-[200px]" alt="" src={params.value as string} />
          }
        >
          <img alt="" src={params.value as string} />
        </Popover>
      ),
    },
    {
      field: "thaotac",
      headerName: "Thao tác",
      width: 200,
      renderCell: (params) => (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setUid(params.value.uid);
            setStatus(params.value.status);
            setPhotoURL(params.value.photoURL);
          }}
        >
          <Popconfirm
            title="Xác nhận đưa nội dung này lên đầu ?"
            onConfirm={() => {
              updDocument("slidershow", uid, {
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
              updDocument("slidershow", uid, {
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
              delDocument("slidershow", uid);
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

  const rows = slidershow.map((data: any) => ({
    id: data.uid,
    type: data.type,

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
        onConfirm={() => updAllDocument("slidershow", { status: false })}
      >
        <div className="mx-10 my-2">
          <Button variant="contained" color="warning" fullWidth>
            ẨN TẤT CẢ
          </Button>
        </div>
      </Popconfirm>
      <Popconfirm
        title="Xác nhận hiển thị tất cả nội dung ?"
        onConfirm={() => updAllDocument("slidershow", { status: true })}
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
          onConfirm={() => delAllDocument("slidershow")}
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

      addDocument("slidershow", {
        type: type,
        photoURL: photoURL,
      });
      setOpenadd(false);
      thongbaoSucess("slidershow");
      formAdd.resetFields();
      setPhotoURL("");
      setUid("");
    }
  };
  const addContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[30vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        THÊM NỘI DUNG MỚI
      </p>
      <Form onFinish={handleAdd} layout="vertical">
        {/* <Form.Item label="Tên Slidershow :" name="ten">
          <Input className="rounded-lg" placeholder="Tên Slidershow..." />
        </Form.Item> */}

        <Form.Item name="loai" label="Quyền Hạn">
          <Radio.Group onChange={(e) => setType(e.target.value)} value={type}>
            <Radio value={"seafood"}>Thủy hải sản biển Cà Mau</Radio>
            <Radio value={"agricultural"}>Nông sản xuất khẩu</Radio>
            <Radio value={"rice"}>Gạo sạch Cà Mau</Radio>
            <Radio value={"driedsquid"}>Khô mực Cà Mau</Radio>
            <Radio value={"freshsquid"}>Mực tươi Cà Mau</Radio>
          </Radio.Group>
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
              onChange={(e) => uploadFile("slidershow", e, setPhotoURL)}
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
        <AntButton htmlType="submit">THÊM NỘI DUNG MỚI</AntButton>
      </Form>
    </div>
  );
  const handleEdit = () => {
    if (photoURL === "") {
      thongbaoError("Chưa Upload hình ảnh lên !!");
    } else {
      updDocument("slidershow", uid, {
        ...formUpdate.getFieldValue("update"),
        photoURL: photoURL,
      });
      setOpenedit(false);
      thongbaoSucess("slidershow");
      formUpdate.resetFields();
      setPhotoURL("");
      setUid("");
    }
  };
  const editContent = (
    <div className="mx-5 my-2 w-[75vw] md:w-[30vw]">
      <p className="text-lg font-bold text-blue-500 m-2 text-center">
        CHỈNH SỬA NỘI DUNG
      </p>
      {slidershowSelected.map((data: any) => (
        <Form key={data.uid} form={formUpdate} layout="vertical">
          <Form.Item label="Tên Slidershow :" name="ten">
            <Input
              defaultValue={data.ten}
              className="rounded-lg"
              placeholder="Tên Slidershow..."
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
                onChange={(e) => uploadFile("slidershow", e, setPhotoURL)}
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
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/
          Slidershow
        </div>
        {/* <Divider orientation="center">
         */}
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <AiOutlinePicture className="mr-2" /> HÌNH ẢNH SLIDERSHOW
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
