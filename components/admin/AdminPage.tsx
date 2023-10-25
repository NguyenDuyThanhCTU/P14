"use client";
import React from "react";
import { useData } from "../../Context/AppProvider";

import Login from "@components/Login/Login";
import Header from "./Header";

export default function AdminPage() {
  const { componentsSwitch, componentSelect } = useData();
  return (
    <>
      <Header />
      <Login />

      <div className="mt-[80px]">{componentsSwitch(componentSelect)}</div>
    </>
  );
}
