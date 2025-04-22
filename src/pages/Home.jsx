import React, { useEffect, useState } from "react";
import Hero from "../components/pageSections/homePageSection/Hero";
import JustIn from "../components/pageSections/homePageSection/JustIn";
import BestRead from "../components/pageSections/homePageSection/BestRead";
import Recomdation from "../components/pageSections/homePageSection/Recomdation";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { publicBookActions } from "../feature/books/bookActions";
import { Navigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const ref = useRef(true);

  useEffect(() => {
    ref.current === true && dispatch(publicBookActions());

    const time = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(time);
  }, [show, dispatch, ref]);
  console.log(show);
  return (
    <div style={{ minHeight: "100vh", background: "white" }} className="p-3">
      {show == true ? (
        <>
          <center className="py-5">
            <div className=" d-flex justify-content-center pt-5  align-items-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden  text-dark">Loading...</span>
              </Spinner>
            </div>
            <div className=" d-flex justify-content-center   align-items-center">
              <div>please wait...</div>
            </div>
          </center>
        </>
      ) : (
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
      )}

      {/* hero */}
    </div>
  );
};

export default Home;
