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
      width: '80%'
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

  
const City = () => {
    const classes = useStyles();
return( 
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />
      <Typography className={classes.title} textcomponent="h1" variant="h5">
        CITY DATA
      </Typography>
      
      <div className={classes.paper}>
          <Grid container spacing={4}>
            

            <Grid item xs={12}>
            <h1> Traveling to ?</h1>
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/al"
                style={{ backgroundColor: "black" }}
              >
                Atlanta 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/ch"
                style={{ backgroundColor: "black" }}
              >
                Chicago 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/nyc"
                style={{ backgroundColor: "black" }}
              >
                New York City
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/sd"
                style={{ backgroundColor: "black" }}
              >
                San Diego 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/sf"
                style={{ backgroundColor: "black" }}
              >
                San Francisco 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/se"
                style={{ backgroundColor: "black" }}
              >
                Seatle 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/dc"
                style={{ backgroundColor: "black" }}
              >
                Washington D.C.
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/lo"
                style={{ backgroundColor: "black" }}
              >
                London 
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href = "/to"
                style={{ backgroundColor: "black" }}
              >
                Tokyo 
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                href ="/cityData"
                style={{ backgroundColor: "Red" }}
              >
                Back 
              </Button>
            </Grid>
           
          </Grid>
      </div>
    </Container>
    
  )
}


export default (City);


