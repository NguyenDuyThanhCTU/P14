"use client";
import { notification } from "antd";
import React, { createContext, useEffect, useState, useContext } from "react";

import useCollection from "../Hooks/useCollection";
import { useRouter } from "next/navigation";
import CauHinhChung from "@components/admin/CauHinhChung";
import SliderShow from "@components/admin/SliderShow";
import SanPham from "@components/admin/SanPham";
import LoaiSanPham from "@components/admin/LoaiSanPham";
import DonHang from "@components/admin/DonHang";
import DoanhThu from "@components/admin/DoanhThu";
import BaiViet from "@components/admin/BaiViet";
import TinTuc from "@components/admin/TinTuc";
import HinhAnh from "@components/admin/HinhAnh";
import Video from "@components/admin/Video";
import DanhGia from "@components/admin/DanhGia";
import CauHoi from "@components/admin/CauHoi";
import PhanHoi from "@components/admin/PhanHoi";
import SEOTuKhoa from "@components/admin/SEOTuKhoa";
import TaiKhoan from "@components/admin/TaiKhoan";

export type AppContextType = {
  desktop: boolean;
  thongtin: any;
  uid: string;
  search: string;
  ketqua: any;
  setSearch: (search: string) => void;
  setUid: (uid: string) => void;
  loai: string;
  setLoai: (loai: string) => void;
  slidershow: any;
  slidershowSelected: any;
  sanpham: any;
  sanphamSelected: any;
  sanphamsalesoff: any;
  sanphammoi: any;
  sanphamnoibat: any;
  loaisanpham: any;
  loaisanphamSelected: any;
  sanphamtheoloai: any;
  sanphamtheoloai1: any;
  sanphamtheoloai2: any;
  donhang: any;
  taikhoan: any;
  doanhthu: any;
  baiviet: any;
  baivietSelected: any;
  tintuc: any;
  tintucSelected: any;
  video: any;
  cauhoi: any;
  cauhoiSelected: any;
  videoSelected: any;
  danhgia: any;
  phanhoi: any;
  tukhoa: any;
  router: any;
  componentSelect: any;
  setComponentSelect: (selected: string) => void;
  componentsSwitch: (selected: string) => any;
  thongbaoSucess: (noti: string) => void;
  thongbaoError: (noti: string) => void;
  editor: any;
  setEditor: (editor: any) => void;
};

export const AppContext = createContext<AppContextType>({
  desktop: false,
  thongtin: "",
  uid: "",
  search: "",
  ketqua: [],
  setSearch: () => {},
  setUid: () => {},
  loai: "",
  setLoai: () => {},
  slidershow: "",
  slidershowSelected: "",
  sanpham: "",
  sanphamSelected: "",
  sanphamsalesoff: "",
  sanphammoi: "",
  sanphamnoibat: "",
  loaisanpham: "",
  loaisanphamSelected: "",
  sanphamtheoloai: "",
  sanphamtheoloai1: "",
  sanphamtheoloai2: "",
  donhang: "",
  taikhoan: "",
  doanhthu: "",
  baiviet: "",
  baivietSelected: "",
  tintuc: "",
  tintucSelected: "",
  video: "",
  cauhoi: "",
  cauhoiSelected: "",
  videoSelected: "",
  danhgia: "",
  phanhoi: "",
  tukhoa: "",
  router: "",
  componentSelect: "",
  setComponentSelect: () => {},
  componentsSwitch: () => null,
  thongbaoSucess: () => {},
  thongbaoError: () => {},
  editor: "",
  setEditor: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  // Responsive App
  const [desktop, setDesktop] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
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
    if (windowSize.width && windowSize.width > 768) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  }, [windowSize]);

  // Switch Components
  const [componentSelect, setComponentSelect] = useState<string>("sanpham");
  const componentsSwitch = (selected: string) => {
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
        router.push("/");
        break;
      default:
        break;
    }
  };

  // Collection Data
  const [uid, setUid] = useState<string>("");
  const [loai, setLoai] = useState<string>("");
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

  const slidershowSelected = slidershow.filter((obj: any) => {
    return obj.uid === uid;
  });
  const sanphamSelected = sanpham.filter((obj: any) => {
    return obj.uid === uid;
  });
  const sanphamsalesoff = sanpham.filter((obj: any) => {
    return obj.phanloai === "Sản phẩm sales off";
  });
  const sanphammoi = sanpham.filter((obj: any) => {
    return obj.phanloai === "Sản phẩm mới";
  });
  const sanphamnoibat = sanpham.filter((obj: any) => {
    return obj.phanloai === "Sản phẩm nổi bật";
  });
  const loaisanphamSelected = loaisanpham.filter((obj: any) => {
    return obj.uid === uid;
  });
  const sanphamtheoloai = sanpham.filter((obj: any) => {
    return obj.loai1 === loai;
  });
  const sanphamtheoloai1 = sanpham.filter((obj: any) => {
    return obj.loai1 === loai;
  });
  const sanphamtheoloai2 = sanpham.filter((obj: any) => {
    return obj.loai2 === loai;
  });
  const tintucSelected = tintuc.filter((obj: any) => {
    return obj.uid === uid;
  });
  const baivietSelected = baiviet.filter((obj: any) => {
    return obj.uid === uid;
  });
  const videoSelected = video.filter((obj: any) => {
    return obj.uid === uid;
  });
  const cauhoiSelected = cauhoi.filter((obj: any) => {
    return obj.uid === uid;
  });

  // Thong bao
  const thongbaoSucess = (noti: string) => {
    notification["success"]({
      message: "Cập nhật nội dung thành công !",
      description: `Đã cập nhật thông tin ${noti} thành công !`,
    });
  };
  const thongbaoError = (noti: string) => {
    notification["error"]({
      message: "Cập nhật nội dung thất bại !",
      description: `${noti}`,
    });
  };
  const [search, setSearch] = useState<string>("");
  const [ketqua, setKetqua] = useState<any[]>([]);
  function filterResults(list: any[], keyword: string) {
    return list.filter((x) => {
      const arr = x.ten.toLowerCase().split(" ");
      return arr.some((y: any) => keyword.toLowerCase().includes(y));
    });
  }
  useEffect(() => {
    setKetqua(filterResults(sanpham, search));
  }, [sanpham, search]);

  // React Quill
  const [editor, setEditor] = useState<{ value: null }>({ value: null });

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
        router,
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
};

export const useData = () => useContext(AppContext);
