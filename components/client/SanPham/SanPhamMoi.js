import React, { Fragment, useContext } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { AppContext } from "../../Context/AppProvider";
import SanPham from "./SanPham";

export default function SanPhamMoi() {
  const { navigate, sanphammoi } = useContext(AppContext);
  return (
    <Fragment>
      <div className="web-bg">
        <div className="p-2 bg-gradient-to-tr from-white to-yellow-300 rounded-lg">
          <div className="flex justify-center items-center p-3">
            <p className="md:text-3xl text-xl italic text-black font-extrabold">
              SẢN PHẨM MỚI
            </p>
          </div>

          <SanPham sanpham={sanphammoi} />
          <div className="flex justify-center items-center m-3">
            <button
              className="text-white py-2 px-5 bg-red-500 rounded-lg font-bold text-xl"
              onClick={() => {
                navigate("/tatcasanpham");
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 1000);
              }}
            >
              XEM TẤT CẢ...
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
