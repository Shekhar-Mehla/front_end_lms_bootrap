import React from "react";

const HomePageTittle = ({ tittle }) => {
  return (
    <div className="d-flex justify-content-center shadow-sm align-items-center my-2 px-2">
      <h2 style={{ wordSpacing: "3px", letterSpacing: "3px" }}>{tittle}</h2>
      <div
        style={{ height: "3px", marginLeft: "3px", background: "#787373" }}
        className="flex-grow-1 d-block shadow-lg  "
      ></div>
    </div>
  );
};

export default HomePageTittle;
