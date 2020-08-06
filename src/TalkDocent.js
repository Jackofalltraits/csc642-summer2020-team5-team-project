
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  TextField,
  Grid,
  Typography,
  Container


} from "@material-ui/core";
import {Form} from 'react-bootstrap';
import { Helmet } from "react-helmet";

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      flexGrow: 1,
      width: '20%'
    },
    title: {
      position: 'absolute',
      left: '50%',
      top: '10%',
      transform: 'translate(-50%, -50%)',
      fontSize: 28,
      flexGrow: 1
    },
  

  }))
            

const Dtype = () => {
const classes = useStyles();

return( 

<Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />
      <Typography className={classes.title} textcomponent="h1" variant="h5">
          Choose one of the following Docent personailites. 
      </Typography>
      
      <div className={classes.paper}>
          <Grid container spacing={5}>
            

            <Grid item xs={12}>
            <h1>Select one</h1>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "#B92626" }}
                href="/foodie"
              >
                Fooide 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "#B92626" }}
                href="/hipster"
              >
                Hipster 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "#B92626" }}
                href="/professional"
              >
                Thrill seeker 
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "#B92626" }}
                href="/relaxer"
              >
                Relaxer 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "#B92626" }}
                href="/thrillSeeker"
              >
                Professional  
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "black" }}
                href ="/"
              >
                Go back to home page 
              </Button>
            </Grid>
          </Grid>
      </div>
    </Container>

)
  
}


export default (Dtype);


