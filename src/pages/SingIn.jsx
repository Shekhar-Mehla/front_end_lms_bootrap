import React, { useEffect, useRef, useState } from "react";


import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import CustomInput from "../components/CustomInput.jsx";

import { loginUser } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { userAction, autoLogin } from "../feature/user/userAction.js";

import LoaderPage from "./LoaderPage.jsx";

const SignIn = () => {
  const { user } = useSelector((state) => state.userInfo);

  const navigator = useNavigate();
  const location = useLocation();

  const dispatchUser = useDispatch();
  const [loader, setLoader] = useState(true);

  const path = location?.state?.pathname || "/user";
  console.log(path);

  const { form, handleOnChange, validationError } = useForm({});

  useEffect(() => {
    user?._id ? navigator(path) : loader && dispatchUser(autoLogin());
    setLoader(false);
  }, [user._id, loader, path]);

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
    <div className="signIngBackgroud d-flex   justify-content-center align-items-center">
      {loader ? (
        <>
          <LoaderPage></LoaderPage>
        </>
      ) : (
        <>
          {" "}
          <Row className="">
            <Col>
              <Card className="mt-3 bg-transaparent mb-3 px-5 py-3">
                <h3 className=" text-center text-white fw-bolder">
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
                    className="btn btn-primary my-3 d-grid w-100"
                    type="submit"
                  >
                    Sign In
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
                  <Link to="/forgot-password " className="">
                    Reset Now
                  </Link>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default SignIn;
