//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About.js";
import Home from "./Home.js";
import SearchResults from "./SearchResults";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BecomeDocent from "./BecomeDocent";
import TalkDocent from "./TalkDocent";

function App() {
  return (
    <SearchResults />,
    <Home />,
    <BecomeDocent/>,
    <TalkDocent/>,
    <About/>,

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" exact component={SearchResults} />
          <Route path="/about" exact component={About} />
          <Route path="/becomedocent" exact component={BecomeDocent} />
          <Route path="/talkdocent" exact component={TalkDocent} />

        </Switch>,
      </BrowserRouter>
  );
}

export default App;
