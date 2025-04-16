import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";

import Stack from "react-bootstrap/Stack";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { resgisterUser } from "../services/api";
import { Col, Row, Button } from "react-bootstrap";
import signupimg from "../assets/images/signupimg.jpg";

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
      <Row className="d-flex p-3 rounded justify-content-center align-items-center ">
        <Col md={5} className="bg-white ">
          <h2 className="text-center mt-3">
            Join our library family—adventures, learning, and stories await{" "}
          </h2>
          <hr />
          <div
            className="d-flex justify-content-center"
            style={{ width: "100%", height: "500px", background: "white" }}
          >
            <img
              width={"80%"}
              height={"80%"}
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={signupimg}
              alt=""
            />
          </div>
          <h2 className="text-center text-bold text-primary">Join Us Today!</h2>
        </Col>
        <Col md={4}>
          <motion.div
            className="d-flex justify-content-center sigup_bg py-3 w-100  "
            animate={{
              scale: [0, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.3, 1],

              repeatDelay: 1,
            }}
          >
            <form
              className="   bg-transaparent shadow flex-wrap px-3 text-white "
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
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
