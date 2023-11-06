import Baiviet from "@components/client/Home/BaiViet";
import CauHoi from "@components/client/Home/CauHoi";
import DanhGia from "@components/client/Home/DanhGia";
import Footer from "@components/client/Home/Footer";
import Header from "@components/client/Home/Header";
import Hotline from "@components/client/Items/Hotline";
import React from "react";
import "@styles/styles.css";
export const metadata = {
  title: "THỦY SẢN THIÊN NGỌC",
  description: "Công Ty TNHH Nông Sản - Thủy Sản Thiên Ngọc",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      <div className="  ">{children}</div>

      <div className="fixed right-0 top-40 z-50">
        <Hotline />
      </div>

      <div className="bg-cover py-5 bg-[url(https://www.msc.org/images/default-source/msc-english/content-banner/content-hero-images-1920px-x-1080px/rs14483_istock-104669275-ocean-wave-breaking.jpg?sfvrsn=9c452f0_11)] bg-no-repeat">
        <Baiviet />
        <DanhGia />
        <CauHoi />
      </div>
      <Footer />
    </div>
  );
};

export default layout;
