import Baiviet from "@components/client/Home/BaiViet";
import CauHoi from "@components/client/Home/CauHoi";
import DanhGia from "@components/client/Home/DanhGia";
import Footer from "@components/client/Home/Footer";
import Header from "@components/client/Home/Header";
import Hotline from "@components/client/Items/Hotline";
import React from "react";

export const metadata = {
  title: "THỦY SẢN THIÊN NGỌC",
  description: "Công Ty TNHH Nông Sản - Thủy Sản Thiên Ngọc",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      <div className="w-[1470px] mx-auto">{children}</div>
      <div className="fixed right-0 top-96 z-50">
        <Hotline />
      </div>
      <Baiviet />
      <DanhGia />
      <CauHoi />
      <Footer />
    </div>
  );
};

export default layout;
