//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About.js";
import Home from "./Home.js";
import cityD from "./cityD.js";
import chooseTCity from "./chooseTCity.js";
import SearchResults from "./SearchResults";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BecomeDocent from "./BecomeDocent";
import TalkDocent from "./TalkDocent";
import al from "./travel/al";
import ch from "./travel/ch";
import dc from "./travel/dc";
import lo from "./travel/lo";
import nyc from "./travel/nyc";
import sd from "./travel/sd";
import se from "./travel/se";
import sf from "./travel/sf";
import to from "./travel/to";


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
          <Route path="/cityData" component={cityD} />
          <Route path="/chooseTCity" component={chooseTCity} />
          <Route path="/al" component={al} />
          <Route path="/ch" component={ch} />
          <Route path="/dc" component={dc} />
          <Route path="/lo" component={lo} />
          <Route path="/nyc" component={nyc} />
          <Route path="/sd" component={sd} />
          <Route path="/se" component={se} />
          <Route path="/sf" component={sf} />
          <Route path="/to" component={to} />




        </Switch>,
      </BrowserRouter>
  );
}

export default App;
