import Baiviet from "@components/client/Home/BaiViet";
import CauHoi from "@components/client/Home/CauHoi";
import DanhGia from "@components/client/Home/DanhGia";
import Footer from "@components/client/Home/Footer";
import Header from "@components/client/Home/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {/* {children} */}
      {/* <Baiviet />
      <DanhGia />
      <CauHoi />
      <Footer /> */}
    </div>
  );
};

export default layout;
