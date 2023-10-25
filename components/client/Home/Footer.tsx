"use client";
import { Button } from "@mui/material";
import { Form, Input, Tag, message } from "antd";
import { Fragment, useContext } from "react";
import {
  AiOutlineCopyright,
  AiTwotoneMail,
  AiFillFacebook,
} from "react-icons/ai";
import {
  BsFillPhoneVibrateFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import PopUp from "./PopUp";
import { useData } from "@Context/AppProvider";
import { addDocument } from "@firebase/services";

export default function Footer() {
  const { thongtin, tukhoa } = useData();
  const [form] = Form.useForm();
  const handleAdd = () => {
    addDocument("phanhoi", {
      ...form.getFieldValue("add"),
    });
    message.success("Gửi thông tin thành công !");
  };

  return (
    <Fragment>
      <div className="bg-gray-700 md:flex md:justify-between">
        <div className="p-5 mx-5 my-2 text-white cursor-pointer">
          <p className="my-2 font-extrabold text-xl">{thongtin[0]?.ten}</p>
          <p className="my-2 flex items-center hover:text-orange-500">
            <GiPositionMarker className="mr-2" />
            Địa chỉ 1 : {thongtin[0]?.diachi1}
          </p>
          <p className="my-2 flex items-center hover:text-orange-500">
            <GiPositionMarker className="mr-2" />
            Địa chỉ 2 : {thongtin[0]?.diachi2}
          </p>
          <p
            className="my-2 flex items-center hover:text-orange-500"
            onClick={() => window.open(`tel:${thongtin[0]?.sdtchinh}`)}
          >
            <BsFillTelephoneOutboundFill className="mr-2" />
            Hotline : {thongtin[0]?.sdtchinh}
          </p>
          <p
            className="my-2 flex items-center hover:text-orange-500"
            onClick={() => window.open(`tel:${thongtin[0]?.sdtphu}`)}
          >
            <BsFillPhoneVibrateFill className="mr-2" />
            Điện thoại : {thongtin[0]?.sdtphu}
          </p>
          <p
            className="my-2 flex items-center hover:text-orange-500"
            onClick={() => window.open(`${thongtin[0]?.fanpage}`)}
          >
            <AiFillFacebook className="mr-2" />
            Facebook : Click
          </p>
          <p
            className="my-2 flex items-center hover:text-orange-500"
            onClick={() => window.open(`${thongtin[0]?.messenger}`)}
          >
            <AiFillFacebook className="mr-2" />
            Messenger : Click
          </p>
          <p className="my-2 flex items-center hover:text-orange-500">
            <AiTwotoneMail className="mr-2" />
            Gmail : {thongtin[0]?.gmail}
          </p>
          <div className="my-2 cursor-pointer flex justify-center items-center">
            <div className="p-3 m-2 w-[40px] border border-white rounded-md flex items-center justify-center hover:text-black hover:bg-white">
              <FaFacebookF />
            </div>
            <div className="p-3 m-2 w-[40px] border border-white rounded-md flex items-center justify-center hover:text-black hover:bg-white">
              <FaTwitter />
            </div>
            <div className="p-3 m-2 w-[40px] border border-white rounded-md flex items-center justify-center hover:text-black hover:bg-white">
              <FaLinkedinIn />
            </div>
            <div className="p-3 m-2 w-[40px] border border-white rounded-md flex items-center justify-center hover:text-black hover:bg-white">
              <FaInstagram />
            </div>
            <div className="p-3 m-2 w-[40px] border border-white rounded-md flex items-center justify-center hover:text-black hover:bg-white">
              <FaGoogle />
            </div>
          </div>
        </div>
        <div className="md:my-10 flex justify-center">
          <iframe
            className="w-[80vw] md:w-[25vw]"
            title="map"
            src={thongtin.map((data: any) => data.map)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="p-5 mx-5 py-2 text-white md:w-[25vw]">
          <p className="my-2 font-extrabold text-xl">
            NHẬN <strong className="text-orange-500 text-xl">LIÊN HỆ </strong>
            TỪ CHÚNG TÔI
          </p>
          <p className="my-2 italic">
            Nhập thông tin vào form bên dưới để nhận được cuộc gọi tư vấn của
            chúng tôi.
          </p>
          <Form form={form}>
            <Form.Item className="flex my-5" name="ten">
              <Input className="rounded-lg" placeholder="Nhập họ tên..." />
            </Form.Item>
            <Form.Item className="flex my-5" name="sdt">
              <Input className="rounded-lg" placeholder="Số liên hệ..." />
            </Form.Item>
            <Form.Item className="flex my-5" name="gmail">
              <Input className="rounded-lg" placeholder="Gmail..." />
            </Form.Item>
            <Form.Item className="flex my-5" name="noidung">
              <Input.TextArea
                className="rounded-lg"
                placeholder="Nội dung..."
              />
            </Form.Item>
            <div className="flex justify-center items-center">
              <Button variant="contained" onClick={handleAdd}>
                GỬI PHẢN HỒI
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="bg-gray-700 px-10 text-white">
        <p>Từ khoá:</p>
        <div className="flex flex-wrap">
          {tukhoa?.map((data: any) => (
            <Tag key={data.uid} color="blue" className="my-1">
              #{data.tukhoa}
            </Tag>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 border-t border-white p-3">
        <p className="text-white text-lg flex flex-wrap justify-center items-center">
          <AiOutlineCopyright className="mr-1" />
          <strong className="text-orange-500 mx-2">
            {thongtin.map((data: any) => data.ten)}
          </strong>
          All Rights Reserved. Designed by{" "}
          <strong className="text-orange-500 mx-2">
            Truyen Thong ADS Company.
          </strong>
        </p>
        <div className="flex justify-around items-center cursor-pointer py-3">
          <p className="text-white hover:text-orange-500">Privacy</p>
          <p className="text-white hover:text-orange-500">Terms</p>
          <p className="text-white hover:text-orange-500">FAQs</p>
          <p className="text-white hover:text-orange-500">Help</p>
        </div>
      </div>
      <PopUp />
    </Fragment>
  );
}
