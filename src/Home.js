//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Testi from "./assets/testi.JPG";
import Sd from "./assets/SD.jpg";
import Nyc from "./assets/nyc.jpg";
import Chig from "./assets/chig.jpg";
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
            Do you know your city well? Why not get paid?<b> Become a Docent!</b>
          </h3>
          <img src={Chig} alt="chig" className="chig" />
          <img src={Nyc} alt="nyc" className="nyc" />
          <img src={Sd} alt="sd" className="sd" />
        <div>
          <img src={Testi} alt="testi-image" className="testi" />
        </div>
        </div>
      </div>
  );
}

export default Home;
