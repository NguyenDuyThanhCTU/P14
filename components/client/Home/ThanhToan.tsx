"use client";
import { useData } from "@Context/AppProvider";
import { useFE } from "@Context/FrontEndProvider";
import { DeleteOutlined } from "@ant-design/icons";
import { addDocument } from "@firebase/services";
import { Drawer } from "@mui/material";
import { Button, Input, message, notification } from "antd";
import React, { Fragment, useContext, useState } from "react";

export default function ThanhToan() {
  const { thongtin } = useData();
  const { thanhToan, setThanhToan, gioHang, setGiohang } = useFE();
  const [ten, setTen] = useState("");
  const [sdt, setSdt] = useState("");
  const [diachi, setDiachi] = useState("");
  const [hinhthuc, setHinhthuc] = useState("");
  const [ghichu, setGhichu] = useState("");
  const [checkXoa, setCheckxoa] = useState(false);
  const giaTien = gioHang.map((data) => data.tongtien);
  // eslint-disable-next-line no-eval
  const tongtien = eval(giaTien?.join("+"));
  function deleteByVal(uid: any) {
    for (let i = 0; i < gioHang.length; i++) {
      if (gioHang[i].uid === uid) {
        gioHang.splice(i, 1);
        break;
      }
    }
    return setGiohang(gioHang);
  }

  const datHang = () => {
    addDocument("donhang", {
      ten: ten,
      sdt: sdt,
      diachi: diachi,
      thanhtoan: hinhthuc,
      ghichu: ghichu,
      tongtien: Number(tongtien),
      sanpham: gioHang,
    });
    notification["success"]({
      message: "Đặt hàng thành công !",
      description: "Đơn hàng sẽ đến bạn trong thời gian sớm nhất.",
    });
    setThanhToan(false);
    setGiohang([]);
  };
  const thanhtoan = (
    <div className="m-5 w-[70vw] md:w-[30vw]">
      <p className="font-extrabold text-2xl text-center m-3 italic text-orange-500">
        ĐƠN ĐẶT HÀNG
      </p>
      <ul>
        {gioHang.map((data) => (
          <li
            key={data.uid}
            className="flex items-center justify-between py-2 px-5"
          >
            <div className="w-[50px] h-[50px] min-w-[50px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                alt=""
                src={data.photoURL}
              />
            </div>
            <div className="mx-5">
              <p className="text-green-700">
                {data.ten}{" "}
                <strong className="text-gray-500">{data.size}</strong>
              </p>
              <p className="text-red-500">
                {data.gia.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
            <div>
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                onClick={() => {
                  deleteByVal(data.uid);
                  setCheckxoa(!checkXoa);
                  message.error("Đã xoá sản phẩm...");
                }}
              ></Button>
            </div>
          </li>
        ))}
        <p className="text-center font-bold text-xl text-red-500 border-y-2 border-dotted py-1">
          Tổng tiền :{" "}
          {tongtien?.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        <div>
          <p className="font-extrabold text-2xl text-center m-3 italic text-blue-500">
            ĐIỀN THÔNG TIN
          </p>
          <form
            target="_blank"
            action={`https://formsubmit.co/${thongtin[0]?.gmail}`}
            method="POST"
          >
            <Input
              name="Tên KH"
              className="rounded-lg p-2 mb-3"
              required
              placeholder="Họ và tên..."
              onChange={(e) => setTen(e.target.value)}
            />
            <Input
              name="Số liên hệ"
              className="rounded-lg p-2 mb-3"
              required
              placeholder="Số liên hệ..."
              onChange={(e) => setSdt(e.target.value)}
            />
            <Input.TextArea
              name="Địa chỉ"
              className="rounded-lg p-2 mb-3"
              required
              placeholder="Địa chỉ giao hàng..."
              onChange={(e) => setDiachi(e.target.value)}
            />
            <select
              name="Hình thức thanh toán"
              className="w-full border rounded-lg p-3 mb-3"
              defaultValue="Thanh toán khi nhận hàng"
              onChange={(e) => setHinhthuc(e.target.value)}
            >
              <option value="Thanh toán khi nhận hàng">
                Thanh toán khi nhận hàng
              </option>
              <option value="Thanh toán chuyển khoản">
                Thanh toán chuyển khoản
              </option>
            </select>
            <Input.TextArea
              name="Ghi chú"
              className="rounded-lg p-2 mb-3"
              required
              placeholder="Ghi chú đơn hàng..."
              onChange={(e) => setGhichu(e.target.value)}
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500
      font-bold text-white w-full px-5 py-2 text-xl rounded-lg"
                onClick={datHang}
              >
                XÁC NHẬN ĐẶT HÀNG
              </button>
            </div>
          </form>
        </div>
      </ul>
    </div>
  );
  return (
    <Fragment>
      <Drawer
        anchor="right"
        open={thanhToan}
        onClose={() => setThanhToan(false)}
      >
        {thanhtoan}
      </Drawer>
    </Fragment>
  );
}
