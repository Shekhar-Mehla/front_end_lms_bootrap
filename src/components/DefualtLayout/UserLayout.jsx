import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import SideBar from "../SideBar";
import { useState } from "react";

const UserLayout = () => {
  const [isLogIn, setIsLogin] = useState();

  return (
    <Container className="bg-dark">
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      {isLogIn && (
        <main>
          <Row style={{ minHeight: "80vh" }} className="bg-dark text-white   ">
            <Col md={3} sm={3} lg={2}>
              <h3>Welccome Back name</h3>
              <hr />
              <SideBar></SideBar>
            </Col>
            <Col className="" md={9} sm={9} lg={10}>
              {" "}
              <Outlet></Outlet>
            </Col>
          </Row>
        </main>
      )}
      <Row style={{ minHeight: "10vh" }} className="  bg-dark text-white">
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLayout;
