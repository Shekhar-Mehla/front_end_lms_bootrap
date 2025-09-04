import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Row,
  Spinner,
  Tab,
  Tabs,
} from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlepublicBookActions } from "../feature/books/bookActions";
import { motion } from "framer-motion";
import Review from "./Review";
import Star from "../components/stars/Star";
import { setCartList } from "../feature/cart/cartSlice";
import { toast } from "react-toastify";
import ModelComponent from "../components/Modals/ModelComponent";
import ReviewForm from "../components/forms/reviewForm/ReviewForm";

const Book = () => {
  const { slug } = useParams();
  const ref = useRef(true);
  const { siglePublicBook } = useSelector((state) => state.bookInfo);
  const { cart } = useSelector((state) => state.cartInfo);

  const [show, setShow] = useState(true);
  const [image, setImage] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (ref.current) {
      dispatch(singlepublicBookActions(slug));
      ref.current = false;
    }
    setImage(siglePublicBook.imageUrl);
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, [slug, dispatch, siglePublicBook]);

  const message =
    alert === "error"
      ? "You have already submitted a review for this book. Only one review is allowed per book."
      : "Thank you for your feedback. It may take up to 24 hours to show on our website.";

  const handleOnClickImage = (url) => setImage(url);

  const handleOnAddingBookToCart = (book) => {
    toast("Book has been added to cart");
    dispatch(setCartList(book));
  };

  const handleOnProceedToCart = () => navigate("/cart");

  const handleOnClose = () => {
    setAlert("");
    setShowModel(!showModel);
  };

  return (
    <Container style={{ minHeight: "80vh" }} className="bg-white text-dark">
      {/* Modals */}
      {alert.length ? (
        <ModelComponent
          show={showModel}
          tittle={alert === "error" ? "Error" : "Thank you for your feedback"}
          handleClose={handleOnClose}
          component={
            <Alert variant={alert === "error" ? "danger" : "success"}>
              {message}
            </Alert>
          }
        />
      ) : (
        <ModelComponent
          show={showModel}
          tittle="Review form"
          handleClose={handleOnClose}
          component={<ReviewForm setAlert={setAlert} />}
        />
      )}

      {/* Breadcrumb */}
      <Row className="py-4">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{siglePublicBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* Loader */}
      {show ? (
        <center className="py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden text-dark">Loading...</span>
          </Spinner>
          <div className="mt-2">Please wait...</div>
        </center>
      ) : siglePublicBook?._id ? (
        <>
          {/* Book Info Row */}
          <Row className="py-4 align-items-start">
            {/* Left Column: Vertical Thumbnails + Main Image */}
            <Col md={5} className="d-flex gap-3">
              {/* Vertical Thumbnails */}
              <div className="d-flex flex-column gap-2">
                {siglePublicBook?.imageList?.map((url, i) => (
                  <img
                    key={i}
                    onClick={() => handleOnClickImage(url)}
                    src={url}
                    alt={siglePublicBook.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: "6px",
                    }}
                  />
                ))}
              </div>

              {/* Main Image */}
              <motion.img
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                src={image || siglePublicBook.imageUrl}
                alt={siglePublicBook.title}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Col>

            {/* Right Column: Book Info */}
            <Col md={7} className="d-flex flex-column gap-3">
              <h1 style={{ letterSpacing: "1px" }}>{siglePublicBook.title}</h1>
              <div className="fs-6 text-muted">
                <span className="fw-bold">{siglePublicBook.author}</span> -{" "}
                {siglePublicBook?.publishedDate?.slice(0, 4)}
              </div>

              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="badge bg-secondary">
                  {siglePublicBook.genre}
                </span>
                <Star />
                <span>400 Reviews</span>
                <Button variant="dark" onClick={handleOnClose} size="sm">
                  Submit Review
                </Button>
              </div>

              <p>{siglePublicBook.smallDescription}</p>

              {cart.some((item) => item._id === siglePublicBook._id) ? (
                <>
                  <Button
                    onClick={handleOnProceedToCart}
                    className="w-100 btn-dark"
                  >
                    Proceed to Cart
                  </Button>
                  <div className="text-danger mt-2">
                    This book is already in your cart.
                  </div>
                </>
              ) : (
                <Button
                  onClick={() => handleOnAddingBookToCart(siglePublicBook)}
                  className="w-100 btn-dark"
                >
                  Add Book to Cart
                </Button>
              )}
            </Col>
          </Row>

          {/* More Details Tabs */}
          <Row>
            <Col>
              <h3 className="text-center mt-5">More Details</h3>
              <Tabs
                variant="tabs"
                defaultActiveKey="description"
                className="mt-3"
              >
                <Tab eventKey="description" title="Description">
                  <div className="p-3">{siglePublicBook?.description}</div>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <div className="d-flex flex-column gap-3 p-3">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </>
      ) : (
        <Alert variant="danger">
          This Book is not found. Please contact admin.
        </Alert>
      )}
    </Container>
  );
};

export default Book;
