import React, { useContext } from "react";
import { ScraperContext, ScraperContextInterface } from "../context/ScraperContext";
import Gallery from "./Gallery";

import { extractPageUrl } from "../utils/dom";

import { useHistory } from 'react-router';
import { History } from 'history';

type ResultsProp = {
  urlString: string
}

const Results = ({ urlString }: ResultsProp): JSX.Element => {

  const globalContext = useContext(ScraperContext) as ScraperContextInterface;
  const { pageTitle, images } : ScraperContextInterface = globalContext

  let history: History = useHistory();

  if (!pageTitle && urlString) {
    const pageUrl: string = extractPageUrl(urlString);
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