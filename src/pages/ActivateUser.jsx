import React, { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSearchParams } from "react-router-dom";
import { activatUser } from "../services/api.js";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const ActivateUser = () => {
  const [loader, setLoader] = useState(true);
  const [serchParams] = useSearchParams();
  const [response, setResponse] = useState({});

  const _id = serchParams.get("id");
  const t = serchParams.get("t");
  const flagRef = t ? useRef(true) : useRef(false);

  useEffect(() => {
    if (_id && t && flagRef.current) {
      (async () => {
        const result = await activatUser(_id, t);
        const { status, message } = result;
        setLoader(false);

        setResponse({
          status,
          message,
        });
      })();
      flagRef.current = false;
    }
  }, [_id, t]);

  return (
    <>
      {loader ? (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="mt-4 p-4">
            <Spinner animation="border" variant="primary" />
          </div>
          <div className="text-white mt-4">
            Please wait... and do not refresh the browser while we are
            processing your request.
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center px-4">
          <Alert variant={response.status == "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
          {response.status == "success" && (
            <a href="/login">
              <Button> login now</Button>
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default ActivateUser;
