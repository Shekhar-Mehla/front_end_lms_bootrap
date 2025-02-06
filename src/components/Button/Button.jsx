import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const Button = ({ name, type }) => {
  return (
    <motion.button
   animate= {{ x: [0, 100, 0] }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      className=" d-grid w-100 btn btn-primary mt-2 p-2"
    >
      {name}
    </motion.button>
  );
};

export default Button;
