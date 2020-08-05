import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
	render() {
		return (
			<nav>
				<div className="menu-icon">
					<span className="fas fa-bars"></span></div>
				<div className="logo">
				<Link to='/'>CityScape</Link>
					</div>
				<form action="#">
					<button style={{ marginLeft: '3px', marginRight: '2px' }}>City</button>
					<div></div>
					<button>DocentType</button>
					<input type="search" className="search-data" placeholder="Search" required />
					<button type="submit" style={{ marginLeft: '5px' }} >Submit</button>
				</form>
				<div className="nav-items">
					<li><a href="#">Itinerary</a></li>
					<li><Link to='/docentlogin'>Get a Docent</Link></li>
					<li><Link to='/docentsignup'>Become a Docent</Link></li>
					<li><Link to='/docentlogin'>Docent Login</Link></li>
					<li><Link to='/cityscapelogin'>Login</Link></li>
					<li><Link to='/cityscapesignup'>SignUp</Link></li>
					<li><Link to="/about">About</Link></li>
				</div>
				{/* <div className="search-icon">
					<span className="fa fa-search"></span></div>
				<div className="cancel-icon">
					<span className="fa fa-times"></span></div> */}
			</nav>
		)
	}
}
