import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div style={{height:"300px"}} className="w-100 d-flex justify-content-center align-items-center">
      <Spinner animation="glow" variant="dark" />
    </div>
  );
};

export default Loading;
