import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

export const InputValidatorTooltip = () => {
  const [show, setShow] = useState(true);
  const target = useRef(null);

  return (
    <>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default InputValidatorTooltip;
