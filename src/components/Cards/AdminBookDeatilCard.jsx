import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import img from "../../../src/assets/images/library_logo.png";

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
      <Card style={{ width: "100%" }} className="d-flex flex-wrap">
        <Row>
          <Col className="">
            {" "}
            <Card.Img
              variant="top"
              // src={
              //   import.meta.env.VITE_BASE_URL_BACKEND_IMG +
              //   `${imageUrl.slice(6)}`
              // }

              // src={imageUrl}
              src={img}
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
                <strong>Publish Date:</strong> {publishedDate}
                <br />
                <strong>Added By:</strong> {createdBy.name}
                <br />
                <strong>Added Date:</strong> {createdAt}
                <br />
                <strong>Last Updated By:</strong>{" "}
                {lastUpdatedBy.name.length ? lastUpdatedBy.name : "N/A"}
                <br />
                <strong>Status:</strong> {status}
                <br />
                <strong>Availability:</strong>{" "}
                {stockQuantity.length ? stockQuantity : "none"}
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last Updated Date:</small> {updatedAt}
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AdminBookDeatilCard;
