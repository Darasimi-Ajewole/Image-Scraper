import React from "react";

const Error = ({status, message}) => (
  <div className="not-found">
    <h2>Oops, Something went wrong</h2>
    <p>{ (message && decodeURI(message)) }</p>
  </div>
);

export default Error;
