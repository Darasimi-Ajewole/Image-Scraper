import React from "react";
// import Download from "./Download";

type ImageProps = {
  url: string,
  title: string
}

const Image = ({ url, title }: ImageProps ): JSX.Element => {
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
