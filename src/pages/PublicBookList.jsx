import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import PublicBookListing from "../components/publicBookList/PublicBookListing";

const PublicBookList = () => {
  const { publicBookList } = useSelector((state) => state.bookInfo);
  const navigate = useNavigate();

  useEffect(() => {
    !publicBookList?.length && navigate("/");
  }, []);
  return (
    <Container className="bg-white text-dark" style={{ minHeight: "100vh" }}>
      <Row className="py-4">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{"Book-list"}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <PublicBookListing books={publicBookList}></PublicBookListing>
    </Container>
  );
};

export default PublicBookList;
