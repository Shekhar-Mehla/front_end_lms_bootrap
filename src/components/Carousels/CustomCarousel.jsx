import React from "react";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/c2.jpg";
import c3 from "../../assets/images/c3.jpg";
import HeroCard from "../Cards/heroCard";
import { useSelector } from "react-redux";

const CustomCarousel = () => {
  const { bookList } = useSelector((state) => state.bookInfo);

  const carasoulList = bookList?.filter((book) => book.Carousel == "Yes");

  return (
    <Carousel
      className="  rounded rounded-3 shadow-lg"
      style={{ height: "40vh", paddingTop: "20px", background: "#172eed9e " }}
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
          <Carousel.Item key={book._id} className="w-100 h-100">
            <div className="d-flex justify-content-around align-items-center w-100   ">
              <div></div>
              <div>
                <h2>{title}</h2>
                <h4>{author}</h4>
              </div>
              <div>
                <img
                  className=" shadow-lg "
                  style={{
                    display: "block",
                    width: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    BlockSize: "30vh",
                  }}
                  src={
                    import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                    imageUrl.slice(6)
                  }
                  alt=""
                />
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CustomCarousel;
