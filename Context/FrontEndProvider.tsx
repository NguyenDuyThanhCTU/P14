"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface FrontEndContextType {
  gioHang: any[]; // Replace 'any[]' with the appropriate type for gioHang
  setGiohang: (gioHang: any) => any; // Replace 'any[]' with the appropriate type
  themSanpham: boolean;
  setThemSanpham: (themSanpham: boolean) => void;
  thanhToan: boolean;
  setThanhToan: (thanhToan: boolean) => void;
}

export const FrontEndContext = createContext<FrontEndContextType>({
  gioHang: [],
  setGiohang: () => null,
  themSanpham: false,
  setThemSanpham: () => {},
  thanhToan: false,
  setThanhToan: () => {},
});

interface FrontEndProviderProps {
  children: ReactNode;
}

export default function FrontEndProvider({ children }: FrontEndProviderProps) {
  const [gioHang, setGiohang] = useState<any[]>([]); // Replace 'any[]' with the appropriate type
  const [themSanpham, setThemSanpham] = useState<boolean>(false);
  const [thanhToan, setThanhToan] = useState<boolean>(false);

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

export const useFE = () => useContext(FrontEndContext);
