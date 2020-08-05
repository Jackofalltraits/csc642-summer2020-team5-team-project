//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About.js";
import Home from "./Home.js";
import SearchResults from "./SearchResults";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Nav,
  Navbar,
  SplitButton,
  NavDropdown
} from "react-bootstrap";

function App() {
  return (
    <SearchResults />,
    <Home />,
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" exact component={SearchResults} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
