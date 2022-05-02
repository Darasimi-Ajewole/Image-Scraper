import React from "react";
// import { ScraperContext } from "../context/ScraperContext";
// import { useHistory } from "react-router-dom";

const Home = () => {
	// const { images } = useContext(ScraperContext);
	// let history = useHistory();

	// if (images.length) {
	// 	history.push(`/display/results`);
	// 	return null;
	// }
	return  <HomeContent />
}

const HomeContent = (): JSX.Element => (
	<div>
		<h2>Welcome to Image Scraper, A free tool to scrape images of a web page</h2>
		<p>To get started, provide url of any web page containing images in the input box above</p>
		<p>Click the scrape icon</p>
	</div>
)
  
export default Home;
