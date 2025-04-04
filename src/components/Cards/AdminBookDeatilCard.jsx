import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import img from "../../../src/assets/images/library_logo.png";
import { motion } from "framer-motion";

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
    <div>
      <Card style={{ width: "100%" }} className="d-flex flex-wrap shadow-lg">
        <Row>
          <Col className="shadow-lg  align-items-center justify-content-center ">
            <Image
              thumbnail
              variant="top"
              className=""
              src={
                import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                `${imageUrl.slice(6)}`
              }
            />
          </Col>

          <Col>
            <Card.Body>
              <Card.Title>**{title}**</Card.Title>
              <Card.Text>
                <strong>Author:</strong> {author}
                <br />
                <strong>Genre:</strong> {genre}
                <br />
                <strong>ISBN:</strong> {isbn}
                <br></br>
                <strong>Publish Date:</strong>{" "}
                {new Date(publishedDate).toISOString().split("T")[0]}
                <br />
                <strong>Added By:</strong> {createdBy.name}
                <br />
                <strong>Added Date:</strong>{" "}
                {new Date(createdAt).toISOString().split("T")[0]}
                <br />
                <strong>Last Updated By:</strong>{" "}
                {lastUpdatedBy.name.length ? lastUpdatedBy.name : "N/A"}
                <br />
                <strong>Status:</strong> {status}
                <br />
                <strong>Availability:</strong>{" "}
                {stockQuantity ? stockQuantity : "none"}
                <br />
              </Card.Text>
              <Card.Text>
                <small>Last Updated Date:</small>{" "}
                {new Date(updatedAt).toISOString().split("T")[0]}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row
                className=""
                style={{ width: "250px", height: "250px", overflow: "auto" }}
              >
                {book?.imageList?.map((url) => (
                  <Col key={url}>
                    <Image
                      style={{ width: "100%" }}
                      src={
                        import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                        `${url.slice(6)}`
                      }
                    ></Image>
                  </Col>
                ))}
              </Row>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AdminBookDeatilCard;
