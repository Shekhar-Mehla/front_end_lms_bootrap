import React from "react";
import { FaRegStarHalf, FaStar } from "react-icons/fa";
import { FaRegStar, FaStarHalfStroke } from "react-icons/fa6";

const Star = ({ avgRating = 3.2 }) => {
  const tottalStar = [];
  const maxStar = 5;
  const fullstar = Math.floor(avgRating);
  const isHalfstars = !Number.isInteger(avgRating);
  const emptyStars = maxStar - fullstar - (isHalfstars ? 1 : 0);

  for (let index = 0; index < fullstar; index++) {
    tottalStar.push(<FaStar className="text-warning"></FaStar>);
  }
  if (isHalfstars) {
    tottalStar.push(<FaRegStarHalf className="text-warning" />);
  }
  for (let index = 0; index < emptyStars; index++) {
    tottalStar.push(<FaRegStar />);
  }

  return <div className="shadow-md d-inline bg-muted">{tottalStar}</div>;
};

export default Star;
