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
import {  Link } from "react-router-dom";

function TalkDocent(){
    return(
      <Navbar fluid bg="light" variant="light" className="nav">
      <Navbar.Brand>
        <Link to="/">
        CityScape
        </Link>
        </Navbar.Brand>
      <Nav className="mr-auto">
        <Form inline>
  
        </Form>
        <Nav.Link><Link to="/cityData">City</Link></Nav.Link>
      </Nav>
      <Nav>

      </Nav>
      <Nav>

        <Nav.Link><Link to="/talkdocent">Find a Docent</Link></Nav.Link>
        <Nav.Link><Link to="/becomedocent">Be a Docent</Link></Nav.Link>
        <Nav.Link><Link to="/login">Docent Login</Link></Nav.Link>
        <Nav.Link ><Link to="/about">About</Link></Nav.Link>
      </Nav>
    </Navbar>            )}
    
export default TalkDocent;