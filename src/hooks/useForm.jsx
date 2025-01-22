import { useState, useEffect } from "react";

import { inputValidator } from "../Utility/validators/InputValidator.jsx";

// handle on change
const handleOnChange = ({ e, setForm, form }) => {
  const { value, name } = e.target;

  return setForm({ ...form, [name]: value });
};

const useForm = (initial_state) => {
  const [form, setForm] = useState(initial_state);
  const [validationError, setValidationError] = useState([]);

  useEffect(() => {
    const error = inputValidator(
      form.phone,
      form.email,
      form.password,
      form.confirmpassword,
      form.FName,
      form.LName
    );
    error.length && setValidationError(error);
  }, [
    form.phone,
    form.email,
    form.password,
    form.confirmpassword,
    form.FName,
    form.LName,
  ]);

  return {
    form,
    validationError,

    setForm,
    handleOnChange: (e) => handleOnChange({ e, setForm, form }),
  };
};

export default useForm;
