import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { getSingleBook } from "../services/BookApi";

const Book = () => {
  const { slug } = useParams();

  const [book, setBook] = useState({});
 

  return (
    <Container style={{ minHeight: "100vh" }} className="bg-white text-dark ">
      <Row className="my-2">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All-Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>book-name</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>image section</Col>
        <Col>detail section</Col>
      </Row>
      <Row>
        <Col>bottom section</Col>
      </Row>
    </Container>
  );
};

export default Book;
