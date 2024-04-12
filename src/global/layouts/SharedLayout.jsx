import Header from "./main/Header";
import Footer from "./main/Footer";
import React from "react";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
