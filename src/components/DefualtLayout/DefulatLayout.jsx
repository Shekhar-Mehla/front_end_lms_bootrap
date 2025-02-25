import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const DefulatLayout = () => {
  return (
    <div className="bg-dark d-flex  flex-column  defaultLayout ">
      <Header></Header>
      <main className="flex flex-wrap">
        <Outlet></Outlet>
      </main>
      <Footer className=""></Footer>
    </div>
  );
};

export default DefulatLayout;
