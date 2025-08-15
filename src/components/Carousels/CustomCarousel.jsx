

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Col } from "react-bootstrap";

const CustomCarousel = (props) => {
  const { publicBookList } = useSelector((state) => state.bookInfo);

  const carasoulList = publicBookList?.filter((book) => book.Carousel == "Yes");
  console.log(publicBookList);

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ delay: 4000, speed: 200, align: "center" }),
  ]);

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
    <section className="embla py-3 border-rounded">
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
            console.log(imageUrl);
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
                          src={imageUrl}
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

      <div className="embla__control p-3 ">
        <div className="embla__dots ">
          {carasoulList?.map((book, index) => {
            console.log(book);
            return (
              <DotButton
                key={index}
                imageUrl={book.imageUrl}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;
