// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// import { useSelector } from "react-redux";
// import { Col } from "react-bootstrap";

// const CustomCarousel = () => {
//   const { publicBookList } = useSelector((state) => state.bookInfo);

//   const carasoulList = publicBookList?.filter((book) => book.Carousel == "Yes");

//   return (
//     <Carousel
//       className="  rounded rounded-3 shadow-lg w-100 py-4 px-3"
//       style={{
//         paddingTop: "20px",
//         background: "#172eed9e ",
//         marginBottom: "10px",
//       }}
//     >
//       {carasoulList.map((book) => {
//         const {
//           author,
//           createdAt,
//           createdBy,

//           description,
//           genre,
//           imageList,
//           imageUrl,
//           isbn,
//           lastUpdatedBy,
//           publishedDate,
//           slug,
//           smallDescription,
//           status,
//           stockQuantity,
//           title,
//           updatedAt,
//           _id,
//         } = book;

//         return (
//           <Carousel.Item key={book._id} className="w-100 h-100 ">
//             <div className="d-flex row  flex-wrap justify-content-around align-items-center w-100 px-5   ">
//               <Col></Col>
//               <Col md={4}>
//                 <h2>{title}</h2>
//                 <div>
//                   By:<strong>{author}</strong>
//                 </div>
//                 <h5>{smallDescription}</h5>
//               </Col>
//               <Col
//                 md={6}
//                 className="flex-grow-1 py-2 d-flex flex-wrap  "
//                 style={{ height: "50%" }}
//               >
//                 <img
//                   className=" "
//                   style={{
//                     display: "block",
//                     width: "100%",
//                     objectFit: "contain",
//                   }}
//                   src={
//                     import.meta.env.VITE_BASE_URL_BACKEND_IMG +
//                     imageUrl.slice(6)
//                   }
//                   alt=""
//                 />
//               </Col>
//             </div>
//           </Carousel.Item>
//         );
//       })}
//     </Carousel>
//   );
// };

// export default CustomCarousel;

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSelector } from "react-redux";
import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Col } from "react-bootstrap";

const CustomCarousel = (props) => {
  const { publicBookList } = useSelector((state) => state.bookInfo);

  const carasoulList = publicBookList?.filter((book) => book.Carousel == "Yes");

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ jump: true })]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla  px-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carasoulList?.map((book, index) => {
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
              <div className="embla__slide" key={index}>
                <div className="">
                  {/* add items here */}

                  <div className=" d-flex justify-content-around gap-5 px-2 shadow-lg py-3 flex-wrap">
                    <Col></Col>
                    <Col md={4}>
                      <h2>{title}</h2>

                      <div>
                        By:<strong>{author}</strong>
                      </div>
                      <h5>{smallDescription}</h5>
                    </Col>

                    <Col md={6} className=" d-flex flex-wrap  ">
                      <div style={{ width: "100%", height: "250px" }}>
                        <img
                          className=" "
                          style={{
                            display: "block",
                            width: "250px",
                            objectFit: "contain",
                            height: "250px",
                          }}
                          src={
                            import.meta.env.VITE_BASE_URL_BACKEND_IMG +
                            imageUrl.slice(6)
                          }
                          alt="cgg"
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {carasoulList?.map((book, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;
