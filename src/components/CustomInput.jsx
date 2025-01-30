import React from "react";

import Form from "react-bootstrap/Form";

const CustomInput = ({ label, inputError, name, error, ...rest }) => {
  return (
    <div className="inputsize">
      <Form.Label className="fw-bolder">
        {label}
        <span className="text-danger fw-bolder ">*</span>
      </Form.Label>
      <div>
        <Form.Control {...rest} name={name} />
      </div>
      <div>{console.log(inputError)}</div>
    </div>
  );
};

export default CustomInput;
