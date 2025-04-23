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
  console.log(location);
  // useEffect(() => {
  //   !user._id && navigate("/");
  // }, [user, dispatch]);

  const handleOnSignOut = async (e) => {
    // call api becasue if you remove the token from storage first then you cannot send token with header
    dispatch(logOutUserAction());
  };
  return (
    // <Navbar expand="lg" data-bs-theme="white" className="py-2 px-2  shadow-lg ">
    // <Navbar.Brand href="/" className="text-white">
    //   <img src={logo} width={80} className="logo " alt="library logo" />
    // </Navbar.Brand>
    // <Navbar.Toggle
    //   aria-controls="basic-navbar-nav "
    //   className=" text-white"
    // />

    //   <Navbar.Collapse
    //     id="basic-navbar-nav"
    //     className="justify-content-center py-4 "
    //   >
    //     <Nav className="  d-flex  flex-grow-1 align-items-cente align-items-md-start  flex-wrap ">
    //       <div className="text-white w-25 "></div>
    //       <div className="flex-grow-1 justify-content-center align-items-md-start w-100   ">
    //         {" "}
    //         <Form className="d-flex  ">
    //           <Form.Control
    //             className=""
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <Button variant="outline-success">Search</Button>
    //         </Form>
    //       </div>
    //       <div className="d-flex  align-items-center flex-md-row  gap-3">
    //         {" "}
    //         <Link className="nav-link  text-white " to="/">
    //           <FaHome /> Home
    //         </Link>
    //         {user?._id ? (
    //           <>
    //             <Link className="nav-link px-3 text-white " to="/user">
    //               <AiFillDashboard /> Dashboard
    //             </Link>
    //             <Link className="nav-link text-white" onClick={handleOnSignOut}>
    //               <FaSignOutAlt /> Sign Out
    //             </Link>
    //           </>
    //         ) : (
    //           <>
    //             {" "}
    //             <Link className="nav-link text-white  " to="/login">
    //               <FaSignInAlt /> Sign in
    //             </Link>
    //             <Link className="nav-link text-white" to="/register">
    //               <FaUserEdit /> Sign Up
    //             </Link>
    //           </>
    //         )}
    //         <Link
    //           to={"/borrowing-list"}
    //           className=" text-white  d-flex position-relative  align-items-center"
    //         >
    //           <GiShoppingCart className=" cart-icon " />
    //           <span className="text-white cart-count position-absolute bg-danger d-flex align-items-center  justify-content-center">
    //             0
    //           </span>
    //         </Link>
    //       </div>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar expand="lg" data-bs-theme="dark " className=" text-white">
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
              <FaHome className="" /> Home Home
            </Link>
            <Link className="nav-link text-white">
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
              to={"/borrowing-list"}
              className=" text-white  d-flex position-relative  align-items-center"
            >
              <GiShoppingCart className=" cart-icon " />
              <span className="text-white cart-count position-absolute bg-danger d-flex align-items-center  justify-content-center">
                0
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
