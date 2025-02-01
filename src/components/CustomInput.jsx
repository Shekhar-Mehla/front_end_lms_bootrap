import React, { useRef } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import ErrorTooltip from "./tooltips/ErrorTooltip";

const CustomInput = ({ label, name, validationError, ...rest }) => {
  const target = useRef(null);
  return (
    <div className="inputsize">
      <Form.Label className="fw-bolder">
        {label}
        <span className="text-danger fw-bolder ">*</span>
      </Form.Label>
      <div>
        <Form.Control
          hasValidation
          {...rest}
          name={name}
          isInvalid={validationError[name]?.length ? true : false}
          ref={target}
        />
      </div>
      <div>
        {validationError[name]?.length &&
          validationError[name].map((error, i) => (
            <ErrorTooltip
              key={i}
              uniquekey={i}
              target={target}
              error={error}
            ></ErrorTooltip>
          ))}
      </div>
    </div>
  );
};

export default CustomInput;
