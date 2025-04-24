import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
const ListViewCard = ({
  author,

  imageUrl,
  publishedDate = "2021",
  slug = "www.google.com",
  title = "Pythron Crash Course",
  smallDescription,
}) => {
  return (
    <motion.div
      className="card flex-basis-auto flex-wrap  align-items-center"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      style={{ width: "22rem" }}
    >
      <Row className=" ">
        <Col className="card-img" style={{ width: "200px", height: "250px" }}>
          <Card.Img
            style={{
              width: "100%",
              height: "100%",

              objectFit: "contain",
              objectPosition: "center",
            }}
            className="rounded mt-2"
            variant="top"
            src={import.meta.env.VITE_BASE_URL_BACKEND_IMG + imageUrl?.slice(6)}
          />
        </Col>
        <Col>
          {" "}
          <Card.Body className="text-center ">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {author}-{publishedDate}
            </Card.Text>
            <Card.Text>{smallDescription}</Card.Text>

            <Link to={`/book/${slug}`}>
              <motion.div whileTap={{ scale: 0.6 }}>
                <Button variant="dark" className="">
                  View Details
                </Button>
              </motion.div>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ListViewCard;
