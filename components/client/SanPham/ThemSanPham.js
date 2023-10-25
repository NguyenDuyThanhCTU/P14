import { Button, Drawer } from "@mui/material";
import { Badge, notification } from "antd";
import React, { Fragment, useContext } from "react";
import { AppContext } from "./../../Context/AppProvider";
import { FrontEndContext } from "./../../Context/FrontEndProvider";

export default function ThemSanPham() {
  const { sanphamSelected, desktop } = useContext(AppContext);
  const { themSanpham, setThemSanpham, setGiohang } =
    useContext(FrontEndContext);
  const themGiohang = () => {
    setGiohang((prevState) => [
      ...prevState,
      {
        uid: sanphamSelected[0].uid,
        ten: sanphamSelected[0].ten,
        gia: Number(sanphamSelected[0].gia),
        tongtien: Number(sanphamSelected[0].gia),
        photoURL: sanphamSelected[0].photoURL,
      },
    ]);
    notification["success"]({
      message: "Thêm vào giỏ hàng thành công !",
      description: `Đã thêm sản phẩm ${sanphamSelected[0].ten} vào giỏ hàng.`,
    });
    setThemSanpham(false);
  };
  const sanPham = sanphamSelected.map((data) => (
    <div className="m-5" key={data.uid}>
      <Badge.Ribbon placement="start" color="red" text={data.loai1}>
        <div className="p-2 mb-7 h-full bg-white rounded-lg hover:shadow-xl flex justify-center items-center">
          <div className="w-[120px] h-[120px] min-w-[120px]">
            <img
              className="w-full h-full object-cover"
              alt=""
              src={data.photoURL}
            />
          </div>

          <div className="ml-4 flex flex-col justify-center items-center">
            <p className="font-bold text-center">{data.ten}</p>
            <p className="text-red-500 font-bold">
              {Number(data.gia).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <p className="text-[12px] line-through">
              Giá gốc :
              {Number(data.gia * 1.15).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        </div>
      </Badge.Ribbon>
      <div className="flex justify-center">
        <Button variant="contained" onClick={themGiohang}>
          THÊM VÀO GIỎ HÀNG
        </Button>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Drawer
        anchor={desktop ? "left" : "top"}
        open={themSanpham}
        onClose={() => setThemSanpham(false)}
      >
        {sanPham}
      </Drawer>
    </Fragment>
  );
}
