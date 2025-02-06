import React, { useEffect } from "react";

import { Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import CustomInput from "../components/CustomInput.jsx";

import { loginUser } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { userAction, autoLogin } from "../feature/user/userAction.js";
import Button from "../components/Button/Button.jsx";

const SignIn = () => {
  const { user } = useSelector((state) => state.userInfo);
  const navigator = useNavigate();

  const dispatchUser = useDispatch();
  const { form, handleOnChange, validationError } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    user?._id ? navigator("/user") : dispatchUser(autoLogin());
  }, [user?._id, navigator, dispatchUser]);
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

  // form submit
  const submitHnadler = async (e) => {
    e.preventDefault();

    const { payload, status, message } = await loginUser(form);
    if (status == "success") {
      const { accessJwt, refreshJwt } = payload;
      if (accessJwt && refreshJwt) {
        localStorage.setItem("refreshJwt", payload.refreshJwt);
        sessionStorage.setItem("accessJwt", payload.accessJwt);
        // fetch user profile dataflow
        // 1.check token in session storage

        dispatchUser(userAction());
      }
    }

    return;
  };

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
            <Form onSubmit={submitHnadler}>
              {signInInput.map((item) => (
                <CustomInput
                  key={item.name}
                  validationError={validationError}
                  onChange={handleOnChange}
                  {...item}
                ></CustomInput>
              ))}
              <Button
                
                type={"submit"}
                name={"signIn"}
              ></Button>
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
    </div>
  );
};

export default SignIn;
