import React from "react";
import CustomInput from "../components/CustomInput";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import InputValidatorTooltip from "../components/tooltips/InputValidatorTooltip";
const SignIn = () => {
  const { form } = useForm({
    email: "",
    password: "",
  });
  const signInInput = [
    {
      label: "Email*",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required: true,
    },

    {
      label: "Password*",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <div className="sigup_bg signInHeight   sign d-flex shadow  mb-2  justify-content-center align-items-center  ">
      <Row className="">
        <Col>
          <Card
            className="mt-3  mb-3 p-5"
            style={{ backgroundColor: "rgb(0 0 0 / 50%)", color: " #e1f8fe" }}
          >
            <h3 className="p-2 text-center fw-bolder">
              Welcome to your local Library!
            </h3>
            <hr></hr>
            <Form>
              {signInInput.map((item) => (
                <CustomInput key={item.name} {...item}></CustomInput>
              ))}
              <Button type="submit" className="p-2 w-100  mb-2 ">
                Sign Up
              </Button>
            </Form>
            <Card.Text className="me-auto">
              dont have account ?{" "}
              <Link className="text-style-none" to="/register">
                Register Now
              </Link>{" "}
              <Link className="text-style-none" to="/register"></Link>{" "}
            </Card.Text>
            <Card.Text className="me-atuo  ">
              Forgot password ?{" "}
              <Link to="forgot-password " className="">
                Reset Now
              </Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <InputValidatorTooltip></InputValidatorTooltip>
    </div>
  );
};

export default SignIn;
