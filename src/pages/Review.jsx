import React from "react";
import Star from "../components/stars/Star";
import { formatDistance, subDays } from "date-fns";

const Review = ({
  name = "shekhar",
  tittle = "This is a wsome book",
  createdAt = "2020/2/2",
  rating = 3.5,
}) => {
  return (
    <div className=" border review border-lg  px-2 py-3 d-flex gap-3">
      <div className="left  d-flex justify-content-center align-items-center">
        <div className="avatar">
          <div className="shadow-lg fw-bold  d-flex justify-content-center align-items-center">
            {name}
          </div>
        </div>
      </div>
      <div className="right d-flex  flex-column  ">
        <h3>{tittle}</h3>
        <div className="d-flex gap-2 align-items-center">
          <Star avgRating={rating}></Star>
          <div>
            {" "}
            {/* {formatDistance(subDays(new Date(createdAt)), new Date(), {
              addSuffix: true,
            })} */}
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          aut iure sed eligendi, ea deserunt obcaecati sunt eum nemo, illo
          perspiciatis voluptates tempora nam alias laborum sint impedit
          suscipit esse?
        </p>
      </div>
    </div>
  );
};

export default Review;
