import React from "react";
//Headers CSS Import
// import { useState } from 'react';
import "../cssFiles/footer.css";
//Headers jsx Import
//  import LoginSingup from "../components/LoginSingup";
import Footer from "./Footer";
import MainNav from "./MainNav";

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />

      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
