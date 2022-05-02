import React, { ReactNode } from "react";

interface ErrorProps {
  status: string,
  message: string
}

const Error = ({status, message}: ErrorProps) => (
  <div className="not-found">
    <h2>Oops, Something went wrong</h2>
    <p>{ (message && decodeURI(message)) }</p>
  </div>
);

export default Error;
