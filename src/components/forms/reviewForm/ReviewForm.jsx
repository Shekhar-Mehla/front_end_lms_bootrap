import React, { useState } from "react";
import CustomInput from "../../CustomInput";
import useForm from "../../../hooks/useForm";
import { FaStar } from "react-icons/fa6";
import Button from "../../Button/Button";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { submitReview } from "../../../feature/review/reviewApi";
const ReviewForm = ({ setAlert }) => {
  const [rating, setRating] = useState(5);
  const [star, setStar] = useState("");
  const { user } = useSelector((state) => state.userInfo);
  const { siglePublicBook } = useSelector((state) => state.bookInfo);
  console.log(siglePublicBook);

  const reviewInputFieldsForUser = [
    {
      label: "Review Title",
      type: "text",
      name: "title",
      placeholder: "Short summary or title",
      maxLength: 255,
    },
    {
      label: "Comment",
      type: "textarea",
      name: "comment",
      placeholder: "Write your detailed review here...",
      maxLength: 2000,
    },
  ];
  const intitialstate = { title: "", comment: "", rating: "" };
  const { handleOnChange, form, setForm } = useForm(intitialstate);
  const navigae = useNavigate();
  const location = useLocation();

  const handleOnStarClick = (i) => {
    setRating(i);
    setStar("text-warning");
    form.rating = i;
  };
  const otherstarlenth = 5 - rating;
  const handleOnemptyStarClick = (i) => {
    setRating(rating + i);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (user?._id) {
      if (form.rating && form.comment && form.title) {
        // make api call
        form.bookId = siglePublicBook?._id;
        form.userId = user?._id;
        const result = await submitReview(form);
        const { status, message } = result;
        setAlert(status);
        console.log(message);

        console.log(status);
      } else {
        toast.error("all fields are required");
      }
    } else {
      // navigate user to login page\
      navigae("/login", {
        state: {
          pathname: location.pathname,
        },
      });
    }
  };

  return (
    <div className="flex">
      <div>
        <div>Rating</div>
        <div>
          <span>
            {Array.from({ length: rating }).map((input, i) => {
              return (
                <FaStar
                  key={i}
                  onClick={() => handleOnStarClick(i + 1)}
                  className={`${star}`}
                ></FaStar>
              );
            })}
          </span>
          <span>
            {Array.from({ length: otherstarlenth }).map((input, i) => {
              return (
                <FaStar
                  key={i}
                  onClick={() => handleOnemptyStarClick(i + 1)}
                ></FaStar>
              );
            })}
          </span>
        </div>
      </div>
      <div>
        <form onSubmit={handleOnSubmit} className="d-flex flex-column gap-3">
          {reviewInputFieldsForUser.map((inputs) => {
            return (
              <CustomInput {...inputs} onChange={handleOnChange}></CustomInput>
            );
          })}
          <Button
            className=""
            width={"100"}
            name={"Submit"}
            varient={"dark"}
            type="submit"
          >
            {" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
