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
      className="card w-50 justify-content-around flex-wrap  "
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
    >
      <Row className=" ">
        <Col className="d-flex align-items-stretch" style={{ height: "250px" }}>
          <div
            className="align-self-stretch"
            style={{ width: "150px", height: "100%" }}
          >
            <Card.Img
              style={{
                width: "100%",
                height: "100%",

                objectFit: "contain",
                objectPosition: "center",
              }}
              className="rounded mt-2"
              variant="top"
              src={
                import.meta.env.VITE_BASE_URL_BACKEND_IMG + imageUrl?.slice(6)
              }
            />
          </div>
          <div className="">
            <Card.Body className="">
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {author}-{publishedDate}
              </Card.Text>
              <Card.Text>{smallDescription}</Card.Text>

              <Link className="" to={`/book/${slug}`}>
                <motion.div whileTap={{ scale: 0.6 }}>
                  <Button variant="dark" className="">
                    View Details
                  </Button>
                </motion.div>
              </Link>
            </Card.Body>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ListViewCard;
