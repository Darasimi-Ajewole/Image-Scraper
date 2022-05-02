import React, { Component } from "react";
import ScraperContextProvider from "./context/ScraperContext";
import {Route, Switch, RouteComponentProps } from "react-router";
import { HashRouter } from "react-router-dom";
import { History } from 'history';

import Header from "./components/Header";
import Results from "./components/Results";
// import Item from "./components/Item";
import Scraper from "./components/Scraper";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Home from "./components/Home";

type ErrorParams = {
  status?: string,
  message?: string
}

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (history: History, searchInput: string) => {
    let url = `/scrape/image?page_url={${searchInput}}`;
    history.push(url);
  };

  handleError = (history: History, { status, errorMessage }: { status: number, errorMessage: string } ) => {

    let url = `/error/${status}/${encodeURI(errorMessage)}`;
    history.push(url);
  }

  handleScraped = (history: History, pageUrl: string) => {
    let url = `/display/results?page_url={${pageUrl}}`;
    history.push(url);
  }

  render() {
    return (
      <ScraperContextProvider>
        <HashRouter>
          <div className="container">
            <Route
              render={(props: RouteComponentProps) => (
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
                render={(props: RouteComponentProps) => (
                  <Scraper
                    urlString={props.location.search}
                    onScraped={(pageUrl: string) => this.handleScraped(props.history, pageUrl)}
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
                render={( { match }: RouteComponentProps<ErrorParams>) => (
                  <Error
                    status={match.params.status}
                    message={match.params.message}
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
