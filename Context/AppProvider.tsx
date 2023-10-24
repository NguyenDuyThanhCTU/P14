import { notification } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaiViet from "../BackEnd/Home/BaiViet";
import CauHinhChung from "../BackEnd/Home/CauHinhChung";
import DanhGia from "../BackEnd/Home/DanhGia";
import DoanhThu from "../BackEnd/Home/DoanhThu";
import PhanHoi from "../BackEnd/Home/PhanHoi";
import SanPham from "../BackEnd/Home/SanPham";
import SEOTuKhoa from "../BackEnd/Home/SEOTuKhoa";
import TaiKhoan from "../BackEnd/Home/TaiKhoan";
import TinTuc from "../BackEnd/Home/TinTuc";
import Video from "../BackEnd/Home/Video";
import CauHoi from "./../BackEnd/Home/CauHoi";
import DonHang from "./../BackEnd/Home/DonHang";
import HinhAnh from "./../BackEnd/Home/HinhAnh";
import LoaiSanPham from "./../BackEnd/Home/LoaiSanPham";
import SliderShow from "./../BackEnd/Home/SliderShow";
import useCollection from "./../Hooks/useCollection";
export const AppContext = createContext();

export default function AppProvider({ children }) {
  const navigate = useNavigate();

  //Responsive App
  const [desktop, setDesktop] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    if (windowSize.width > 768) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  }, [windowSize]);

  //Switch Components
  const [componentSelect, setComponentSelect] = useState("sanpham");
  const componentsSwitch = (selected) => {
    switch (selected) {
      case "cauhinhchung":
        return <CauHinhChung />;
      case "slidershow":
        return <SliderShow />;
      case "sanpham":
        return <SanPham />;
      case "loaisanpham":
        return <LoaiSanPham />;
      case "donhang":
        return <DonHang />;
      case "doanhthu":
        return <DoanhThu />;
      case "baiviet":
        return <BaiViet />;
      case "tintuc":
        return <TinTuc />;
      case "hinhanh":
        return <HinhAnh />;
      case "video":
        return <Video />;
      case "danhgia":
        return <DanhGia />;
      case "cauhoi":
        return <CauHoi />;
      case "phanhoi":
        return <PhanHoi />;
      case "SEOtukhoa":
        return <SEOTuKhoa />;
      case "taikhoan":
        return <TaiKhoan />;
      case "trangchu":
        navigate("/");
        break;
      default:
        break;
    }
  };
  //Collection Data
  const [uid, setUid] = useState("");
  const [loai, setLoai] = useState("");
  const thongtin = useCollection("thongtin");
  const taikhoan = useCollection("taikhoan");
  const doanhthu = useCollection("doanhthu");
  const slidershow = useCollection("slidershow");
  const sanpham = useCollection("sanpham");
  const loaisanpham = useCollection("loaisanpham");
  const donhang = useCollection("donhang");
  const baiviet = useCollection("baiviet");
  const tintuc = useCollection("tintuc");
  const video = useCollection("video");
  const danhgia = useCollection("danhgia");
  const phanhoi = useCollection("phanhoi");
  const tukhoa = useCollection("tukhoa");
  const cauhoi = useCollection("cauhoi");
  //
  const slidershowSelected = slidershow.filter((obj) => {
    return obj.uid === uid;
  });
  const sanphamSelected = sanpham.filter((obj) => {
    return obj.uid === uid;
  });
  const sanphamsalesoff = sanpham.filter((obj) => {
    return obj.phanloai === "Sản phẩm sales off";
  });
  const sanphammoi = sanpham.filter((obj) => {
    return obj.phanloai === "Sản phẩm mới";
  });
  const sanphamnoibat = sanpham.filter((obj) => {
    return obj.phanloai === "Sản phẩm nổi bật";
  });
  const loaisanphamSelected = loaisanpham.filter((obj) => {
    return obj.uid === uid;
  });
  const sanphamtheoloai = sanpham.filter((obj) => {
    return obj.loai1 === loai;
  });
  const sanphamtheoloai1 = sanpham.filter((obj) => {
    return obj.loai1 === loai;
  });
  const sanphamtheoloai2 = sanpham.filter((obj) => {
    return obj.loai2 === loai;
  });
  const tintucSelected = tintuc.filter((obj) => {
    return obj.uid === uid;
  });
  const baivietSelected = baiviet.filter((obj) => {
    return obj.uid === uid;
  });
  const videoSelected = video.filter((obj) => {
    return obj.uid === uid;
  });
  const cauhoiSelected = cauhoi.filter((obj) => {
    return obj.uid === uid;
  });
  // Thong bao
  const thongbaoSucess = (noti) => {
    notification["success"]({
      message: "Cập nhật nội dung thành công !",
      description: `Đã cập nhật thông tin ${noti} thành công !`,
    });
  };
  const thongbaoError = (noti) => {
    notification["error"]({
      message: "Cập nhật nội dung thất bại !",
      description: `${noti}`,
    });
  };
  const [search, setSearch] = useState("");
  const [ketqua, setKetqua] = useState([]);
  function filterResults(list, keyword) {
    return list.filter((x) => {
      const arr = x.ten.toLowerCase().split(" ");
      return arr.some((y) => keyword.toLowerCase().includes(y));
    });
  }
  useEffect(() => {
    setKetqua(filterResults(sanpham, search));
  }, [sanpham, search]);
  //React Quill
  const [editor, setEditor] = React.useState({ value: null });

  return (
    <AppContext.Provider
      value={{
        desktop,
        thongtin,
        uid,
        search,
        ketqua,
        setSearch,
        setUid,
        loai,
        setLoai,
        slidershow,
        slidershowSelected,
        sanpham,
        sanphamSelected,
        sanphamsalesoff,
        sanphammoi,
        sanphamnoibat,
        loaisanpham,
        loaisanphamSelected,
        sanphamtheoloai,
        sanphamtheoloai1,
        sanphamtheoloai2,
        donhang,
        taikhoan,
        doanhthu,
        baiviet,
        baivietSelected,
        tintuc,
        tintucSelected,
        video,
        cauhoi,
        cauhoiSelected,
        videoSelected,
        danhgia,
        phanhoi,
        tukhoa,
        navigate,
        componentSelect,
        setComponentSelect,
        componentsSwitch,
        thongbaoSucess,
        thongbaoError,
        editor,
        setEditor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
