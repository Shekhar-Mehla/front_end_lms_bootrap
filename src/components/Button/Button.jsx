import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const Button = ({ name, type, disable }) => {
  return (
    <motion.button
      animate={{ x: [0, 100, 0] }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      disabled={disable}
      className=" d-grid w-100 btn btn-primary mt-2 mb-3 p-2"
    >
      {name}
    </motion.button>
  );
};

export default Button;
