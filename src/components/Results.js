import React, { useContext } from "react";
import { ScraperContext } from "../context/ScraperContext";
import Gallery from "./Gallery";

import { extractPageUrl } from "../utils/dom";
import { useHistory } from "react-router-dom";

const Results = ({ urlString }) => {

  const { pageTitle, images,  } = useContext(ScraperContext);
  let history = useHistory();

  if (!pageTitle && urlString) {
    const pageUrl = extractPageUrl(urlString);
    history.push(`/scrape/image?page_url={${pageUrl}}`)
  }


  return (
    <div>
      { pageTitle && <h2>{pageTitle} Images</h2>  }
      <div className="photo-container">
        <Gallery data={images} />
      </div>
    </div>
  );
};

export default Results;