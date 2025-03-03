import React, { useEffect, useState } from "react";
import {
  Alert,
  Card,
  Col,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import { motion } from "framer-motion";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

import OtpForm from "../components/OtpForm";

import Loader from "../components/Loader";
import { getotp } from "../services/api";

const ForgotPassword = () => {
  const timing = 10;
  const [show, setShow] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [count, setcuount] = useState(0);

  const { handleOnChange, form } = useForm({ email: "" });

  const handleOnRequestOtpm = async (e) => {
    e.preventDefault();
    console.log(e);
    // show loader
    setIsLoading(true);
    setdisabled(true);
    // call api
    console.log(form);
    const { status } = await getotp(form);
    if (status) {
      setIsLoading(false);
      setcuount(timing);
      setShow(true);
    }
  };

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setcuount(count - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
    if (count === 0) {
      setdisabled(false);
    }
  }, [count]);

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
    <motion.div
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
      className="  text-white  d-flex   mb-2  justify-content-center align-items-center  "
    >
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

              <Button
                type={"submit"}
                disable={disabled}
                name={
                  isLoading ? (
                    <Loader></Loader>
                  ) : count > 0 ? (
                    `request OTP again ${count} `
                  ) : (
                    "request OTP"
                  )
                }
              >
                {" "}
              </Button>
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
    </motion.div>
  );
};

export default ForgotPassword;
