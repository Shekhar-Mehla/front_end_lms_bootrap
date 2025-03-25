import React, { useEffect, useRef } from "react";
import { Table, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bookActions from "../feature/books/bookActions.js";
import { FaRegEdit } from "react-icons/fa";

const BookList = () => {
  // fetch book here
  const dispatch = useDispatch();
  const {BookList} = useSelector((state) => state.bookInfo);
  const ref = useRef(true);

  useEffect(() => {
    ref.current == true && dispatch(bookActions());
    ref.current = false;
  }, [ref.current]);
  return (
    <div className=" d-flex   flex-wrap bg-primary shadow-lg rounded-3 justify-content-center ">
      <Table responsive className="border-danger shadow-lg  ">
        <thead className="">
          <tr>
            <th>No.</th>
            <th>status</th>

            <th>Book</th>

            <th>author</th>
            <th>Added by</th>
            <th>date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td>1</td>
            <td>Active</td>
            <td>
              <img
                style={{ height: 50 }}
                src={
                  "http://localhost:8000/img/1742512771831-849359305-library_logo.png"
                }
                alt="sdfg"
              />
            </td>
            <td>Shekhar</td>
            <td>Mark</td>

            <td>20/2020</td>
            <td>
              <Link to="/user/edit-book/123" className="text-dark editPointer">
                <FaRegEdit className="edit text-warning fs-2">dfg</FaRegEdit>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
