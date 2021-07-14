import React from "react";

const Error = ({status, message}) => (
  <div className="not-found">
    <h2>{ message }</h2>
  </div>
);

export default Error;
