"use client";
import { Alert, Button, Divider, TextField, Drawer } from "@mui/material";
import { Card, Checkbox, message, notification } from "antd";
import React, { Fragment, useContext, useState } from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext, useAuth } from "../../Context/AuthProvider";

export default function Login() {
  const { setUser, setPass, login } = useAuth();
  const [alertLogin, setAlertLogin] = useState(true);
  const [open, setOpen] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const handleLogin = () => {
    if (login === true) {
      setTimeout(() => {
        notification["success"]({
          message: "Đăng nhập thành công !",
          description: `Bạn đã đăng nhập thành công !`,
        });
      }, 1000);
      setOpen(false);
    } else {
      setAlertLogin(false);
    }
  };
  return (
    <>
      <Drawer anchor="top" open={open}>
        <Card
          hoverable
          className="my-10 md:my-[50px] mx-5 md:mx-[300px] rounded-lg"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                alt=""
                src="https://gobranding.com.vn/wp-content/uploads/2019/09/digital-marketing-la-gi-1024x746.jpg"
              />
            </div>
            <div className="md:w-1/2 m-3">
              <p className="font-bold text-lg">Đăng nhập</p>
              <div className="my-3">
                <p className="text-blue-500 font-bold">Tên tài khoản</p>
                <TextField
                  fullWidth={true}
                  label="Tên tài khoản"
                  variant="standard"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p className="text-blue-500 font-bold">Mật khẩu</p>
                <TextField
                  type={showPass ? "text" : "password"}
                  fullWidth={true}
                  label="Mật khẩu"
                  variant="standard"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="flex justify-start my-3">
                <Checkbox onChange={() => setShowPass(!showPass)}>
                  Hiện mật khẩu
                </Checkbox>
              </div>
              <div className="flex flex-col justify-center mt-5">
                <Button
                  fullWidth={true}
                  variant="contained"
                  onClick={handleLogin}
                >
                  ĐĂNG NHẬP
                </Button>
                <Alert severity="error" hidden={alertLogin}>
                  Tên đăng nhập hoặc mật khẩu không đúng !!
                </Alert>
              </div>
              <div className="flex justify-center my-3">
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              </div>
              <Divider />
              <div className="mt-5">
                <div className="my-2">
                  <Button
                    variant="contained"
                    startIcon={<AiFillFacebook />}
                    fullWidth={true}
                    onClick={() =>
                      message.error(
                        "Phương thức đăng nhập này chưa được hỗ trợ !!"
                      )
                    }
                  >
                    Facebook
                  </Button>
                </div>
                <div className="my-2">
                  <Button
                    color="error"
                    variant="contained"
                    startIcon={<AiFillGoogleCircle />}
                    fullWidth={true}
                    onClick={() =>
                      message.error(
                        "Phương thức đăng nhập này chưa được hỗ trợ !!"
                      )
                    }
                  >
                    Google
                  </Button>
                </div>
              </div>
              <div className="font-bold text-blue-500 hover:underline m-3">
                <p
                  onClick={() =>
                    message.error(
                      "Vui lòng liên hệ bộ phận kỹ thuật để được khôi phục tài khoản !!"
                    )
                  }
                >
                  Tôi đã quên mật khẩu !
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Drawer>
    </>
  );
}
