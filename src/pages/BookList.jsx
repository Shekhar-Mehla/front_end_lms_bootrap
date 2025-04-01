import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bookActions from "../feature/books/bookActions.js";
import { FaRegEdit } from "react-icons/fa";
import BookDetailModels from "../components/Modals/bookDetailModels.jsx";

const BookList = () => {
  const [show, setShow] = useState(false);
  const [bookId, setBookId] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (book_Id) => {
    setBookId(book_Id);
    setShow(true);
  };

  // fetch book here
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.bookInfo);

  const ref = useRef(true);
  console.log(bookList);

  useEffect(() => {
    ref.current === true && dispatch(bookActions());
    ref.current = false;
  }, []);
  return (
    <Container>
      <Row>
        {" "}
        <Col className="p-2   shadow">
          <h3>Book Table</h3>

          <hr />
          <Row>
            <Col className="d-flex justify-content-end">
              {" "}
              <Link to="/user/insert-new-book">
                <Button>ADD NEW Book</Button>
              </Link>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between mt-3 mb-3">
            <Col sm={4}>
              <h4>10 books found</h4>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=" d-flex   flex-wrap bg-primary shadow-lg rounded-3 justify-content-center ">
        <BookDetailModels
          show={show}
          bookId={bookId}
          handleClose={handleClose}
        ></BookDetailModels>
        <Col>
          <Table responsive className="border-danger shadow-lg  ">
            <thead className="">
              <tr>
                <th>No.</th>

                <th>Thumbnail</th>
                <th>Book Title </th>

                <th>Genre</th>
                <th>Author(s)</th>
                <th>Status </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {bookList?.map((book, i) => {
                return (
                  <tr key={book._id} className="">
                    <td>{i + 1}</td>
                    <td>
                      <img
                        style={{ width: "60px" }}
                        // src={
                        //   import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                        //   `${book.imageUrl.slice(6)}`
                        // }
                        // src={book.imageUrl}
                        src={book.imageUrl}
                        alt="book thumbnail"
                      />
                    </td>
                    <td>{book.title}</td>

                    <td>{book.genre} </td>
                    <td>{book.author}</td>

                    <td>{book.status}</td>

                    <td className="">
                      <Row className="d-flex gap-1   ">
                        <Col md={7}>
                          <Button
                            variant="primary"
                            onClick={() => handleShow(book._id)}
                          >
                            View Deatials
                          </Button>
                        </Col>
                        <Col md={4} className="flex-1">
                          <Link
                            to={`/user/edit-book/${book.slug}`}
                            className="text-dark editPointer"
                          >
                            <Button variant="warning ">
                              {" "}
                              <FaRegEdit className="  "></FaRegEdit>{" "}
                              <span>Edit</span>
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
