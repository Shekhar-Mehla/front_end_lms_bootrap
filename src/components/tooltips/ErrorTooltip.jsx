import Overlay from "react-bootstrap/Overlay";

import React from "react";

const ErrorTooltip = ({ error, target }) => {
  return (
    <Overlay
      target={target.current}
      show={error?.length ? true : false}
      placement="bottom"
    >
      {({
        placement: _placement,
        arrowProps: _arrowProps,
        show: _show,
        popper: _popper,
        hasDoneInitialMeasure: _hasDoneInitialMeasure,
        inset,

        ...props
      }) => (
        <div className="error-tooltip"
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
          {error.map((er, i) => (
            <li key={i}>{er}</li>
          ))}
        </div>
      )}
    </Overlay>
  );
};

export default ErrorTooltip;
