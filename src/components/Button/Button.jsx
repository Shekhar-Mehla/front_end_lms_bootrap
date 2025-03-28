import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const Button = ({ name, type, disable, varient, width, icon }) => {
  return (
    <motion.button
      animate={{ x: [0, 100, 0] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      disabled={disable}
      className={`  d-grid w-${width ? width : 0} btn btn-${varient}  mb-3 p-2`}
    >
      {name}
      {icon}
    </motion.button>
  );
};

export default Button;
