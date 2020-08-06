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
import LoginDocent from "./LoginDocent"
import al from "./travel/al";
import ch from "./travel/ch";
import lo from "./travel/lo";
import nyc from "./travel/nyc";
import sd from "./travel/sd";
import se from "./travel/se";
import foodie from "./docentType/foodie";
import hipster from "./docentType/hipster";
import professional from "./docentType/professional";
import relaxer from "./docentType/relaxer";
import thrillSeeker from "./docentType/thrillSeeker";



import Login from "./LoginDocent";

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
          <Route path="/login" exact component={LoginDocent} />
          <Route path="/becomedocent" exact component={BecomeDocent} />
          <Route path="/login" exact component={Login} />
          <Route path="/talkdocent" exact component={TalkDocent} />
          <Route path="/cityData" component={cityD} />
          <Route path="/chooseTCity" component={chooseTCity} />
          <Route path="/loginDocent" component={LoginDocent} />
          <Route path="/al" component={al} />
          <Route path="/ch" component={ch} />
          <Route path="/lo" component={lo} />
          <Route path="/nyc" component={nyc} />
          <Route path="/sd" component={sd} />
          <Route path="/se" component={se} />
          <Route path="/foodie" component={foodie} />
          <Route path="/hipster" component={hipster} />
          <Route path="/professional" component={professional} />
          <Route path="/relaxer" component={relaxer} />
          <Route path="/thrillSeeker" component={thrillSeeker} />






        </Switch>,
      </BrowserRouter>
  );
}

export default App;
