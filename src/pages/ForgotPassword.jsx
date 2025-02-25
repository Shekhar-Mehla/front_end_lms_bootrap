import React, { useState } from "react";
import {
  Alert,
  Card,
  Col,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { FaArrowLeft } from "react-icons/fa";
import Otp from "../components/Otp";
import OtpForm from "../components/OtpForm";

const ForgotPassword = () => {
  const [show, setShow] = useState(false);

  const { handleOnChange, form } = useForm({
    confirmpassword: "",
    password: "",
  });

  const handleOnRequestOtpm = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const otprequest = [
    {
      label: "Email*",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required: true,
    },
  ];
  return (
    <div className="  text-white  d-flex   mb-2  justify-content-center align-items-center  ">
      <Row className="">
        <Col>
          {" "}
          <Card className="mt-3 bg-transaparent  mb-3 p-3">
            <h3 className="mt-1 text-center text-white">Forgot Password?</h3>
            <p className="text-white">
              Don’t worry, we’ll send an OTP to your email to reset your
              password.
            </p>
            <p className="P"></p>

            <hr></hr>
            <Form onSubmit={handleOnRequestOtpm}>
              {otprequest.map((item) => (
                <CustomInput
                  key={item.name}
                  onChange={handleOnChange}
                  {...item}
                ></CustomInput>
              ))}

              <Button type={"submit"} name={"Request OTP"}></Button>
            </Form>

            {show && <OtpForm></OtpForm>}

            <Link to="/login">
              <center className=" ">
                <FaArrowLeft /> back to login
              </center>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;
