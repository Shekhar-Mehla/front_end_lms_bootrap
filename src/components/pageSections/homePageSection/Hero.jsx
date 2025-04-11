import React from "react";
import CustomCarousel from "../../Carousels/CustomCarousel";
import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="mx-1 my-4 py-4 " style={{ height: "40vh", width: "100%" }}>
      {" "}
      <CustomCarousel></CustomCarousel>;
    </div>
  );
};

export default Hero;
