import React from "react";

import Form from "react-bootstrap/Form";

const CustomInput = ({
  label,

  name,

  ...rest
}) => {
  return (
    <div className="inputsize">
      <Form.Label className="fw-bolder">
        {label}
        <span className="text-danger fw-bolder ">*</span>
      </Form.Label>
      <div>
        <Form.Control {...rest} name={name} />
      </div>
    </div>
  );
};

export default CustomInput;
