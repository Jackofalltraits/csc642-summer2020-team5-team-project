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
            

const Account = () => {
const classes = useStyles();

return( 

<Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #69A98D" }} />
      <Typography className={classes.title} textcomponent="h1" variant="h5">
        CITY DATA
      </Typography>
      
      <div className={classes.paper}>
          <Grid container spacing={5}>
            

            <Grid item xs={12}>
            <h1>Reason to move?</h1>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="Search"
                style={{ backgroundColor: "#B92626" }}
                href="/chooseTCity"
              >
                Travel 
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


export default (Account);


