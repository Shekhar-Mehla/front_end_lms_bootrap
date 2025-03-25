import React, { useRef, useState } from "react";
import useForm from "../../../hooks/useForm";
import CustomInput from "../../CustomInput";
import { Form, Stack } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { postNewBook } from "../../../services/BookApi";
import { use } from "react";
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
      label: "Small Summary",
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
    <motion.div
      className="d-flex justify-content-center sigup_bg py-3 w-100  "
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
      <form
        onSubmit={handleOnSubmit}
        className="card bg-transaparent shadow flex-wrap p-3 m-3 w-75 text-white "
      >
        <h2 className="text-center mt-3">
          <FaBookOpen></FaBookOpen> Add new book!{" "}
        </h2>
        <hr />
        <Stack gap={1} className=" ">
          <Form.Switch
            className="d-flex align-items-center"
            type="switch"
            id="custom-switch"
            name="status"
            onChange={handleOnChange}
            label={<span className="mx-3">{form.status}</span>}
          />

          {newBookFields.map((item) => (
            <CustomInput
              className=""
              key={item.name}
              {...item}
              onChange={handleOnChange}
            ></CustomInput>
          ))}
          <Form.Label className="fw-bolder text-white">
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

          <Button name={"Add"} type="submit"></Button>
        </Stack>
      </form>
    </motion.div>
  );
};

export default NewBookForm;
