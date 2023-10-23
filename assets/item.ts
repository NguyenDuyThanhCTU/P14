import { SiZalo } from "react-icons/si";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
} from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaFirstOrderAlt, FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCubeSend,
  TbListDetails,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdManageAccounts,
  MdOutlineLocalCarWash,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoMdColorWand } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";

import { CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { IoFlashOutline } from "react-icons/io5";

interface IconMappingType {
  [key: string]: IconType;
}

export const IconMapping: IconMappingType = {
  IoFlashOutline: IoFlashOutline,
  MdManageAccounts: MdManageAccounts,
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
  FaFirstOrderAlt: FaFirstOrderAlt,
  AiOutlineSlack: AiOutlineSlack,
  BsBatteryCharging: BsBatteryCharging,
  IoMdColorWand: IoMdColorWand,
  MdAirlineSeatReclineNormal: MdAirlineSeatReclineNormal,
  CgSize: CgSize,
  MdOutlineLocalCarWash: MdOutlineLocalCarWash,
  TbCarouselHorizontal: TbCarouselHorizontal,
  GiExitDoor: GiExitDoor,
  AiOutlineProfile: AiOutlineProfile,
  BsFillSendExclamationFill: BsFillSendExclamationFill,
  BsFillSendCheckFill: BsFillSendCheckFill,
  TbCubeSend: TbCubeSend,
  BsFillSendXFill: BsFillSendXFill,
  CiViewList: CiViewList,
};

export const ProductSidebarAdmin = [
  {
    name: "Giới thiệu",
    icon: "AiOutlineSlack",
  },
  {
    name: "Sản phẩm",
    icon: "FaFirstOrderAlt",
  },
  {
    name: "Sale",
    icon: "IoFlashOutline",
  },
  {
    name: "Đơn hàng",
    icon: "AiOutlineUnorderedList",
  },
  {
    name: "Chi nhánh",
    icon: "CgListTree",
  },
];

export const WebsiteSidebarAdmin = [
  {
    name: "Thông tin website",
    icon: "TbListDetails",
  },
  {
    name: "Slide trình chiếu",
    icon: "TbSlideshow",
  },
  {
    name: "Kênh truyền thông",
    icon: "BiNetworkChart",
  },
  {
    name: "Bài viết",
    icon: "MdOutlinePostAdd",
  },
  {
    name: "Video",
    icon: "BiSlideshow",
  },
  {
    name: "Tài khoản",
    icon: "MdManageAccounts",
  },
];

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    title: "Trang Twitter",
    icon: "AiOutlineTwitter",
    image:
      "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const OrderDashboardItems = [
  {
    name: "Mới",
    icon: "BsFillSendExclamationFill",
  },
  {
    name: "Đã phản hồi",
    icon: "BsFillSendCheckFill",
  },
  {
    name: "Đã thanh toán",
    icon: "TbCubeSend",
  },
  {
    name: "Hủy đơn",
    icon: "BsFillSendXFill",
  },
  {
    name: "Chi tiết đơn hàng",
    icon: "CiViewList",
  },
];

/*<---------------------------------------------------------- Custom System ----------------------------------------------------------> */

