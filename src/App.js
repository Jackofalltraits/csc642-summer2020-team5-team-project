//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import SearchResults from "./SearchResults";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Testi from "./assets/testi.JPG";
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
    (<SearchResults />),
    (
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/searchResults" component={SearchResults} />
        </Switch>
      </main>
    ),
    (
      <div className="App">
        <Navbar fluid bg="light" variant="light" className="nav">
          <Navbar.Brand href="#home">CityScape</Navbar.Brand>
          <Nav className="mr-auto">
            <Form inline>
            <NavDropdown title="Cities" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Atlanta</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Chicago</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">New York City</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">San Diego</NavDropdown.Item>      
        <NavDropdown.Item href="#action/3.3">San Francisco</NavDropdown.Item>       
        <NavDropdown.Item href="#action/3.3">Seattle</NavDropdown.Item>       
        <NavDropdown.Item href="#action/3.3">Washiongton D.C.</NavDropdown.Item>    
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">London</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Tokyo</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Docent Type" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">Food Lover</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hipster</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Professional</NavDropdown.Item>      
        <NavDropdown.Item href="#action/3.3">Relaxer</NavDropdown.Item>       
        <NavDropdown.Item href="#action/3.3">Thrill seeker</NavDropdown.Item>       
      </NavDropdown>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Submit</Button>
            </Form>
            <Nav.Link href="#itinerary">Itinerary</Nav.Link>
            <Nav.Link href="#getDocent">Get a Docent</Nav.Link>
            <Nav.Link href="#setDocent">Become a Docent</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signin">Sign Up</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Navbar>
        <div className="home">
          <h1>CityScape</h1>
          <h2>Escape to The City</h2>
          <h3>
            Travel With a Docent! We Provide Docents who can help you
            around the city.
          </h3>
          <h3>
            Get a personal docent for a trip or talk to a Docent temporarily.
          </h3>
          <h3>
            Do you know your city well? Why not get paid?<b>Become a Docent!</b>
          </h3>
        </div>
        <div>
          <img src={Testi} alt="testi-image" className="testi" />
        </div>
        <header className="App-header"></header>
      </div>
    )
  );
}

export default App;
