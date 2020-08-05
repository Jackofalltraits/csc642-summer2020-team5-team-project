import React, { Component, Fragment } from 'react'
import Validation from './validator'
import { Link } from 'react-router-dom';
import Header from '../header/header';


export default class CityScapeLogin extends Component {
	state = {
		email: '',
		password: '',
		errors: undefined,
		spinner: false
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			errors: ''
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ isSubmitted: true, errors: undefined, spinner: true });
		const { isValid, errors } = Validation(this.state);
		if (!isValid) {
			this.setState({ errors, isSubmitted: false, spinner: false });
			return false;
		} else {
			this.setState({ isSubmitted: true, errors: undefined }, window.location.reload(true))
		}
	}

	render() {
		const { email, password, errors } = this.state;
		return (
			<Fragment>
				<Header />
				<br />
				<div className='container'>
					<div className='col-lg-12 '>
						<h2 className='title'>CityScape Login</h2>
					</div>

					<div className='col-lg-6 m-auto'>
						<form>

							<div className='form-group'>
								<label>Email</label>
								<input className='form-control' type="email" name="email" value={email} onChange={this.handleChange} placeholder="DohnDoe123@gmail.com" />
							</div>


							<div className='form-group'>
								<label >Password</label>
								<input className='form-control' type="password" name="password" value={password} onChange={this.handleChange} placeholder="***********" />
							</div>

							<div class="form-group form-check">
								<input type="checkbox" className="form-check-input" />
								<label class="form-check-label" >Remember me</label>
							</div>
							<div className='title'>
								{errors ? <span className='errors'>{errors}</span> : ''}
							</div>
							<div className="col-lg-6 m-auto">
								<div className='form-group'>
									<button className='form-control' onClick={this.handleSubmit}>Login</button>
								</div>
							</div>
							<div className='title'>
								<span>Don't have Account?<Link to='/cityscapesignup' style={{ color: '#19323b' }}>Sign Up</Link></span>
							</div>

						</form>
					</div>
				</div >
			</Fragment>
		)
	}
}