export const SocialMediaCustom = [
  {
    id: 0,
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-600 hover:bg-white ",
  },
  {
    id: 1,
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },

  {
    id: 5,
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    id: 7,
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const HeaderItems = [
  {
    name: "Trang chủ",
    link: "",
  },
  {
    name: "Danh mục sản phẩm",
    link: "san-pham/khoa-cua-van-tay",
  },
  {
    name: "Sản phẩm",
    link: "san-pham/tat-ca",
  },
  {
    name: "Dịch vụ",
    link: "dich-vu",
  },
  {
    name: "Công trình thực tế",
    link: "cong-trinh-thuc-te",
  },
  {
    name: "Giới thiệu",
    link: "bai-viet/gioi-thieu",
  },
  {
    name: "Hỗ trợ",
    link: "bai-viet/ho-tro",
  },
  {
    name: "Liên hệ",
    link: "lien-he",
  },
];

export const ToolsTipsSocialMediaItems = [
  {
    title: "zalo.me/...",
  },
  {
    title: "www.facebook.com/...",
  },
  {
    title: "www.facebook.com/plugins/page.php?href=....",
  },
  {
    title: "",
  },
  {
    title: "www.instagram.com/...",
  },
  {
    title: "www.tiktok.com/...",
  },
  {
    title: "www.twitter.com/...",
  },
  {
    title: "www.youtube.com/...",
  },
];

/*<-------------------------------------------------------------------------------------------------------------------- CUSTOM --------------------------------------------------------------------------------------------------------------------> */

export const TypePostItems = [
  {
    label: "Dịch vụ",
    value: "dich-vu",
  },
  {
    label: "Công trình thực tế",
    value: "cong-trinh-thuc-te",
  },
  {
    label: "Giới thiệu",
    value: "gioi-thieu",
  },
  {
    label: "Hướng dẫn sử dụng",
    value: "huong-dan-su-dung",
  },
  {
    label: "Catalogue Sản phẩm",
    value: "catalogue-san-pham",
  },
  {
    label: "Chính sách đổi trả",
    value: "chinh-sach-doi-tra",
  },
  {
    label: "Điều khoản sử dụng",
    value: "dieu-khoan-su-dung",
  },
  {
    label: "Chính sách và quy định chung",
    value: "chinh-sach-va-quy-dinh-chung",
  },
  {
    label: "Chính sách bảo hành",
    value: "chinh-sach-bao-hanh",
  },
  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
  },
  {
    label: "Chính sách giao hàng",
    value: "chinh-sach-giao-hang",
  },
  {
    label: "Phương thức thanh toán",
    value: "phuong-thuc-thanh-toan",
  },
];

export const TypeProductItems = [
  {
    label: "Motor cổng tự động",
    value: "motor-cong-tu-dong",
  },
  {
    label: "Thiết bị nhà thông minh",
    value: "thiet-bi-nha-thong-minh",
  },

  {
    label: "Bộ khóa cổng inox",
    value: "bo-khoa-cong-inox",
  },
  {
    label: "Bộ khóa vân tay Hàn Quốc",
    value: "bo-khoa-van-tay-han-quoc",
  },
  {
    label: "Bộ khóa cổng",
    value: "bo-khoa-cong",
  },
  {
    label: "Bộ từ hút - chốt thả",
    value: "bo-tu-hut-chot-tha",
  },
  {
    label: "Khóa cửa vân tay",
    value: "khóa-cua-van-tay",
  },
  {
    label: "Khóa Khách Sạn (Chung Cư) / Khóa Tủ",
    value: "khoa-khach-san-chung-cu-khoa-tu",
  },
  {
    label: "Kiểm soát cửa - Thiết bị Access Control",
    value: "kiem-soat-cua-thiet-bi-access-control",
  },
  {
    label: "Cửa tự động - Motor tự động",
    value: "cua-tu-dong-motor-tu-dong",
  },
  {
    label: "Hệ thống khác",
    value: "he-thong-khac",
  },
];

export const ProductFunctionType = [
  {
    label: "Bộ Khóa Pro (UPS/ Vân tay/ Thẻ/ Số/ Remote/Chìa Cơ)",
  },
  {
    label: "Bộ Khóa Pro , Vân tay , Có sẵn bộ tích điện",
  },
  {
    label: "Bộ Khóa Plus ( Vân tay/ Thẻ/ Số/ Remote/Chìa Cơ)",
  },
  {
    label: "Bộ Khóa Basic, Thẻ từ, Mã Số, Remote, Chìa Cơ",
  },
  {
    label: "Bộ Khóa Basic ( Thẻ/ Số/ Remote/Chìa Cơ)",
  },
  {
    label: "Korea",
  },
  {
    label: "Full",
  },
  {
    label: "Bộ Khóa Plus , Vân tay, Thẻ Từ, Mã Số, Remote, Chìa Cơ",
  },
  {
    label: "Bộ Khóa Plus, Vân tay, Nguồn thường",
  },
];

export const ProductPriceItems = [
  {
    label: "Dưới 950.000đ",
  },
  {
    label: "1,000,000₫ - 1,950,000₫",
  },
  {
    label: "2,000,000₫ - 4,950,000₫",
  },
  {
    label: "5,000,000₫ - 9,900,000₫",
  },
  {
    label: "Trên 10,000,000₫",
  },
];

export const PolicyTopics = [
  {
    label: "Chính sách đổi trả",
    value: "chinh-sach-doi-tra",
  },
  {
    label: "Điều khoản sử dụng",
    value: "dieu-khoan-su-dung",
  },
  {
    label: "Chính sách và quy định chung",
    value: "chinh-sach-va-quy-dinh-chung",
  },
  {
    label: "Chính sách bảo hành",
    value: "chinh-sach-bao-hanh",
  },
  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
  },
  {
    label: "Chính sách giao hàng",
    value: "chinh-sach-giao-hang",
  },
  {
    label: "Phương thức thanh toán",
    value: "phuong-thuc-thanh-toan",
  },
];

export {};
