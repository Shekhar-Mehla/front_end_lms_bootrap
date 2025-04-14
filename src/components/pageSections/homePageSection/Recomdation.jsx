import React from "react";
import HomePageTittle from "../../tittle/HomePageTittle";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../Cards/ProductCard";
import { useSelector } from "react-redux";

const Recomdation = () => {
  const { bookList } = useSelector((state) => state.bookInfo);

  return (
    <div className="mx-1 my-4 py-4">
      <HomePageTittle tittle={"Recomended for you!"}></HomePageTittle>
      <Row className="my-4 px-2 d-flex flex-wrap justify-content-center  gap-3 ">
        {bookList?.map((book) => {
          return (
            <Col key={book._id}>
              <ProductCard
                slug={book.slug}
                key={book._id}
                author={book.author}
                title={book.title}
                imageUrl={book.imageUrl}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Recomdation;
