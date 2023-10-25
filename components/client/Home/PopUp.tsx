"use client";
import { useData } from "@Context/AppProvider";
import { useFE } from "@Context/FrontEndProvider";
import { DeleteOutlined } from "@ant-design/icons";
import { Badge, Button, message, Popover } from "antd";
import React, { Fragment, useContext, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { RiShoppingBag3Fill } from "react-icons/ri";

export default function PopUp() {
  const { thongtin } = useData();
  const { gioHang, setGiohang, setThanhToan } = useFE();
  const [checkXoa, setCheckxoa] = useState(false);
  const giaTien = gioHang.map((data) => data.tongtien);
  // eslint-disable-next-line no-eval
  const tongtien = eval(giaTien.join("+"));
  function deleteByVal(uid: any) {
    for (let i = 0; i < gioHang.length; i++) {
      if (gioHang[i].uid === uid) {
        gioHang.splice(i, 1);
        break;
      }
    }
    return setGiohang(gioHang);
  }
  const tongHang = (
    <div>
      {tongtien === undefined ? (
        <div>
          <p className="text-center italic">
            Giỏ hàng của bạn hiện tại đang trống !
          </p>
        </div>
      ) : (
        <ul>
          {gioHang.map((data) => (
            <li
              key={data.uid}
              className="flex items-center justify-between py-2 px-5"
            >
              <div className="w-[50px] h-[50px]">
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
          <p className="text-center font-bold text-xl text-red-500 border-t-2 border-dotted py-1">
            Tổng tiền :{" "}
            {tongtien?.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <div className="flex justify-center items-center">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500
      font-bold text-white w-full px-5 py-1 rounded-lg"
              onClick={() => setThanhToan(true)}
            >
              THANH TOÁN
            </button>
          </div>
        </ul>
      )}
    </div>
  );
  return (
    <Fragment>
      <div className="fixed z-50 bottom-5 left-5 w-[50px] cursor-pointer">
        <Popover placement="topRight" trigger="click" content={tongHang}>
          <Badge
            color="blue"
            count={
              Object.keys(gioHang).length === 0
                ? "O"
                : Object.keys(gioHang).length
            }
            showZero={true}
          >
            <div className="p-2 bg-blue-700 border border-dotted rounded-full border-black flex justify-center items-center">
              <RiShoppingBag3Fill className="text-[28px] text-white" />
            </div>
          </Badge>
        </Popover>
      </div>
      <div className="fixed z-50 bottom-5 right-5 w-[50px] cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5">
            <img
              onClick={() => window.open(`${thongtin[0].messenger}`)}
              alt=""
              src="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-Free-Image.png"
            />
          </div>
          <div className="mb-5">
            <img
              onClick={() => window.open(`https://zalo.me/${thongtin[0].zalo}`)}
              alt=""
              src="https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png"
            />
          </div>
          <div>
            <BsFillArrowUpCircleFill
              className="text-white"
              size={"40px"}
              onClick={() => window.scroll(0, 0)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
