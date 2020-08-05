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
import Jack from "./assets/jackrec.jpg";

function BecomeDocent() {
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
        {/* <NavDropdown.Item href="#action/3.1">Atlanta</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Chicago</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">New York City</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">San Diego</NavDropdown.Item>      
        <NavDropdown.Item href="#action/3.3">San Francisco</NavDropdown.Item>       
        <NavDropdown.Item href="#action/3.3">Seattle</NavDropdown.Item>       
        <NavDropdown.Item href="#action/3.3">Washiongton D.C.</NavDropdown.Item>    
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">London</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Tokyo</NavDropdown.Item> */}
        <NavDropdown.Item href="/cityData">choose city</NavDropdown.Item>

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
    <h4>Thank you for your interest in becoming a Docent. We are expanding and we may even have a spot for you. Right now, In America, we are only hiring in:</h4>
    
    <li>Atlanta</li>
    <li>Chicago</li>
    <li>New York CIty</li>
    <li>San Diego</li>
    <li>San Francisco</li>
    <li>Seattle</li>
    <li>Washiongton D.C.</li>
<h4>Outside of North America, we are only hiring in: </h4>
    <li>London</li>
    <li>Tokyo</li>
   <h3>Please Email our recruiting Manager Jack at jackkower@gmail.com with your resume and 3 sentences about why you would be a good docent. We will be in touch.</h3>
    <div className="pic">
    <img src={Jack} alt="jack" className="jack" />
    </div>
    <header className="App-header"></header>
    
    </div>
    </div>
  );
}
export default BecomeDocent;