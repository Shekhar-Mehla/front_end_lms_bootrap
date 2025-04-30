import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Nav,
  Row,
  Spinner,
  Tab,
  Tabs,
} from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, Links, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlepublicBookActions } from "../feature/books/bookActions";

import { motion } from "framer-motion";
import Review from "./Review";
import Star from "../components/stars/Star";
import { setCartList } from "../feature/cart/cartSlice";
import { use } from "react";
import { toast } from "react-toastify";

const Book = () => {
  const { slug } = useParams();
  const ref = useRef(true);
  const { siglePublicBook } = useSelector((state) => state.bookInfo);
  const [show, setShow] = useState(true);
  const [image, setImage] = useState("");
  const { cart } = useSelector((state) => state.cartInfo);
  const navigate = useNavigate();

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

  const handeleOnClickImage = (url) => setImage(url);
  // add book on button click to add to borrowList
  const handleOnAddingBookToCart = (siglePublicBook) => {
    // check cart list if book is already in the cart list
    toast("book has been added to cart");
    dispatch(setCartList(siglePublicBook));
  };
  const handleOnProceedToCart = () => {
    navigate("/cart");
  };

  return (
    <Container style={{ minHeight: "80vh" }} className="bg-white text-dark ">
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
              <Row className="d-flex gap-3 justify-content-center ">
                <Col
                  className="d-flex justify-content-center  align-items-center flex-column gap-2  "
                  md={5}
                >
                  <div style={{ width: "250px", height: "250px" }}>
                    <motion.div
                      whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.2 },
                        cursor: "pointer",
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
                        <Star></Star>
                        <span style={{ marginLeft: "8px" }}>400 Reviews</span>
                      </span>
                    </div>
                    <div>{siglePublicBook.smallDescription}</div>
                  </div>
                  {cart.some((item) => item._id == siglePublicBook._id) ? (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileTap={{ scale: 0.5 }}
                      variant="dark"
                      className="d-grid btn btn-dark my-5 w-100"
                      onClick={handleOnProceedToCart}
                    >
                      Procced to Cart
                    </motion.button>
                  ) : (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileTap={{ scale: 0.5 }}
                      onClick={() => handleOnAddingBookToCart(siglePublicBook)}
                      variant="dark"
                      className="d-grid btn btn-dark my-5 w-100"
                    >
                      Add Book to cart
                    </motion.button>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="text-center mt-5">More Details</h3>{" "}
                  <Tabs variant="tabs" defaultActiveKey="/Description">
                    <Tab
                      eventKey="/Description"
                      className="px-2 py-2  shadow-lg mt-2 description-tab"
                      title="Description"
                    >
                      {siglePublicBook?.description}
                    </Tab>
                    <Tab
                      className="d-flex flex-column gap-3 py-2"
                      eventKey="/review"
                      title="Reviews"
                    >
                      <Review></Review>
                      <Review></Review>
                      <Review></Review>
                      <Review></Review>
                      <Review></Review>
                    </Tab>
                  </Tabs>
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
