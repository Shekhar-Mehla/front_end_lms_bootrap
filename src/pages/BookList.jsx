import React from "react";
import { Table, Container } from "react-bootstrap";

const BookList = () => {
  return (
    <Container className=" d-flex  flex-wrap bg-primary rounded-3 justify-content-center ">
      <Table responsive className="border-dark ">
        <thead className="">
          <tr>
            <th>No.</th>
            <th>status</th>

            <th>status</th>
            <th>Book</th>
            <th>author</th>
            <th>Added by</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>InActive</td>
            <td>
              <img
                style={{ height: 50 }}
                src={
                  "http://localhost:8000/img/1742512771831-849359305-library_logo.png"
                }
                alt="sdfg"
              />
            </td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdodsfghjkhg</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default BookList;
