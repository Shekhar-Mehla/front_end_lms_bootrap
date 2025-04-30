import React, { useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Table from "react-bootstrap/Table";
import { deleteCartList } from "../feature/cart/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();
  const [cartItemsToDelete, setCartItemsToDelete] = useState([]);
  const cartIdToDeleteIds = cart.map(({ _id }) => _id);

  const handleOnSelectAll = (e) => {
    const { checked, name, value } = e.target;

    if (checked == true && name == "Select All") {
      return setCartItemsToDelete([...cartIdToDeleteIds]);
    } else {
      if (checked == false && name == "Select All") {
        setCartItemsToDelete([]);
      } else {
        if (checked == true) {
          setCartItemsToDelete([...cartItemsToDelete, value]);
        } else {
          console.log(cartItemsToDelete);
          setCartItemsToDelete(
            cartItemsToDelete.filter((item) => item != value)
          );
        }
      }
    }
  };

  // handle on delete button click
  const handleOnDelete = () => {
    if (confirm("Are you sure? you want to delete the item from cart")) {
      return dispatch(deleteCartList(cartItemsToDelete));
    }
    return;
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
          {" "}
          <Row className="mt-3 mb-3">
            <Col>
              <h2>My Cart</h2>
            </Col>
          </Row>
          <Row className="card py-3 px-3">
            <Col className="d-flex justify-content-between">
              <Form>
                <FormCheck
                  onChange={handleOnSelectAll}
                  label={"Select All"}
                  type="checkbox"
                  name="Select All"
                  checked={
                    cart.length > 0 && cart.length == cartItemsToDelete.length
                  }
                ></FormCheck>
              </Form>
              <Button
                onClick={handleOnDelete}
                variant="dark d-flex rounded rounded-lg justify-content-between align-items-center "
              >
                <RiDeleteBin6Line></RiDeleteBin6Line>
                <span>Delete</span>
              </Button>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              {" "}
              <Table striped bordered hover>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr>
                        <td>
                          <Form>
                            <FormCheck
                              onChange={handleOnSelectAll}
                              type="checkbox"
                              checked={cartItemsToDelete.includes(item._id)}
                              value={item._id}
                            ></FormCheck>
                          </Form>
                        </td>
                        <td className="d-flex align-items-center gap-3">
                          <div style={{ width: "70px", height: "70px" }}>
                            <img
                              style={{
                                height: "100%",
                                width: "100%",

                                display: "block",
                                borderRadius: "50%",
                                objectPosition: "center",
                              }}
                              src={
                                import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                                item.imageUrl?.slice(6)
                              }
                              alt={item.title}
                            />
                          </div>
                          <div>{item.title}</div>
                        </td>
                        <td>{item.genre}</td>
                        <td>{item.author}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      ) : (
        <Alert className="text-center">Cart is empty</Alert>
      )}
    </Container>
  );
};

export default Cart;
