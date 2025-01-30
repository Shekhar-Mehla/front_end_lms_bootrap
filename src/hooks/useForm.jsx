import { useState, useEffect } from "react";

import InputValidator from "../Utility/validators/InputValidator.jsx";

// handle on change
const handleOnChange = ({ e, setForm, form }) => {
  const { value, name } = e.target;

  return setForm({ ...form, [name]: value });
};

const useForm = (initial_state) => {
  const [form, setForm] = useState(initial_state);
  const [validationError, setValidationError] = useState({
    FName: [],
    LName: [],
    phone: [],
    email: [],
    password: [],

    confirmpassword: [],
  });
  const { phone, email, password, confirmpassword, FName, LName } = form;
  useEffect(() => {
    const error = InputValidator({
      phone,
      email,
      password,
      confirmpassword,
      FName,
      LName,
    });

    setValidationError(error);
  }, [
    form.phone,
    form.email,
    form.password,
    form.confirmpassword,
    form.FName,
    form.LName,
  ]);
  console.log(validationError);
  return {
    form,
    validationError,

    setForm,
    handleOnChange: (e) => handleOnChange({ e, setForm, form }),
  };
};

export default useForm;
