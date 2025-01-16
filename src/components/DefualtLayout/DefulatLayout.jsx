import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const DefulatLayout = () => {
  return (
    <div className="bg-dark d-flex  flex-column  defaultLayout ">
      <Header></Header>
      <main >
        <Outlet></Outlet>
      </main>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default DefulatLayout;
