// import React from "react";
// import Spinner from "react-bootstrap/Spinner";

// const Loader = () => {
//   return (
//     <center>
//       <Spinner animation="border" variant="white" />
//     </center>
//   );
// };

// export default Loader;
import { useAnimationFrame } from "motion/react";
import React, { useRef } from "react";

const Loader = () => {
  const ref = useRef(null);
  const time = 10;
  useAnimationFrame((time, delta) => {
    ref.current.style.transform = `rotateY(${time}deg)`;
  });

  return <div ref={ref} />;
};
export default Loader;
