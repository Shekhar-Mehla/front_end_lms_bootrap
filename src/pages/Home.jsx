import React from "react";
import Hero from "../components/pageSections/homePageSection/Hero";
import JustIn from "../components/pageSections/homePageSection/JustIn";
import BestRead from "../components/pageSections/homePageSection/BestRead";
import Recomdation from "../components/pageSections/homePageSection/Recomdation";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div
      style={{ minHeight: "100vh", background: "white" }}
      className="container"
    >
      {/* hero */}
      <Row>
        <Col>
          <Hero>


            
          </Hero>
        </Col>
      </Row>
      {/* justin */}
      <Row>
        <Col>
          <JustIn></JustIn>
        </Col>
      </Row>
      {/* best read */}
      <Row>
        <Col>
          <BestRead></BestRead>
        </Col>
      </Row>
      {/* recom read */}
      <Row>
        <Col>
          <Recomdation></Recomdation>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
