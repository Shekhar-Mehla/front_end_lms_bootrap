import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const ActivateUser = () => {
  const [loader, setLoader] = useState(true);


  

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="mt-4 p-4">
        <Spinner animation="border" variant="primary" />
      </div>
      <div className="text-white mt-4">
        Please wait... and do not refresh the browser while we are processing
        your request.
      </div>
    </div>
  );
};

export default ActivateUser;
