import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Validation from './validator';
import Header from '../header/header';


class CityScapeSignup extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		isSubmitted: false,
		errors: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
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
		const { firstName, lastName, email, password, confirmPassword, errors } = this.state;
		return (
			<Fragment>
				<Header />
				<br />
				<div className='container'>
					<div className='col-lg-12 '>
						<h2 className='title'>Sign Up for CityScape</h2>
					</div>

					<div className='col-lg-8 m-auto'>
						<form>

							<div className='row'>
								<div className='col-lg-6'>
									<div className='form-group'>
										<label >First Name</label>
										<input className='form-control' type="text" name="firstName" value={firstName} onChange={this.handleChange} placeholder="Required" />
									</div>
								</div>
								<div className='col-lg-6'>
									<div className='form-group'>
										<label>Last Name </label>
										<input className='form-control' type="text" name="lastName" value={lastName} onChange={this.handleChange} placeholder="Required" />
									</div>
								</div>
							</div>

							<div className='form-group'>
								<label>Email</label>
								<input className='form-control' type="email" name="email" value={email} onChange={this.handleChange} placeholder="DohnDoe123@gmail.com" />
							</div>

							<div className='row'>
								<div className='col-lg-6'>
									<div className='form-group'>
										<label >Password</label>
										<input className='form-control' type="password" name="password" value={password} onChange={this.handleChange} placeholder="***********" />
									</div>
								</div>
								<div className='col-lg-6'>
									<div className='form-group'>
										<label >Confirm Password</label>
										<input className='form-control' type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} placeholder="***********" />
									</div>
								</div>
							</div>

							<div className='title'>{errors ? <span className='errors'>{errors}</span> : ''}</div>

							<div className="col-lg-4 m-auto">
								<div className='form-group'>
									<button className='form-control' onClick={this.handleSubmit}>Sign Up</button>
								</div>
							</div>

							<div className='title'>
								<span>Already have Account? <Link to='/cityscapelogin' style={{ color: '#19323b' }}>Login</Link></span>
							</div>

						</form>
					</div>
				</div >
			</Fragment>
		)
	}
}

export default CityScapeSignup;