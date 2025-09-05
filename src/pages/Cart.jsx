import React, { useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Table from "react-bootstrap/Table";

import { IoIosArrowRoundBack } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { deleteCartList } from "../feature/cart/cartSlice";
import { createBorrowBook } from "../feature/borrow/borrowApi";
import { clearCartList } from "../feature/cart/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  const naviate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnRemove = (_id) => {
    dispatch(deleteCartList(_id));
  };
  const handleOnBorrow = async () => {
    console.log(cart);
    const boorwoedBoook = cart.map((book) => {
      return {
        title: book.title,
        thumbnail: book.imageUrl,

        bookId: book._id,
      };
    });
    if (user?._id) {
      const { status, message, payload } = await createBorrowBook(
        boorwoedBoook
      );
      if (status === "success") {
        dispatch(clearCartList());

        naviate("/user/thank-you", { state: payload });
      } else {
        toast.error(message);
      }
    } else {
      naviate("/login", { state: { pathname: location.pathname } });
    }

    // navigate("/user/thank-you");
    // make action call
  };

  return (
    <Container style={{ height: "80vh" }}>
      {/* <Row className="py-4">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{"Cart"}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row> */}

      {cart.length > 0 ? (
        <>
          <Row className="mt-3  mb-3">
            <Col className="d-flex justify-content-between align-items-center">
              <h2>My Cart</h2>{" "}
              <div
                className="contiue-shopping"
                onClick={() => navigate("/all-books")}
              >
                <IoIosArrowRoundBack className="fs-3" />
                Continue Borrowing
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* table */}

              <Table responsive="md">
                <tbody>
                  {cart?.map(
                    ({
                      imageUrl,
                      slug,
                      smallDescription,
                      stockQuantity,
                      title,
                      _id,
                    }) => {
                      return (
                        <tr key={_id}>
                          <td>
                            <img style={{ width: "80px" }} src={imageUrl}></img>
                          </td>
                          <td>
                            <strong>{title}</strong>
                          </td>
                          <td>
                            <strong>Returning Date</strong>:14 Days
                          </td>
                          <td className="cart-remove-btn fs-3">
                            <FiX onClick={() => handleOnRemove(_id)} />
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      ) : (
        <Row
          style={{ height: "80%" }}
          className="d-flex justify-content-center align-items-center "
        >
          <Col>
            <Alert className="bg-warning text-center text-capitalize fs-4 fw-3">
              Cart is empty
            </Alert>
          </Col>
        </Row>
      )}
      <div
        className={`d-flex justify-content-end ${
          cart.length == 0 ? "d-none" : ""
        }`}
      >
        <Button onClick={handleOnBorrow} className="">
          Proceed To Borrow
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
