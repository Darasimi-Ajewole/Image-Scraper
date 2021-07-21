import React, { createContext, useState } from "react";
import { fetchPage } from "../utils/dom";
import pageParser  from "../utils/parser";

export const ScraperContext = createContext();

const ScraperContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState(null);

  const runScrape = async (pageUrl) => {
    setPageUrl(pageUrl)
    const { pageContent, status } = await fetchPage(pageUrl);
    const success = String(status).startsWith('2')

    if (!success) {
      return { success: false, status, errorMessage: pageContent}
    }
    const { pageTitle, images } = pageParser(pageContent, pageUrl);
    setPageTitle(pageTitle);
    setImages(images);
    return { success };
  };

  const globalContext = {
    images,
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
