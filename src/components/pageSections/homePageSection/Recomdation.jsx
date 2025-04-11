import React from "react";
import HomePageTittle from "../../tittle/HomePageTittle";
import { Row } from "react-bootstrap";
import ProductCard from "../../Cards/ProductCard";

const Recomdation = () => {
  return (
    <div>
      <HomePageTittle tittle={"Reoconded books"}></HomePageTittle>
      <Row className="my-4 px-2 d-flex flex-wrap justify-content-center  gap-3 ">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
       
      </Row>
    </div>
  );
};

export default Recomdation;
