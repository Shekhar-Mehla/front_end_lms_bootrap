import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaRegEdit } from "react-icons/fa";
import BookDetailModels from "../components/Modals/BookDetailModels.jsx";
import { AdminbookActions } from "../feature/books/bookActions.js";

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

  useEffect(() => {
    ref.current === true && dispatch(AdminbookActions());
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
              <Link className="btn btn-primary" to="/user/insert-new-book">
                <FaBookOpen className="mx-2"></FaBookOpen>ADD NEW Book
              </Link>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between mt-3 mb-3">
            <Col sm={4}>
              <h4>{bookList?.length} books found</h4>
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
                        src={
                          import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                          `${book.imageUrl.slice(6)}`
                        }
                        // src={book.imageUrl}
                        // src={book.imageUrl}
                        alt="book thumbnail"
                      />
                    </td>
                    <td>{book.title}</td>

                    <td>{book.genre} </td>
                    <td>{book.author}</td>

                    <td>{book.status}</td>

                    <td>
                      <div className="d-flex  gap-2">
                        <div className="flex-2">
                          <Button
                            variant="primary"
                            onClick={() => handleShow(book._id)}
                          >
                            View Deatials
                          </Button>
                        </div>
                        <div>
                          <Link
                            className="btn btn-warning"
                            to={`/user/edit-book/${book._id}`}
                          >
                            <FaRegEdit className="  "></FaRegEdit>{" "}
                            <span>Edit</span>
                          </Link>
                        </div>
                      </div>
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
