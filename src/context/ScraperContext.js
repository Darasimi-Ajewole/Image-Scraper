import React, { createContext, useState } from "react";
import { fetchPage } from "../utils/dom";
import pageParser  from "../utils/parser";

export const ScraperContext = createContext();

const ScraperContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [scraping, setScraping] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState(null);

  const runScrape = async (pageUrl) => {
    setPageUrl(pageUrl)
    setScraping(true);
    const { pageContent, status } = await fetchPage(pageUrl);
    if (status !== 200) { /* TOD0: Handle Errors */ }
    const { pageTitle, images } = pageParser(pageContent, pageUrl);
    setPageTitle(pageTitle);
    setImages(images);
    return images;
  };

  const globalContext = {
    images,
    scraping,
    pageUrl,
    pageTitle,

    runScrape,
  }
  return (
    <ScraperContext.Provider value={globalContext}>
      {props.children}
    </ScraperContext.Provider>
  );
};

export default ScraperContextProvider;
