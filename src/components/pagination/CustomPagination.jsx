import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({ setActive, active, totalPagination }) => {
  let items = [];

  for (let number = 1; number <= totalPagination; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setActive(number);
        }}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
