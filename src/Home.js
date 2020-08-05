//the App.js page is where everything goes through. It acts at the entry point.
import React from "react";
import "./App.css";
//import react-bootstrap to use in App page
// import {
//   Button,
//   ButtonGroup,
//   Dropdown,
//   DropdownButton,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
//   SplitButton,
// } from "react-bootstrap";
// import bootstrap so react-bootstrap can use the css dependency
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
    <h1>CityScape</h1>
    <h2>Escape to The City</h2>
    <h3>Travel With a Docent! We Provide Docents
       who can help you help around the city.
        Get a personal docent for a trip or talk
         to a Docent temporarily. Do you city well?
          Why not get paid? <b>Become a Docent!</b></h3>
    </div>
  );
}
export default Home;