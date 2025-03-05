import React, { useEffect, useState } from "react";
import { Alert, Form, FormLabel } from "react-bootstrap";
import CustomInput from "./CustomInput";
import Button from "./Button/Button";
import useForm from "../hooks/useForm";
import Otp from "./Otp";
import { motion } from "framer-motion";
import { changePassword } from "../services/api.js";

const OtpForm = () => {
  const [otp, setOtp] = useState("");

  const { handleOnChange, validationError, form } = useForm({});
  const handleOnSubmitOTP = async (e) => {
    e.preventDefault();

    console.log(form);
    if (form.password === form.confirmpassword) {
      const data = { otp, ...form };
      const response = await changePassword(data);
      console.log(response);
      return;
    }

    console.log("did not match");

    // call api here
  };

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
            validationError={validationError}
            onChange={handleOnChange}
            {...item}
          ></CustomInput>
        ))}
        <Button
          type={"submit"}
          disable={
            validationError?.password?.length ||
            validationError?.confirmpassword?.length
          }
          name={"submit"}
        ></Button>
      </Form>
    </motion.div>
  );
};

export default OtpForm;
