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
import { Link, useNavigate } from "react-router-dom";

import Table from "react-bootstrap/Table";

import { IoIosArrowRoundBack } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { deleteCartList } from "../feature/cart/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnRemove = (_id) => {
    dispatch(deleteCartList(_id));
  };
  const handleOnBorrow = () => {
    // make action call




    
  };

  return (
    <Container>
      <Row className="py-4">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{"Cart"}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

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
                            <img
                              style={{ width: "80px" }}
                              src={
                                import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                                imageUrl.slice(6)
                              }
                            ></img>
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
        <Alert className="text-center">Cart is empty</Alert>
      )}
      <div className="d-flex justify-content-end">
        <Button onClick={handleOnBorrow} className="">
          Proceed To Borrow
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
