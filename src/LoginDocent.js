import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import {
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown} from "react-bootstrap";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)',
    flexGrow: 1,
    width: '80%'
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, -50%)',
    fontSize: 28,
    flexGrow: 1
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))



function LoginDocent(){
    const classes = useStyles()

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
        </Form>
      <Nav.Link><Link to="/talkdocent">Talk to a Docent</Link></Nav.Link>
      <Nav.Link><Link to="/becomedocent">Become a Docent</Link></Nav.Link>
      <Nav.Link><Link to="/Login">Docent Login</Link></Nav.Link>
      <Nav.Link ><Link to="/about">About</Link></Nav.Link>
    </Nav>
  </Navbar>

      <Helmet bodyAttributes={{ style: 'background-color : #37859E' }} />

      <Typography className={classes.title} textcomponent="h1" variant="h5">
        Docent Log In
      </Typography>
      <div className={classes.paper}>
        <form className={classes.form} >
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="email"
                type="text"
                autoComplete="email"
                style={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="login"
                style={{ backgroundColor: 'black' }}
              >
                Log In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                href="/createaccount"
                type="submit"
                fullWidth
                variant="contained"
                id="login"
                style={{ backgroundColor: 'white' }}
              >
                Create an Account
              </Button>
            </Grid>
            <Grid
              container
              direction="column-reverse"
              justify="space-between"
              alignItems="flex-end"
            >
              <Button href="/searchbar" color="primary">
                See how it works
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
</div>
    )
}
export default LoginDocent;
