"use client";
import React from "react";
import { Fragment } from "react";
import { Divider, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "@mui/material";
import { updAllDocument } from "../../firebase/services";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useEffect } from "react";

export default function TaiKhoan() {
  const { thongbaoSucess, taikhoan } = useContext(AppContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    if (taikhoan[0] !== null) {
      setUser(taikhoan[0]?.user);
      setPass(taikhoan[0]?.pass);
    }
  }, [taikhoan]);
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Tài
          khoản
        </div>
        <Divider orientation="center">
          <div className="flex items-center text-lg font-bold text-blue-500">
            <MdOutlineAccountCircle className="mr-2" /> THÔNG TIN TÀI KHOẢN
          </div>
        </Divider>
      </div>
      <div className="md:w-[50vw] md:flex">
        <div className="p-3 my-5 shadow-md hover:shadow-lg">
          <div className="mb-2">
            <p className="font-bold">Tên đăng nhập :</p>
            <Input
              prefix={<EditOutlined />}
              className="my-1 rounded-lg"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              onClick={() => {
                updAllDocument("taikhoan", { user: user });
                thongbaoSucess("tài khoản");
              }}
            >
              Cập nhật nội dung
            </Button>
          </div>
        </div>
        <div className="p-3 my-5 shadow-md hover:shadow-lg">
          <div className="mb-2">
            <p className="font-bold">Mật khẩu :</p>
            <Input
              prefix={<EditOutlined />}
              className="my-1 rounded-lg"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              onClick={() => {
                updAllDocument("taikhoan", { pass: pass });
                thongbaoSucess("tài khoản");
              }}
            >
              Cập nhật nội dung
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
