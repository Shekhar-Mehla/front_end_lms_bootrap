import React from "react";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/c2.jpg";
import c3 from "../../assets/images/c3.jpg";
import HeroCard from "../Cards/heroCard";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="w-100">
        <img src={c1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
