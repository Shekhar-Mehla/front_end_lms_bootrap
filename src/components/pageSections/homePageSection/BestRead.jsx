import React from "react";
import HomePageTittle from "../../tittle/HomePageTittle";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../Cards/ProductCard";
import { useSelector } from "react-redux";

const BestRead = () => {
  const { publicBookList } = useSelector((state) => state.bookInfo);

  return (
    <div className="mx-1 my-4 py-4">
      <HomePageTittle tittle={"Best reads!"}></HomePageTittle>
      <Row className="my-4 px-2 d-flex flex-wrap justify-content-center  gap-3 ">
        {publicBookList?.map((book) => {
          return (
            <Col key={book._id}>
              {" "}
              <ProductCard
                author={book.author}
                title={book.title}
                imageUrl={book.imageUrl}
                slug={book.slug}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default BestRead;
