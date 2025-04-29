import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const DefulatLayout = () => {
  return (
    <div className=" d-flex  flex-column  defaultLayout ">
      <Header></Header>
      <main className="flex flex-wrap">
        <Outlet></Outlet>
      </main>
      <Footer className=""></Footer>
    </div>
  );
};

export default DefulatLayout;
