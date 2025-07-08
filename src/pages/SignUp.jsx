import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";

import Stack from "react-bootstrap/Stack";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { resgisterUser } from "../services/api";
import { Col, Row, Button } from "react-bootstrap";

const SignUp = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const { handleOnChange, validationError, form } = useForm({
    FName: "qwweee",
    LName: "qweerr",
    phone: "123456789",
    email: "ssss112@gmail.com",
    password: "Aa1234@",

    confirmpassword: "Aa1234@",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabledButton(true);
    const result = await resgisterUser(form);
    if (result) {
      setTimeout(() => setDisabledButton(false), 2000);
    }
  };

  return (
    <div className="signIngBackgroud">
      <Row className="d-flex  p-4 justify-content-center align-items-stretch ">
        <Col md={4} className="bg-white d-flex justify-content-center">
          <div class="join-us">
            <h2>Join Us Today!</h2>
            <p>
              Be part of a growing community, get exclusive benefits, and start
              your journey with us.
            </p>
            <ul>
              <li>✔ Free account setup</li>
              <li>✔ Access to premium content</li>
              <li>✔ Personalized dashboard</li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center py-2  sigup_bg  bg-transaparent w-100  ">
            <form
              className="    shadow flex-wrap px-3 text-white "
              onSubmit={handleSubmit}
            >
              <h2 className="text-center mt-3">
                Join our library family—adventures, learning, and stories await{" "}
              </h2>

              <hr />
              <Stack gap={1} className="  ">
                {signUpInputFields.map((item) => (
                  <CustomInput
                    className=""
                    key={item.name}
                    {...item}
                    validationError={validationError}
                    onChange={handleOnChange}
                  ></CustomInput>
                ))}

                <Button type="submit" className="btn btn-primary mb-2 mt-2">
                  Sign Up{" "}
                </Button>
              </Stack>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
