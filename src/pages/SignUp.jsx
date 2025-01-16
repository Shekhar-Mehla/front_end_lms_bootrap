import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Stack from "react-bootstrap/Stack";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { resgisterUser } from "../services/api";

const SignUp = () => {
  const { handleOnChange, validationError, form } = useForm({
    FName: "",
    LName: "",
    phone: "",
    email: "",
    password: "",

    confirmpassword: "",
  });

  const signUpInputFields = [
    {
      label: "Given Name",
      type: "text",
      name: "FName",
      placeholder: "Given Name",
      required: true,
    },
    {
      label: "Family Name",
      type: "text",
      name: "LName",
      placeholder: "Family Name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required: true,
    },
    {
      label: "Phone",
      type: "number",
      name: "phone",
      placeholder: "047565747",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
      autoComplete: "new-password",
    },
    {
      label: " Confirm Password",
      type: "password",
      name: "confirmpassword",
      placeholder: "*****",
      required: true,
      autoComplete: "new-password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = resgisterUser(form);
    console.log(result);
  };

  return (
    <div className="d-flex justify-content-center sigup_bg py-3 w-100  ">
      <Form
        className="  card bg-transaparent shadow flex-wrap px-3 text-white "
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mt-3">Welcome to the Family </h2>
        <hr />
        <Stack gap={1} className="  ">
          {signUpInputFields.map((item) => (
            <CustomInput
              className=""
              key={item.name}
              {...item}
              onChange={handleOnChange}
            ></CustomInput>
          ))}
          {console.log(validationError)}
          <Button
            type="submit"
            disabled={validationError.length > 0 ? true : false}
            className="my-2"
          >
            Sign Up
          </Button>
          <div>
            {validationError.length > 0 &&
              validationError.map((error, i) => (
                <li className="bg-danger rounded-2 px-2 py-2" key={i}>
                  {error}
                </li>
              ))}
          </div>
        </Stack>
      </Form>
    </div>
  );
};

export default SignUp;
