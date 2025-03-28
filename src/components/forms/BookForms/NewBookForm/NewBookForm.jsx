import React, { useRef, useState } from "react";
import useForm from "../../../../hooks/useForm";
import CustomInput from "../../../CustomInput";
import { Card, Col, Form, InputGroup, Row, Stack } from "react-bootstrap";
import Button from "../../../Button/Button";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { postNewBook } from "../../../../services/BookApi";
import style from "./NewBookForm.module.css";
import formImg from "../../../../assets/images/newBookFORM.jpg";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const NewBookForm = () => {
  const { handleOnChange, form, setForm } = useForm({});
  const [img, setImg] = useState();

  const formdata = new FormData();

  const handleOnFileChange = (e) => {
    const { files } = e.target;
    setImg(files);
  };

  const newBookFields = [
    {
      label: "Title",
      type: "text",
      name: "title",
      placeholder: "book tittile",
      required: true,
    },
    {
      label: "Author",
      type: "text",
      name: "author",
      placeholder: "Author Name",
      required: true,
    },
    {
      label: "ISBN",
      type: "number",
      name: "isbn",
      placeholder: "Enter isbn number",
      required: true,
    },
    {
      label: "Genre",
      type: "text",
      name: "genre",
      placeholder: "enter genre",
    },
    {
      label: "Publish Year",
      type: "number",
      name: "publishedDate",
      placeholder: "enter publish",
      max: new Date().getFullYear(),
      min: 1500,
    },
    {
      label: "Small Description",
      type: "text",
      name: "smallDescription",
      placeholder: "enter Small Summary",
    },
    {
      label: "Description",
      type: "text",
      name: "description",
      placeholder: " Enter Book Description ",
      as: "textarea",
    },
    {
      label: "Quantity",
      type: "number",
      name: "stockQuantity",
      placeholder: " Enter Quantity ",
      min: 1,
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();

    for (let key in form) {
      formdata.append(key, form[key]);
    }

    if (img.length) {
      for (let index = 0; index < img.length; index++) {
        formdata.append("images", img[index]);
      }
    }
    postNewBook(formdata);
    for (let keys in form) {
      formdata.delete(keys);
    }
    formdata.delete("images");
  };

  return (
    <div className={style.bg_form_background}>
      <h2 className="px-3 text-dark">
        <FaBookOpen></FaBookOpen> INSERT NEW BOOK FORM{" "}
      </h2>

      <div className={` ${(style.round, style.pading)} my-1 mx-1  `}></div>

      <Row>
        <Col md={6} className="px-2 d-flex flex-wrap ">
          {" "}
          <Link className="text-primary" to="/user/admin-book-table">
            <IoArrowBackOutline className=""></IoArrowBackOutline>Go Back
          </Link>
          <h2>
            <center className="text-dark py-4">
              Expand Our Library, One Book at a Time!
            </center>
          </h2>
          <Card className="shadow">
            <img src={formImg} className="shadow " />
          </Card>
        </Col>
        <Col>
          <motion.div
            style={{ width: "" }}
            className="d-flex justify-content-center shadow "
            animate={{
              scale: [0, 1],

              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.3, 1],

              repeatDelay: 1,
            }}
          >
            <div>
              <img src="" alt="" />
            </div>
            <form onSubmit={handleOnSubmit} className="card px-5 py-3">
              <Stack gap={1} className=" ">
                {newBookFields.map((item) => (
                  <CustomInput
                    className={`${style.round} px-3`}
                    key={item.name}
                    {...item}
                    onChange={handleOnChange}
                  ></CustomInput>
                ))}
                <Row className="d-flex gap-2">
                  <Col md={6} sm={6}>
                    {" "}
                    <Form.Label className="fw-bolder  ">
                      Choose files
                      <span className="text-danger fw-bolder ">*</span>
                    </Form.Label>
                    <Form.Control
                      name="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleOnFileChange}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label className="fw-bolder">
                      Status <span className="text-danger fw-bolder ">*</span>
                    </Form.Label>
                    <Form.Switch
                      className="d-flex align-items-center"
                      type="switch"
                      id="custom-switch"
                      name="status"
                      onChange={handleOnChange}
                      label={
                        <span className="mx-3">
                          {form.status ? form.status : "InActive"}
                        </span>
                      }
                    />
                  </Col>
                </Row>

                <Button name={"Add"} varient={"primary"} type="submit"></Button>
              </Stack>
            </form>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default NewBookForm;
