import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegEdit } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import AdminBookDeatilCard from "../Cards/AdminBookDeatilCard";
import { Col, Row } from "react-bootstrap";

const BookDetailModels = ({ show, handleClose, bookId, ...props }) => {
  return (
    <Row>
      <Col className="py-2">
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Book Detail Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex align-items-center justify-content-center px-2">
            <AdminBookDeatilCard bookId={bookId}></AdminBookDeatilCard>
          </Modal.Body>
          <Modal.Footer>
            <Link
              className="text-dark bg-warning btn"
              to={`/user/edit-book/${bookId}`}
            >
              <FaRegEdit></FaRegEdit> Edit
            </Link>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
};

export default BookDetailModels;
