import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCollection from "./../Hooks/useCollection";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  const taikhoan = useCollection("taikhoan");
  const USER = taikhoan.map((data) => data.user);
  const PASS = taikhoan.map((data) => data.pass);
  useEffect(() => {
    if (user === "admin" && pass === "ads2512") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [navigate, user, pass, USER, PASS]);

  return (
    <AuthContext.Provider
      value={{ navigate, user, setUser, pass, setPass, login, setLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
