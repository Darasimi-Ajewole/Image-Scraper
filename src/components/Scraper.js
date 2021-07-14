import React, { useContext, useEffect } from "react";
import { ScraperContext } from "../context/ScraperContext";
import Loader from "./Loader";
import { extractPageUrl } from "../utils/dom";

const Scraper = ({ urlString, onScraped, onError }) => {
  const { runScrape } = useContext(ScraperContext);
  useEffect(() => {
    async function callBack () {
      const pageUrl = extractPageUrl(urlString);
      const success = await runScrape(pageUrl);
      if (success) onScraped(pageUrl)
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