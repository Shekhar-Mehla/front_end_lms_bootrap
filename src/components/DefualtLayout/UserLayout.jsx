import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import SideBar from "../SideBar";
import { useState } from "react";
import Authorization from "../Authorization";

const UserLayout = () => {
  const [isLogIn, setIsLogin] = useState();

  return (
    <Authorization>
      <div className="bg-dark">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>

        <main>
          <Row
            style={{ minHeight: "100vh" }}
            className="bg-dark text-white    "
          >
            <Col className="container" md={2}>
              <h3>Welccome Back name</h3>
              <hr />
              <SideBar></SideBar>
            </Col>
            <Col md={10} className="container ">
              {" "}
              <Outlet></Outlet>
            </Col>
          </Row>
        </main>

        <Row style={{ minHeight: "10vh" }} className="  bg-dark text-white">
          <Col>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    </Authorization>
  );
};

export default UserLayout;
