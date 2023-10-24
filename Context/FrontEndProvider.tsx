import { createContext, useState } from "react";
export const FrontEndContext = createContext();

export default function FrontEndProvider({ children }) {
  const [gioHang, setGiohang] = useState([]);
  const [themSanpham, setThemSanpham] = useState(false);
  const [thanhToan, setThanhToan] = useState(false);
  return (
    <FrontEndContext.Provider
      value={{
        gioHang,
        setGiohang,
        themSanpham,
        setThemSanpham,
        thanhToan,
        setThanhToan,
      }}
    >
      {children}
    </FrontEndContext.Provider>
  );
}
