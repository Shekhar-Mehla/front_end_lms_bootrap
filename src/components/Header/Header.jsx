import React, { useEffect } from "react";

import {
  Form,
  Button,
  Navbar,
  Col,
  Container,
  NavDropdown,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/library_logo.png";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { logOutUserAction } from "../../feature/user/userAction";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosBook } from "react-icons/io";

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { cart } = useSelector((state) => state.cartInfo);

  const handleOnSignOut = async (e) => {
    // call api becasue if you remove the token from storage first then you cannot send token with header
    dispatch(logOutUserAction());
  };
  return (
    <Navbar expand="lg" data-bs-theme="dark " className=" bg-dark">
      <Container fluid className="gap-3  ">
        <Navbar.Brand href="/" className="text-white">
          <img src={logo} width={80} className="logo " alt="library logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className=" text-white bg-white"
        />

        <Navbar.Collapse id="navbarScroll">
          <div className="w-25"></div>
          <Form className="d-flex   flex-grow-1 px-3 ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button className="tetx-white" variant="outline-success">
              Search
            </Button>
          </Form>
          <Nav
            className=" align-items-center 

  my-2 my-lg-0 "
          >
            <Link className="nav-link text-white " to="/">
              <FaHome className="" /> Home
            </Link>
            <Link to={"all-books"} className="nav-link text-white">
              <IoIosBook></IoIosBook> Books
            </Link>

            {user?._id ? (
              <>
                <Link className="nav-link text-white  " to="/user">
                  <AiFillDashboard /> Dashboard
                </Link>
                <Link
                  className="nav-link text-white "
                  onClick={handleOnSignOut}
                >
                  <FaSignOutAlt /> Sign Out
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link className="nav-link text-white  " to="/login">
                  <FaSignInAlt /> Sign in
                </Link>
                <Link className="nav-link text-white" to="/register">
                  <FaUserEdit /> Sign Up
                </Link>
              </>
            )}
            <Link
              to={"/cart"}
              className=" text-white  d-flex position-relative  align-items-center"
            >
              <GiShoppingCart className=" cart-icon " />
              <span className="text-white cart-count position-absolute bg-danger d-flex align-items-center  justify-content-center">
                {cart.length || 0}
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
