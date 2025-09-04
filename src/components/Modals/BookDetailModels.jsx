import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import { FaRegEdit } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import AdminBookDeatilCard from "../Cards/AdminBookDeatilCard";
import { Col, Row } from "react-bootstrap";
import ModelComponent from "./ModelComponent";

const BookDetailModels = ({ show, handleClose, bookId, ...props }) => {
  return (
    <Row>
      <Col className="py-2">
        <ModelComponent
          show={show}
          tittle={"Book Detail Information"}
          handleClose={handleClose}
          bookId={bookId}
          props={props}
          component={
            <AdminBookDeatilCard bookId={bookId}></AdminBookDeatilCard>
          }
          footer={
            <Link
              className="text-dark bg-warning btn"
              to={`/user/edit-book/${bookId}`}
            >
              <FaRegEdit></FaRegEdit> Edit
            </Link>
          }
        ></ModelComponent>
      </Col>
    </Row>
  );
};

export default BookDetailModels;
