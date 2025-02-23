import React from "react";
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

const ForgotPassword = () => {
  const { handleOnChange } = useForm();

  return (
    <div className="sigup_bg signInHeight text-white  sign d-flex shadow  mb-2  justify-content-center align-items-center  ">
      <Row className="">
        <Col>
          {" "}
          <Card
            className="mt-3   mb-3 p-5"
            style={{
              backgroundColor: "rgb(0 0 0 / 50%)",
              color: " #e1f8fe",
              width: "150%",
            }}
          >
            <h3 className="p-2 text-center text-white">Forgot Password?</h3>
            <p className="text-white">
              Don’t worry, we’ll send an OTP to your email to reset your
              password.
            </p>
            <p className="P"></p>

            <hr></hr>
            <Form>
              <FormLabel>Email</FormLabel>
              <FormControl type="text"></FormControl>
              <Button type={"submit"} name={"Request OTP"}></Button>
            </Form>

            <hr></hr>
            <Alert variant="success"> we have sent you otp on your email</Alert>
            <Form>
              <FormLabel>OTP</FormLabel>
              <FormControl type="password"></FormControl>
              <FormLabel>New Password</FormLabel>
              <FormControl type="password"></FormControl>
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl type="password"></FormControl>
              <Button type={"submit"} name={"submit"}></Button>
            </Form>

            <center className="mt-2 ">
              <Link to="/login" className="">
                <FaArrowLeft /> back to login
              </Link>
            </center>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;
