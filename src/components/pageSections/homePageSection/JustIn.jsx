import React from "react";
import HomePageTittle from "../../tittle/HomePageTittle";
import ProductCard from "../../Cards/ProductCard";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const JustIn = () => {
  const { publicBookList } = useSelector((state) => state.bookInfo);
  return (
    <div className="">
      <HomePageTittle tittle={"Just in!"}></HomePageTittle>
      <div className="d-flex gap-3 flex-wrap">
        {publicBookList?.map((book) => {
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
    </div>
  );
};

export default JustIn;
