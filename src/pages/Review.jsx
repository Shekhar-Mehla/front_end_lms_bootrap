import React from "react";
import Star from "../components/stars/Star";
import { formatDistance, parseISO } from "date-fns";

const Review = ({
  name = "Shekhar",
  title = "This is an awesome book",
  createdAt = "2020-02-02",
  rating = 3.5,
  avatarUrl = null, // Optional URL for avatar image
  reviewText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aut iure sed eligendi, ea deserunt obcaecati sunt eum nemo, illo perspiciatis voluptates tempora nam alias laborum sint impedit suscipit esse?",
}) => {
  const formattedDate = formatDistance(parseISO(createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="border rounded p-3 d-flex gap-3 shadow-sm review-card">
      {/* LEFT AVATAR */}
      <div className="left d-flex justify-content-center align-items-start">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="rounded-circle shadow-sm"
            style={{ width: 60, height: 60, objectFit: "cover" }}
          />
        ) : (
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center shadow-sm"
            style={{
              width: 60,
              height: 60,
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {name[0].toUpperCase()}
          </div>
        )}
      </div>

      {/* RIGHT CONTENT */}
      <div className="right d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="mb-0">{title}</h5>
          <small className="text-muted">{formattedDate}</small>
        </div>

        <div className="d-flex gap-2 align-items-center mb-2">
          <Star avgRating={rating} />
          <span className="fw-bold">{rating.toFixed(1)}</span>
        </div>

        <p className="mb-0 text-muted">{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
