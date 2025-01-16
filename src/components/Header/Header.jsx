import React from "react";

import { Form, Button, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";
import logo from "../../assets/images/library_logo.png";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="py-1 px-2">
      <Navbar.Brand href="/" className="text-white">
        <img src={logo} width={80} className="logo " alt="library logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav "
        className=" text-white"
      />

      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav className="ms-auto px-3 d-flex gap-3">
          <Link className="nav-link text-white" to="/">
            <FaHome /> Home
          </Link>
          <Link className="nav-link text-white " to="/login">
            <FaSignInAlt /> Sign in
          </Link>
          <Link className="nav-link text-white" to="/register">
            <FaUserEdit /> Sign Up
          </Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
