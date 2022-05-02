import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

import { Image as ImageType } from "../utils/parser";

type GalleryProp = {
  data: ImageType[]
}
const Gallery = ({ data }: GalleryProp) => {
  const results: ImageType[] = data;
  let images: JSX.Element[] | null = null ;
  let noImages: JSX.Element | null = null;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image) => {
      let title = image.alt;
      let url = image.src;
      return <Image url={url} key={url} title={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
