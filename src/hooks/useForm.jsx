import { useState, useEffect } from "react";

import InputValidator from "../Utility/validators/InputValidator.jsx";

// handle on change
const handleOnChange = ({
  e,
  setForm,
  form,

  setValidationError,
}) => {
  let { value, name, checked } = e.target;
  if (name == "status") {
    checked === true ? (value = "active") : (value = "inActive");
  }

  const errorrobj = InputValidator(name, value, form.password);

  setValidationError({ ...errorrobj });

  return setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initial_state) => {
  const [form, setForm] = useState(initial_state);
  const [images, setImages] = useState([]);

  const [validationError, setValidationError] = useState({});

  return {
    form,
    validationError,

    setForm,
    handleOnChange: (e) =>
      handleOnChange({
        e,
        setForm,
        form,
        setValidationError,
        validationError,
        images,
        setImages,
      }),
  };
};

export default useForm;
