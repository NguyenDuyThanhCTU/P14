"use client";
import { Button, Divider, Drawer } from "@mui/material";
import { Button as AntButton, Form, Input, Popconfirm, Popover } from "antd";
import { DataGrid } from "@mui/x-data-grid";

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
import { AppContext, useData } from "./../../Context/AppProvider";

import TextEditor from "@components/client/CKEditor/TextEditor";

export default function BaiViet() {
  const {
    uid,
    setUid,
    baiviet,
    baivietSelected,
    editor,
    setEditor,
    thongbaoSucess,
    thongbaoError,
  } = useData();
  const [status, setStatus] = useState();
  const [photoURL, setPhotoURL] = useState("");
  const [openAdd, setOpenadd] = useState(false);
  const [openEdit, setOpenedit] = useState(false);
  const [formAdd] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const handleEdit = () => {
    const data = {
      editor: editor,
    };
    console.log(data);
    if (editor === "") {
      thongbaoError("Chưa Upload hình ảnh lên !!");
    } else {
      updDocument("baiviet", "baiviet", data);
      setOpenedit(false);
      thongbaoSucess("bài viết");

      setPhotoURL("");
      setEditor({ value: null });
      setUid("");
    }
  };

  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Bài
          viết
        </div>
        <Divider>
          <div className="flex items-center text-lg font-bold text-blue-500">
            <BiNews className="mr-2" /> QUẢN LÝ BÀI VIẾT
          </div>
        </Divider>
      </div>
      <Form onFinish={handleEdit}>
        <Form.Item label="Viết bài viết mô tả :" name="content">
          <TextEditor />
        </Form.Item>
        <AntButton htmlType="submit">THÊM NỘI DUNG MỚI</AntButton>
      </Form>
      {!editor && (
        <div
          className="mt-5 "
          dangerouslySetInnerHTML={{ __html: baiviet[0]?.editor }}
        ></div>
      )}
    </Fragment>
  );
}
