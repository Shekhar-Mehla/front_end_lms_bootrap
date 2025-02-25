import React, { useRef } from "react";
import { motion } from "framer-motion";

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
  console.log(validationError);
  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 1],

        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],

        repeatDelay: 1,
      }}
    >
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
    </motion.div>
  );
};

export default CustomInput;
