import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";

const CustomCarousel = () => {
  const { publicBookList } = useSelector((state) => state.bookInfo);

  const carasoulList = publicBookList?.filter((book) => book.Carousel == "Yes");

  return (
    <Carousel
      className="  rounded rounded-3 shadow-lg w-100 py-4 px-3"
      style={{
        paddingTop: "20px",
        background: "#172eed9e ",
        marginBottom: "10px",
      }}
    >
      {carasoulList.map((book) => {
        const {
          author,
          createdAt,
          createdBy,

          description,
          genre,
          imageList,
          imageUrl,
          isbn,
          lastUpdatedBy,
          publishedDate,
          slug,
          smallDescription,
          status,
          stockQuantity,
          title,
          updatedAt,
          _id,
        } = book;

        return (
          <Carousel.Item key={book._id} className="w-100 h-100 ">
            <div className="d-flex row  flex-wrap justify-content-around align-items-center w-100 px-5   ">
              <Col></Col>
              <Col md={4}>
                <h2>{title}</h2>
                <div>
                  By:<strong>{author}</strong>
                </div>
                <h5>{smallDescription}</h5>
              </Col>
              <Col
                md={6}
                className="flex-grow-1 py-2 d-flex flex-wrap  "
                style={{ height: "50%" }}
              >
                <img
                  className=" "
                  style={{
                    display: "block",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={
                    import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                    imageUrl.slice(6)
                  }
                  alt=""
                />
              </Col>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CustomCarousel;
