import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Nav,
  Row,
  Spinner,
} from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlepublicBookActions } from "../feature/books/bookActions";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Book = () => {
  const { slug } = useParams();
  const ref = useRef(true);
  const { siglePublicBook } = useSelector((state) => state.bookInfo);
  const [show, setShow] = useState(true);
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    ref.current && dispatch(singlepublicBookActions(slug));
    ref.current = false;
    setImage(siglePublicBook.imageUrl);
    const time = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(time);
  }, [slug, dispatch, siglePublicBook]);
  console.log(image);
  const handeleOnClickImage = (url) => setImage(url);

  return (
    <Container style={{ minHeight: "100vh" }} className="bg-white text-dark ">
      <Row className="py-4">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All-Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{siglePublicBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
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
        <>
          {siglePublicBook?._id ? (
            <>
              <Row className="d-flex gap-3 justify-content-around ">
                <Col
                  className="d-flex justify-content-center  align-items-center flex-column gap-2  "
                  md={5}
                >
                  <div style={{ width: "250px", height: "250px" }}>
                    <motion.div
                      whileHover={{
                        scale: 2,
                        transition: { duration: 0.7 },
                      }}
                    >
                      <img
                        style={{
                          width: "250px",
                          height: "250px",
                          objectFit: "contain",
                        }}
                        src={
                          import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                          image?.slice(6)
                        }
                        alt="sdfghjh"
                      />
                    </motion.div>
                  </div>

                  <div className="d-flex flex-wrap">
                    {siglePublicBook?.imageList?.map((url, i) => {
                      return (
                        <div
                          key={i}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 5,
                              transition: { duration: 0.7 },
                            }}
                          >
                            {" "}
                            <img
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "contain",
                                objectPosition: "center",
                              }}
                              className="rounded-4"
                              onClick={() => handeleOnClickImage(url)}
                              src={
                                import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                                url?.slice(6)
                              }
                              alt={"ft"}
                            />
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </Col>
                <Col md={4} lg={4}>
                  <div className="d-flex justify-content-center align-items-center flex-grow-1 flex-column gap-4 ">
                    {" "}
                    <h1 style={{ letterSpacing: "2px" }}>
                      {siglePublicBook.title}
                    </h1>
                    <div className="fs-5" style={{ letterSpacing: "5px" }}>
                      <span className="fw-bolder ">
                        {siglePublicBook.author}
                      </span>
                      <span>-</span>
                      <span className="bolder">
                        {siglePublicBook?.publishedDate?.slice(0, 4)}
                      </span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap ">
                      <span style={{ letterSpacing: "5px" }} className="fs-5">
                        {siglePublicBook.genre} |
                      </span>
                      <span>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <span style={{ marginLeft: "8px" }}>400 Reviews</span>
                      </span>
                    </div>
                    <div>{siglePublicBook.smallDescription}</div>
                  </div>
                  <motion.div whileTap={{ scale: 0.6 }}>
                    <Button variant="dark" className="d-grid my-5 w-100">
                      Add To Borrowing List
                    </Button>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                      <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">Disabled</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </>
          ) : (
            <Alert variant="danger">
              This Book is not found please contact admin
            </Alert>
          )}
        </>
      )}
    </Container>
  );
};

export default Book;
