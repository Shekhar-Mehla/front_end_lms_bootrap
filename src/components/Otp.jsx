import React, { useState } from "react";
import OtpInput from "react-otp-input";
import useForm from "../hooks/useForm";

const Otp = ({ setOtp, otp }) => {
  return (
    <OtpInput
      className="bg-danger"
      value={otp}
      onChange={setOtp}
      numInputs={4}
      inputStyle={{ height: "50px", width: "50px" }}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default Otp;
