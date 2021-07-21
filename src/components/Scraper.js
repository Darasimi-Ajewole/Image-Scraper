import React, { useContext, useEffect } from "react";
import { ScraperContext } from "../context/ScraperContext";
import Loader from "./Loader";
import { extractPageUrl } from "../utils/dom";

const Scraper = ({ urlString, onScraped, onError }) => {
  const { runScrape } = useContext(ScraperContext);
  useEffect(() => {
    async function callBack () {
      const pageUrl = extractPageUrl(urlString);
      const {success, status, errorMessage } = await runScrape(pageUrl);
      if (success) onScraped(pageUrl)
      else onError(errorMessage, status)
    };
    callBack()
    // eslint-disable-next-line
  }, [urlString]);

  return (
    <div className="photo-container">
      <Loader />
    </div>
  );
};

export default Scraper;