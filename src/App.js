import React, { Component } from "react";
import ScraperContextProvider from "./context/ScraperContext";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Results from "./components/Results";
// import Item from "./components/Item";
import Scraper from "./components/Scraper";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Home from "./components/Home";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (history, searchInput) => {
    let url = `/scrape/image?page_url={${searchInput}}`;
    history.push(url);
  };

  handleError = (history, { status, errorMessage } ) => {

    let url = `/error/${status}/${encodeURI(errorMessage)}`;
    history.push(url);
  }

  handleScraped = (history, pageUrl) => {
    let url = `/display/results?page_url={${pageUrl}}`;
    history.push(url);
  }

  render() {
    return (
      <ScraperContextProvider>
        <HashRouter>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route exact path="/" render={() => <Home />}  />
              <Route
                path="/scrape/image/"
                render={props => (
                  <Scraper
                    urlString={props.location.search}
                    onScraped={(pageUrl) => this.handleScraped(props.history, pageUrl)}
                    onError={(errorMessage, status) => this.handleError(props.history, { errorMessage, status }) }
                  />
                )}
              />
              <Route
                path="/display/results"
                render={props => <Results urlString={props.location.search} />}
              />
              <Route
                path="/error/:status/:message"
                render={props => (
                  <Error
                    status={props.match.params.status}
                    message={props.match.params.message}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
        </ScraperContextProvider>
    );
  }
}

export default App;
