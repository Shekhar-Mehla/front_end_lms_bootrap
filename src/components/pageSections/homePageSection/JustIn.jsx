import React from "react";
import HomePageTittle from "../../tittle/HomePageTittle";
import ProductCard from "../../Cards/ProductCard";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const JustIn = () => {
  const { bookList } = useSelector((state) => state.bookInfo);

  return (
    <div className="mx-1 my-4 py-4">
      <HomePageTittle tittle={"Just in!"}></HomePageTittle>
      <Row className="my-4 px-2 d-flex flex-wrap justify-content-center  gap-3 ">
        {bookList?.map((book) => {
          return (
            <Col key={book._id}>
              <ProductCard
                key={book._id}
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

export default JustIn;
