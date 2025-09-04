import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Navbar,
  Col,
  Container,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaHome, FaSignInAlt, FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosBook } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../../feature/user/userAction";
import logo from "../../assets/images/library_logo.png";

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { cart } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchRef = useRef();

  const [expanded, setExpanded] = useState(false);

  const handleOnSignOut = () => {
    dispatch(logOutUserAction());
    setExpanded(false); // collapse after sign out
  };

  const handleOnSearch = (e) => {
    e.preventDefault();
    const query = searchRef.current.value.split(" ").join("+");
    if (query !== "") {
      navigate(`/search?query=${query}`);
      setExpanded(false); // collapse after search
    }
  };

  // collapse navbar on link click
  const handleLinkClick = () => setExpanded(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
      <Container fluid className="gap-3">
        <Navbar.Brand href="/">
          <img src={logo} width={80} alt="library logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex flex-grow-1 px-3" onSubmit={handleOnSearch}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                ref={searchRef}
              />
              <Button variant="outline-secondary" type="submit">
                <IoSearchSharp />
              </Button>
            </InputGroup>
          </Form>
          <Nav className="align-items-center my-2 my-lg-0">
            <Link
              className="nav-link text-white"
              to="/"
              onClick={handleLinkClick}
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/all-books"
              className="nav-link text-white"
              onClick={handleLinkClick}
            >
              <IoIosBook /> Books
            </Link>

            {user?._id ? (
              <>
                <Link
                  className="nav-link text-white"
                  to="/user"
                  onClick={handleLinkClick}
                >
                  <AiFillDashboard /> Dashboard
                </Link>
                <Link className="nav-link text-white" onClick={handleOnSignOut}>
                  <FaSignOutAlt /> Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link text-white"
                  to="/login"
                  onClick={handleLinkClick}
                >
                  <FaSignInAlt /> Sign in
                </Link>
                <Link
                  className="nav-link text-white"
                  to="/register"
                  onClick={handleLinkClick}
                >
                  <FaUserEdit /> Sign Up
                </Link>
              </>
            )}

            <Link
              to="/cart"
              className="text-white d-flex position-relative align-items-center"
              onClick={handleLinkClick}
            >
              <GiShoppingCart className="cart-icon" />
              <span className="text-white cart-count position-absolute bg-danger d-flex align-items-center justify-content-center">
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
