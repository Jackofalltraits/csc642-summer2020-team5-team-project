import React, { Component, Fragment } from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'
import Header from '../header/header'

export default class Trips extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<br />
				<div className='container'>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="#">Trips</a>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<a className="nav-link" href="#">My saves <span className="sr-only">(current)</span></a>
								</li>

								<li className="nav-item active">
									<a className="nav-link" href="#">itinerary <span className="sr-only">(current)</span></a>
								</li>

								<li className="nav-item active">
									<a className="nav-link" href="#">Recently Viewed <span className="sr-only">(current)</span></a>
								</li>

								<li className="nav-item active">
									<a className="nav-link" href="#">My saves <span className="sr-only">(current)</span></a>
								</li>

								<li className="nav-item active">
									<a className="nav-link" href="#">All Trips <span className="sr-only">(current)</span></a>
								</li>
							</ul>
						</div>
					</nav>
					<Card style={{ backgroundColor: '#dfebee' }}>
						<CardBody>
							<Button style={{ height: '5rem', fontSize: '48px', backgroundColor: '#c4c4c4' }}><li>Visiting San Fransisco <i className='fa fa-map-marker'></i></li></Button>
							<Button style={{ backgroundColor: '#c4c4c4', borderRadius: '60%', margin: '10, 10, 10, 10', color: 'black', marginLeft: '10px' }}> Get a Docent</Button>
						</CardBody>

						<CardBody>
							<Button style={{ height: '5rem', fontSize: '48px', backgroundColor: '#c4c4c4' }}><li>Visiting San Diego <i className='fa fa-map-marker'></i></li></Button>
							<Button style={{ backgroundColor: '#c4c4c4', borderRadius: '60%', margin: '10, 10, 10, 10', color: 'black', marginLeft: '10px' }}> Get a Docent</Button>

						</CardBody>

						<CardBody>
							<Button style={{ height: '5rem', fontSize: '48px', backgroundColor: '#c4c4c4' }}><li>Hiking <i className='fa fa-map-marker'></i></li></Button>
							<Button style={{ backgroundColor: '#c4c4c4', borderRadius: '60%', margin: '10, 10, 10, 10', color: 'black', marginLeft: '10px' }}> Get a Docent</Button>

						</CardBody>
					</Card>
				</div>
			</Fragment>

		)
	}
}
