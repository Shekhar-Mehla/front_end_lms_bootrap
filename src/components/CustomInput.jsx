import React, { useRef } from "react";

import Form from "react-bootstrap/Form";
import ErrorTooltip from "./tooltips/ErrorTooltip";

const CustomInput = ({ label, name, validationError = "", ...rest }) => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  };
  const target = useRef(null);

  return (
    <div>
      <div className="inputsize">
        <Form.Label className="fw-bolder text-white">
          {label}
          <span className="text-danger fw-bolder ">*</span>
        </Form.Label>
        <div>
          <Form.Control
            className=""
            {...rest}
            name={name}
            isInvalid={validationError[name]?.length ? true : false}
            ref={target}
          />
        </div>
        <div>
          {validationError[name]?.length ? (
            <ErrorTooltip
              target={target}
              error={validationError[name]}
            ></ErrorTooltip>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
