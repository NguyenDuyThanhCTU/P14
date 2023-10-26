"use client";
import {
  Avatar,
  Comment,
  Form,
  Input,
  Tooltip,
  Rate,
  message,
  Button as AntButton,
} from "antd";
import React, { Fragment, useState } from "react";
import { useContext } from "react";
import moment from "moment";
import { Button, Drawer } from "@mui/material";
import { useData } from "@Context/AppProvider";
import { addDocument } from "@firebase/services";

export default function DanhGia() {
  const { danhgia, sanpham } = useData();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAdd = (values: any) => {
    for (let key in values) {
      if (values[key] === undefined || values[key] === "") {
        delete values[key];
      }
    }

    addDocument("danhgia", {
      ...values,
    });
    setVisible(false);
    message.success("Gửi đánh giá thành công !");
    form.resetFields();
  };
  const danhGia = (
    <div>
      <div className="flex flex-wrap">
        {danhgia.map((data: any) => (
          <div
            className="m-2 p-5 rounded-lg border-2 shadow-lg bg-gradient-to-bl from-white to-slate-300"
            key={data.uid}
            hidden={!data.status}
          >
            <Comment
              //   actions={actions}
              author={<p>{data.ten}</p>}
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="Han Solo"
                />
              }
              content={
                <div>
                  <Rate disabled allowHalf value={data.sao} />
                  <p className="text-[12px] italic text-red-500 my-1">
                    {data.sanpham}
                  </p>
                  <p>{data.noidung}</p>
                </div>
              }
              datetime={
                <Tooltip
                  title={moment.unix(data.createdAt).format("HH:mm:ss DD/MM")}
                >
                  <span>
                    {moment.unix(data.createdAt).format("HH:mm:ss DD/MM")}
                  </span>
                </Tooltip>
              }
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center m-2" onClick={() => setVisible(true)}>
        <Button variant="contained">VIẾT REVIEW, ĐÁNH GIÁ</Button>
      </div>
    </div>
  );
  const vietDanhgia = (
    <div className="m-5 h-[80vh]">
      <Form onFinish={handleAdd} layout="vertical">
        <Form.Item label="Họ và tên :" name="ten">
          <Input required className="rounded-lg" placeholder="Họ và tên..." />
        </Form.Item>
        <Form.Item label="Số điện thoại (Không bắt buộc) :" name="sdt">
          <Input className="rounded-lg" placeholder="Số điện thoại..." />
        </Form.Item>
        <Form.Item label="Sản phẩm muốn review :" name="sanpham">
          <select className="rounded-lg w-full p-2 border">
            {sanpham.map((data: any) => (
              <option className="py-2" key={data.uid} value={data.ten}>
                {data.ten}
              </option>
            ))}
          </select>
        </Form.Item>
        <Form.Item label="Chấm điểm sản phẩm :" name="sao">
          <Rate allowHalf defaultValue={5} />
        </Form.Item>
        <Form.Item label="Vài lời nhận xét :" name="noidung">
          <Input.TextArea className="rounded-lg" placeholder="Nhận xét..." />
        </Form.Item>
        <AntButton htmlType="submit">GỬI ĐÁNH GIÁ</AntButton>
      </Form>
    </div>
  );
  return (
    <Fragment>
      <div className="border-b-2 border-red-500 mx-2 pt-2">
        <div className="flex justify-start font-bold">
          <div className="text-white bg-red-500 pt-1 px-2">
            REVIEW & ĐÁNH GIÁ
          </div>
        </div>
      </div>
      <div>{danhGia}</div>
      <Drawer anchor="top" open={visible} onClose={() => setVisible(false)}>
        {vietDanhgia}
      </Drawer>
    </Fragment>
  );
}
