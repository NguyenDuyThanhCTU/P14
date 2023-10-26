"use client";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";
import { Divider, Input } from "antd";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { IoMdContact } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import { updAllDocument, uploadFile } from "../../firebase/services";
import { AppContext, useData } from "@Context/AppProvider";

export default function CauHinhChung() {
  const { thongtin, thongbaoSucess } = useData();
  const [logo, setLogo] = useState<string>("");
  const [ten, setTen] = useState<string>("");
  const [logoUrl, setLogoUrl] = useState("");

  const [tenmien, setTenmien] = useState<string>("");
  const [sdtchinh, setSdtchinh] = useState<string>("");
  const [sdtphu, setSdtphu] = useState<string>("");
  const [diachi1, setDiachi1] = useState<string>("");
  const [diachi2, setDiachi2] = useState<string>("");
  const [zalo, setZalo] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [fanpage, setFanpage] = useState<string>("");
  const [messenger, setMessenger] = useState<string>("");
  const [map, setMap] = useState<string>("");
  const [gmail, setGmail] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");

  useEffect(() => {
    if (thongtin[0] !== null) {
      setLogo(thongtin[0]?.logo);
      setTen(thongtin[0]?.ten);
      setTenmien(thongtin[0]?.tenmien);
      setSdtchinh(thongtin[0]?.sdtchinh);
      setSdtphu(thongtin[0]?.sdtphu);
      setDiachi1(thongtin[0]?.diachi1);
      setDiachi2(thongtin[0]?.diachi2);
      setZalo(thongtin[0]?.zalo);
      setInstagram(thongtin[0]?.instagram);
      setFanpage(thongtin[0]?.fanpage);
      setMessenger(thongtin[0]?.messenger);
      setMap(thongtin[0]?.map);
      setGmail(thongtin[0]?.gmail);
      setYoutube(thongtin[0]?.youtube);
    }
  }, [thongtin]);

  const thongtinWeb = (
    <div className="my-5 md:flex md:items-center md:justify-around">
      <div className="p-3 m-2 shadow-md hover:shadow-lg">
        <img alt="" src={logoUrl ? logoUrl : logo} />
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { logo: logoUrl });
              thongbaoSucess("Logo");
            }}
          >
            Thay đổi Logo
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => uploadFile("thongtin", e, setLogoUrl)}
            />
          </Button>
        </div>
      </div>
      <div>
        <div className="p-3 my-5 shadow-md hover:shadow-lg">
          <div className="mb-2">
            <p className="font-bold">Tên Website (Title) :</p>
            <Input
              prefix={<EditOutlined />}
              className="my-1 rounded-lg"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              onClick={() => {
                updAllDocument("thongtin", { ten: ten });
                thongbaoSucess("tên Website");
              }}
            >
              Cập nhật nội dung
            </Button>
          </div>
        </div>
        <div className="p-3 my-5 shadow-md hover:shadow-lg">
          <div className="mb-2">
            <p className="font-bold">Tên miền (Domain) :</p>
            <Input
              prefix={<EditOutlined />}
              className="my-1 rounded-lg"
              value={tenmien}
              onChange={(e) => setTenmien(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              onClick={() => {
                updAllDocument("thongtin", { tenmien: tenmien });
                thongbaoSucess("tên miền");
              }}
            >
              Cập nhật nội dung
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const thongtinLienhe = (
    <div className="m-5 flex flex-wrap justify-around">
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Số điện thoại chính (Phone) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={sdtchinh}
            onChange={(e) => setSdtchinh(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { sdtchinh: sdtchinh });
              thongbaoSucess("số điện thoại chính");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Số điện thoại phụ (Phone) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={sdtphu}
            onChange={(e) => setSdtphu(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { sdtphu: sdtphu });
              thongbaoSucess("số điện thoại phụ");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Địa chỉ 1 (Address 1) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={diachi1}
            onChange={(e) => setDiachi1(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { diachi1: diachi1 });
              thongbaoSucess("diachi1");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Địa chỉ 2 (Address 2) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={diachi2}
            onChange={(e) => setDiachi2(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { diachi2: diachi2 });
              thongbaoSucess("địa chỉ 2");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Zalo (Zalo) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={zalo}
            onChange={(e) => setZalo(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { zalo: zalo });
              thongbaoSucess("zalo");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Instagram (Instagram) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { instagram: instagram });
              thongbaoSucess("Instagram");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Fanpage (Fanpage) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={fanpage}
            onChange={(e) => setFanpage(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { fanpage: fanpage });
              thongbaoSucess("Fanpage");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Messenger (Messenger) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={messenger}
            onChange={(e) => setMessenger(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { messenger: messenger });
              thongbaoSucess("Messenger");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <iframe
          className="w-full"
          title="map"
          src={map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Bản đồ Google (Google Map) :</p>
          <Input.TextArea
            // prefix={<EditOutlined /> || undefined}
            className="my-1 rounded-lg"
            value={map}
            onChange={(e) => setMap(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { map: map });
              thongbaoSucess("Google Map");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Địa chỉ GMail (GMail) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { gmail: gmail });
              thongbaoSucess("Gmail");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
      <div className="box-cauhinh">
        <div className="mb-2">
          <p className="font-bold">Kênh Youtube (Youtube) :</p>
          <Input
            prefix={<EditOutlined />}
            className="my-1 rounded-lg"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            fullWidth
            onClick={() => {
              updAllDocument("thongtin", { youtube: youtube });
              thongbaoSucess("Youtube");
            }}
          >
            Cập nhật nội dung
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Cấu
          hình chung
        </div>
        <Divider orientation="center">
          <div className="flex items-center text-lg font-bold text-blue-500">
            <MdWeb className="mr-2" /> THÔNG TIN WEBSITE
          </div>
        </Divider>
        {thongtinWeb}
        <Divider orientation="center">
          <div className="flex items-center text-lg font-bold text-blue-500">
            <IoMdContact className="mr-2" /> THÔNG TIN LIÊN HỆ
          </div>
        </Divider>
      </div>
      {thongtinLienhe}
    </Fragment>
  );
}
