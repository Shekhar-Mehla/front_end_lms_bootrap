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
import ProductCard from "../components/Cards/ProductCard";
import ListViewCard from "../components/Cards/ListViewCard";

import CustomPagination from "../components/pagination/CustomPagination";

const PublicBookList = () => {
  const { publicBookList } = useSelector((state) => state.bookInfo);
  const [active, setActive] = useState(1);
  const [view, setView] = useState("card");
  const navigate = useNavigate();
  const productPerScreen = 2;
  const startIndex = (active - 1) * productPerScreen;
  const endIndex = startIndex + productPerScreen;
  const totalPagination = Math.ceil(publicBookList?.length / productPerScreen);
  const displayBook = publicBookList?.slice(startIndex, endIndex);

  console.log(displayBook);
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

      <div className="d-flex justify-content-between">
        <div>100book found</div>
        <div>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => setView("card")}>
              Card View
            </Button>
            <Button variant="dark" onClick={() => setView("list")}>
              List View
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {view === "card" ? (
        <>
          <div className="d-flex mt-3 gap-3 flex-wrap justify-content-center">
            {displayBook?.map((book) => {
              return (
                <ProductCard
                  key={book._id}
                  author={book.author}
                  title={book.title}
                  imageUrl={book.imageUrl}
                  slug={book.slug}
                ></ProductCard>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div
            className={`d-flex gap-3  mt-3 flex-wrap   flex-column
        }   justify-content-center`}
          >
            {displayBook?.map((book) => {
              return <ListViewCard {...book}></ListViewCard>;
            })}
          </div>
        </>
      )}
      <div className="d-flex mt-5 justify-content-center">
        <CustomPagination
          active={active}
          setActive={setActive}
          totalPagination={totalPagination}
        ></CustomPagination>
      </div>
    </Container>
  );
};

export default PublicBookList;
