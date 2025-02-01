import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import React from "react";

const ErrorTooltip = ({ error, target, uniquekey }) => {
  return (
    <Overlay
      target={target.current}
      show={error?.length ? true : false}
      placement="right"
    >
      {({
        placement: _placement,
        arrowProps: _arrowProps,
        show: _show,
        popper: _popper,
        hasDoneInitialMeasure: _hasDoneInitialMeasure,
        ...props
      }) => (
        <div
          {...props}
          style={{
            position: "absolute",
            backgroundColor: "rgba(195, 9, 9, 0.85)",
            padding: "6px 10px",
            color: "white",
            borderRadius: 4,
            border: 4,
            ...props.style,
          }}
        >
          {error}
        </div>
      )}
    </Overlay>
  );
};

export default ErrorTooltip;
