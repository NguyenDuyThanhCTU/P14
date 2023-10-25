"use client";
import { Button, Divider } from "@mui/material";
import { Input, Popconfirm, Tag } from "antd";
import React, { Fragment, useContext, useState } from "react";
import { FaKeycdn } from "react-icons/fa";
import { addDocument, delDocument } from "../../firebase/services";
import { AppContext } from "./../../Context/AppProvider";

export default function SEOTuKhoa() {
  const { tukhoa, thongbaoSucess, uid, setUid } = useContext(AppContext);
  const [value, setValue] = useState("");
  const chucnang = (
    <div className="border rounded-md m-5 p-3">
      <p className="font-bold text-xl text-blue-500 text-center">TỪ KHOÁ</p>
      <div className="mx-10 my-2">
        <Input
          placeholder="Nhập từ khoá..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="mx-10 my-2">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            addDocument("tukhoa", { tukhoa: value });
            setValue("");
            thongbaoSucess("từ khoá");
          }}
        >
          THÊM TỪ KHOÁ
        </Button>
      </div>
    </div>
  );
  const dataTable = (
    <div className="border rounded-md m-5 p-3 flex flex-wrap">
      {tukhoa.map((data: any) => (
        <div key={data.uid} className="m-1">
          <Popconfirm
            title="Xác nhận xoá nội dung này ?"
            onConfirm={() => {
              delDocument("tukhoa", uid);
              thongbaoSucess("xoá nội dung");
            }}
          >
            <Tag color="blue" onClick={() => setUid(data.uid)}>
              #{data.tukhoa}
            </Tag>
          </Popconfirm>
        </div>
      ))}
    </div>
  );
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ SEO từ
          khoá
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <FaKeycdn className="mr-2" /> QUẢN LÝ TỪ KHOÁ
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
