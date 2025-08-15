import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import img from "../../../src/assets/images/library_logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const AdminBookDeatilCard = ({ bookId }) => {
  const { bookList } = useSelector((state) => state.bookInfo);
  const book = bookList.find((book) => book._id == bookId);

  const {
    author,
    createdAt,
    createdBy,

    description,
    genre,
    imageList,
    imageUrl,
    isbn,
    lastUpdatedBy,
    publishedDate,
    slug,
    smallDescription,
    status,
    stockQuantity,
    title,
    updatedAt,
    _id,
  } = book;
  return (
    <Card className="shadow-lg w-100">
      <center className="shadow-lg py-2 w-100 bg-light ">
        {/* carasoul */}
        {imageList?.length > 1 ? (
          <>
            <Carousel>
              {imageList?.map((path) => (
                <Carousel.Item key={path}>
                  <img src={path} />
                </Carousel.Item>
              ))}
            </Carousel>
          </>
        ) : (
          <>
            {" "}
            <div style={{ height: "30vh" }}>
              <img
                style={{ height: "30vh", width: "100%", objectFit: "contain" }}
                className="img-thumbnail"
                src={imageUrl}
              />
            </div>
          </>
        )}
      </center>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{smallDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Author:</strong> {author}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <strong>Genre:</strong> {genre}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <strong>ISBN:</strong> {isbn}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Status:</strong> {status}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Availability:</strong>
          {stockQuantity ? stockQuantity : "none"}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <strong>Publish Date:</strong>
          {new Date(publishedDate).toISOString().split("T")[0]}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Added By:</strong> {createdBy.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Last Updated By:</strong>{" "}
          {lastUpdatedBy.name.length ? lastUpdatedBy.name : "N/A"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Added Date:</strong>
          {new Date(createdAt).toISOString().split("T")[0]}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Last Updated Date:</strong>
          {new Date(updatedAt).toISOString().split("T")[0]}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AdminBookDeatilCard;
