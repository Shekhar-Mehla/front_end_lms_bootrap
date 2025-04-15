import React, { useEffect } from "react";
import Hero from "../components/pageSections/homePageSection/Hero";
import JustIn from "../components/pageSections/homePageSection/JustIn";
import BestRead from "../components/pageSections/homePageSection/BestRead";
import Recomdation from "../components/pageSections/homePageSection/Recomdation";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { publicBookActions } from "../feature/books/bookActions";

const Home = () => {
  const dispatch = useDispatch();
  

  const ref = useRef(true);

  useEffect(() => {
    ref.current === true && dispatch(publicBookActions());
    ref.current = false;
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "white" }} className="p-3">
      <Container className="">
        <Row style={{ marginBottom: "" }} className="">
          <Col>
            <Hero></Hero>
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
      </Container>
      {/* hero */}
    </div>
  );
};

export default Home;
