import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminBookDeatilCard from "../Cards/AdminBookDeatilCard";
const BookDetailModels = ({ show, handleClose, bookId, ...props }) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
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
        <Modal.Body>
          <AdminBookDeatilCard bookId={bookId}></AdminBookDeatilCard>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookDetailModels;
