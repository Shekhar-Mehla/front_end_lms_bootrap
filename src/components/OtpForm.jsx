import React, { useState } from "react";
import { Alert, Form, FormLabel } from "react-bootstrap";
import CustomInput from "./CustomInput";
import Button from "./Button/Button";
import useForm from "../hooks/useForm";
import Otp from "./Otp";
import { motion } from "framer-motion";

const OtpForm = () => {
  const [otp, setOtp] = useState("");

  const { handleOnChange, form } = useForm();
  const handleOnSubmitOTP = (e) => {
    e.preventDefault();
    console.log(e);

    const obj = { otp, ...form };

    // call api here
  };
  console.log(otp);
  const otpFormInput = [
    {
      label: "New Password*",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
    },
    {
      label: " Confirm New Password",
      type: "text",
      name: "confirmpassword",
      placeholder: "*****",
      required: true,
      autoComplete: "new-password",
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
    >
      <Alert variant="success">
        We have sent an OTP to your email.<br></br> Please check your inbox.{" "}
        <br></br>If you have not received the OTP, kindly check your spam/junk
        folder.<br></br> If you still haven’t received it, please request a new
        OTP
      </Alert>
      <Form onSubmit={handleOnSubmitOTP}>
        <FormLabel className="text-white">OTP</FormLabel>
        <Otp setOtp={setOtp} otp={otp}></Otp>
        {otpFormInput.map((item) => (
          <CustomInput
            key={item.name}
            onChange={handleOnChange}
            {...item}
          ></CustomInput>
        ))}
        <Button type={"submit"} name={"submit"}></Button>
      </Form>
    </motion.div>
  );
};

export default OtpForm;
