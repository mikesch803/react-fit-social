import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";

export function WithHeader() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}