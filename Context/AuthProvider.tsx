"use client";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { useRouter } from "next/navigation";
import useCollection from "./../Hooks/useCollection";

interface AuthContextType {
  router: any;
  user: string;
  setUser: (user: string) => void;
  pass: string;
  setPass: (pass: string) => void;
  login: boolean;
  setLogin: (login: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  router: "",
  user: "",
  setUser: () => {},
  pass: "",
  setPass: () => {},
  login: false,
  setLogin: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  const taikhoan = useCollection("taikhoan");
  const USER = taikhoan.map((data: any) => data.user);
  const PASS = taikhoan.map((data: any) => data.pass);

  useEffect(() => {
    if (user === "admin" && pass === "ads2512") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [router, user, pass, USER, PASS]);

  return (
    <AuthContext.Provider
      value={{ router, user, setUser, pass, setPass, login, setLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
