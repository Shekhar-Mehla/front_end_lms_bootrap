import React, { useEffect, useRef, useState } from "react";
import { Table, Container, Button, ButtonGroup } from "react-bootstrap";

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
    <>
      <div className="p-2   shadow">
        <h3>Book Table</h3>

        <hr />
        <div className="d-flex justify-content-end">
          {" "}
          <Link to="/user/insert-new-book">
            <Button>ADD NEW Book</Button>
          </Link>
        </div>

        <div className="d-flex justify-content-between mt-3 mb-3">
          <h4>10 books found</h4>
          <input placeholder="serac here"></input>
        </div>
      </div>
      <div className=" d-flex   flex-wrap bg-primary shadow-lg rounded-3 justify-content-center ">
        <BookDetailModels
          show={show}
          bookId={bookId}
          handleClose={handleClose}
        ></BookDetailModels>
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
            {bookList.map((book, i) => {
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
                      src={book.imageUrl}
                      alt="book thumbnail"
                    />
                  </td>
                  <td>{book.title}</td>

                  <td>{book.genre} </td>
                  <td>{book.author}</td>

                  <td>{book.status}</td>

                  <td className="">
                    <Button
                      variant="primary"
                      onClick={() => handleShow(book._id)}
                    >
                      View Deatials
                    </Button>

                    <Link
                      to={`/user/edit-book${book.slug}`}
                      className="text-dark editPointer"
                    >
                      <Button variant="warning mx-2">
                        {" "}
                        <FaRegEdit className="  "></FaRegEdit>{" "}
                        <span>Edit Book</span>
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BookList;
