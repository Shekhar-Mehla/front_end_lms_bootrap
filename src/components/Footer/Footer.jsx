import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/images/library_logo.png"; // same as navbar
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-dark mt-auto">
      <Container>
        <Row className="py-5">
          {/* Brand & Logo */}
          <Col md={4} className="mb-4 d-flex flex-column align-items-start">
            <img src={logo} width={80} alt="library logo" className="mb-2" />
            <p className="footer-description mt-2">
              Discover and review amazing books. Connect, share, and explore the
              world of literature.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-books" className="footer-link">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">
                  Cart
                </Link>
              </li>
            </ul>
          </Col>

          {/* Support Links */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/forgot-password" className="footer-link">
                  Forgot Password
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer-link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="footer-link">
                  Login
                </Link>
              </li>
            </ul>
          </Col>

          {/* Newsletter & Social */}
          <Col md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Subscribe to Our Newsletter</h6>
            <Form className="d-flex gap-2">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="footer-input"
              />
              <Button variant="light" className="fw-bold text-dark">
                Subscribe
              </Button>
            </Form>
            <div className="mt-4 d-flex gap-3 social-icons">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center py-3">
            <small className="text-muted">
              © {new Date().getFullYear()} BookVerse. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
