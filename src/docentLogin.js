// import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import Validation from './validator'

// function DocentLogin(){
// 	return(
// 	state = {
// 		email: '',
// 		password: '',
// 		errors: undefined,
// 		spinner: false
// 	}

// 	// handleChange = (e) => {
// 	// 	this.setState({
// 	// 		[e.target.name]: e.target.value,
// 	// 		errors: ''
// 	// 	})
// 	// }

// 	// handleSubmit = (e) => {
// 	// 	e.preventDefault();
// 	// 	this.setState({ isSubmitted: true, errors: undefined, spinner: true });
// 	// 	const { isValid, errors } = Validation(this.state);
// 	// 	if (!isValid) {
// 	// 		this.setState({ errors, isSubmitted: false, spinner: false });
// 	// 		return false;
// 	// 	} else {
// 	// 		this.setState({ isSubmitted: true, errors: undefined }, window.location.reload(true))
// 	// 	}
// 	// }

// 	render(){
// 		const { email, password, errors } = this.state;
// 			<div className="App">
// 			<div className="home">
  
// 	  <Navbar fluid bg="light" variant="light" className="nav">
// 	  <Navbar.Brand>
// 		<Link to="/">
// 		CityScape
// 		</Link>
// 		</Navbar.Brand>
// 	  <Nav className="mr-auto">
// 		<Form inline>
// 		<NavDropdown title="Cities" id="collasible-nav-dropdown">
// 	<NavDropdown.Item href="#action/3.1">Atlanta</NavDropdown.Item>
// 	<NavDropdown.Item href="#action/3.2">Chicago</NavDropdown.Item>
// 	<NavDropdown.Item href="#action/3.3">New York City</NavDropdown.Item>
// 	<NavDropdown.Item href="#action/3.3">San Diego</NavDropdown.Item>      
// 	<NavDropdown.Item href="#action/3.3">San Francisco</NavDropdown.Item>       
// 	<NavDropdown.Item href="#action/3.3">Seattle</NavDropdown.Item>       
// 	<NavDropdown.Item href="#action/3.3">Washiongton D.C.</NavDropdown.Item>    
// 	<NavDropdown.Divider />
// 	<NavDropdown.Item href="#action/3.4">London</NavDropdown.Item>
// 	<NavDropdown.Item href="#action/3.4">Tokyo</NavDropdown.Item>
//   </NavDropdown>
//   <NavDropdown title="Docent Type" id="collasible-nav-dropdown">
// 	<NavDropdown.Item href="#action/3.2">Food Lover</NavDropdown.Item>
// 	<NavDropdown.Item href="#action/3.3">Hipster</NavDropdown.Item>
// 	<NavDropdown.Item href="#action/3.3">Professional</NavDropdown.Item>      
// 	<NavDropdown.Item href="#action/3.3">Relaxer</NavDropdown.Item>       
// 	<NavDropdown.Item href="#action/3.3">Thrill seeker</NavDropdown.Item>       
//   </NavDropdown>
// 		  <FormControl
// 			type="text"
// 			placeholder="Search"
// 			className="mr-sm-2"
// 		  />
// 		  <Link to="./results">
// 		  <Button variant="outline-primary">Submit</Button>
// 		  </Link>
// 		</Form>
// 			  <Nav.Link><Link to="/talkdocent">Talk to a Docent</Link></Nav.Link>
// 		<Nav.Link><Link to="/becomedocent">Become a Docent</Link></Nav.Link>
// 		<Nav.Link><Link to="/Login">Docent Login</Link></Nav.Link>
// 		<Nav.Link ><Link to="/about">About</Link></Nav.Link>
// 	  </Nav>
// 	</Navbar>

// 				<br />
// 				<div className='container'>
// 					<div className='col-lg-12 '>
// 						<h2 className='title'>Docent Login</h2>
// 					</div>

// 					<div className='col-lg-6 m-auto'>
// 						<form>

// 							<div className='form-group'>
// 								<label>Email</label>
// 								<input className='form-control' type="email" name="email" value={email} onChange={this.handleChange} placeholder="DohnDoe123@gmail.com" />
// 							</div>


// 							<div className='form-group'>
// 								<label >Password</label>
// 								<input className='form-control' type="password" name="password" value={password} onChange={this.handleChange} placeholder="***********" />
// 							</div>

// 							<div class="form-group form-check">
// 								<input type="checkbox" className="form-check-input" />
// 								<label class="form-check-label" >Remember me</label>
// 							</div>
// 							<div className='title'>
// 								{errors ? <span className='errors'>{errors}</span> : ''}
// 							</div>
// 							<div className="col-lg-6 m-auto">
// 								<div className='form-group'>
// 									<button className='form-control' onClick={this.handleSubmit}>Login</button>
// 								</div>
// 							</div>
// 							<div className='title'>
// 								<span>Don't have Account? <Link to='/docentsignup' style={{ color: '#19323b' }}>Sign Up</Link></span>
// 							</div>

// 						</form>
// 					</div>

// 				</div >
// 		)
// 		}
// 	}
// )}

// export default DocentLogin;
