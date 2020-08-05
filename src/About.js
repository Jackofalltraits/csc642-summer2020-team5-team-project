//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
//import react-bootstrap to use in App page
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
// import bootstrap so react-bootstrap can use the css dependency
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Hipster from "./assets/hipster.jpg";
import Thrill from "./assets/thrill.jpg";

function About() {
  return (
    <div className="App">
          <div className="home">

    <Navbar fluid bg="light" variant="light" className="nav">
    <Navbar.Brand>
      <Link to="/">
      CityScape
      </Link>
      </Navbar.Brand>
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
        <Link to="./results">
        <Button variant="outline-primary">Submit</Button>
        </Link>
      </Form>
      <Nav.Link><Link to="/Itinerary">Itinerary</Link></Nav.Link>
      <Nav.Link><Link to="/talkdocent">Talk to a Docent</Link></Nav.Link>
      <Nav.Link><Link to="/becomedocent">Become a Docent</Link></Nav.Link>
      <Nav.Link ><Link to="/about">About</Link></Nav.Link>
    </Nav>
  </Navbar>
    <h1>About CityScape</h1>
    <h5>CityScape breaks down all the important data and prepares people to travel. With the help of our most important feature the Docent, users can find locals in their vacation spot to talk to about travel. We break down our Docents into categories such as Food Lover, Hipster, Professional, Relaxer, and Thrill Seeker. If you want to be a docent, please go to "become a docent" to find out more information</h5>
    <div className="pic">
    <img src={Hipster} alt="hip" className="hipster" />
    <img src={Thrill} alt="thril" className="thriller" />
    </div>
    <header className="App-header"></header>
    
    </div>
    </div>
  );
}
export default About;