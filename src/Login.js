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
        <div>
<Navbar fluid bg="light" variant="light" className="nav">
          <Navbar.Brand>
            <Link to="/">
            CityScape
            </Link>
            </Navbar.Brand>
          <Nav className="mr-auto">
            <Form inline>
      
            </Form>
            <Nav.Link><Link to="/cityData">Choose a City</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to="/talkdocent">Talk to a Docent</Link></Nav.Link>
            <Nav.Link><Link to="/becomedocent">Become a Docent</Link></Nav.Link>
            <Nav.Link><Link to="/login">Login as Docent</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>

          </Nav>
        </Navbar>

        <h1>Login to your Docent Account</h1>
        </div>
            )}
    
export default TalkDocent;