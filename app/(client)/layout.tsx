import Baiviet from "@components/client/Home/BaiViet";
import CauHoi from "@components/client/Home/CauHoi";
import DanhGia from "@components/client/Home/DanhGia";
import Footer from "@components/client/Home/Footer";
import Header from "@components/client/Home/Header";
import Hotline from "@components/client/Items/Hotline";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      {children}
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
