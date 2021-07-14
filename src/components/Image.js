import React from "react";
// import Download from "./Download";

const Image = ({ url, title }) => {
  return (
      <li>
        <a href={url} download target="_blank" rel="noopener noreferrer">
          <img src={url} alt={title} />
          {/* <Download /> */}
        </a>
      </li>
  );
};
export default Image;
