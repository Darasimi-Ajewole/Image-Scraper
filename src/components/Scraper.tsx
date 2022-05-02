import React, { useContext, useEffect } from "react";
import { ScraperContext, ScrapeResult } from "../context/ScraperContext";
import Loader from "./Loader";
import { extractPageUrl } from "../utils/dom";

type ScraperProps = {
  urlString: string,
  onScraped: (pageUrl: string) => void,
  onError: (errorMessage: string, status: number) => void
}

const Scraper = ({ urlString, onScraped, onError }: ScraperProps): JSX.Element => {
  const { runScrape } = useContext(ScraperContext);
  useEffect(() => {
    async function callBack () {
      const pageUrl: string = extractPageUrl(urlString);
      const {success, status, errorMessage }: ScrapeResult = await runScrape(pageUrl);
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