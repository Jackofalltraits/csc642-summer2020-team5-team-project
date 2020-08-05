//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Testi from "./assets/testi.JPG";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";

function Home() {
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
      
            </Form>
            <Nav.Link><Link to="/cityData">Choose a City</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to="/talkdocent">Talk to a Docent</Link></Nav.Link>
            <Nav.Link><Link to="/becomedocent">Become a Docent</Link></Nav.Link>
            <Nav.Link><Link to="/Itinerary">Login as Docent</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>

          </Nav>
        </Navbar>
        
          <h1>CityScape</h1>
          <h2>Escape to The City</h2>
          <h3>
            Travel With a Docent! We Provide Docents who can help you
            around the city.
          </h3>
          <h3>
            Talk to a personal docent for your next upcoming trip.
          </h3>
          <h3>
            Do you know your city well? Why not get paid?<b>Become a Docent!</b>
          </h3>
        <header className="App-header"></header>
        <div>
          <img src={Testi} alt="testi-image" className="testi" />
        </div>
        </div>
      </div>
  );
}

export default Home;
