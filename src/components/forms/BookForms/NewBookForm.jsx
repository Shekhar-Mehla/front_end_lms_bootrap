import React from "react";
import useForm from "../../../hooks/useForm";
import CustomInput from "../../CustomInput";
import { Form, Stack } from "react-bootstrap";

const NewBookForm = () => {
  const { handleOnChange } = useForm();
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
      type: "email",
      name: "isbn",
      placeholder: "Enter isbn number",
      required: true,
    },
    {
      label: "Genre",
      type: "number",
      name: "genre",
      placeholder: "enter genre",
    },
  ];

  return (
    <Form>
      <Stack gap={1} className="  ">
        {newBookFields.map((item) => (
          <CustomInput
            className=""
            key={item.name}
            {...item}
            onChange={handleOnChange}
          ></CustomInput>
        ))}

        <Button name={"Add"} type="submit"></Button>
      </Stack>
    </Form>
  );
};

export default NewBookForm;
