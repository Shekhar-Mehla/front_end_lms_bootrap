import { useState, useEffect } from "react";

import InputValidator from "../Utility/validators/InputValidator.jsx";

// handle on change
const handleOnChange = ({
  e,
  setForm,
  form,
  validationError,
  setValidationError,
}) => {
  const { value, name } = e.target;

  const errorrobj = InputValidator(name, value);
  console.log(errorrobj);
  setValidationError({ ...errorrobj });

  return setForm({ ...form, [name]: value });
};

const useForm = (initial_state) => {
  const [form, setForm] = useState(initial_state);
  const [validationError, setValidationError] = useState({
    FName: "",
    LName: "",
    phone: "",
    email: "",
    password: "",

    confirmpassword: "",
  });

  return {
    form,
    validationError,

    setForm,
    handleOnChange: (e) =>
      handleOnChange({ e, setForm, form, setValidationError, validationError }),
  };
};

export default useForm;
