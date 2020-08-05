import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
  Grid,
  Button,
  Container
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Helmet } from "react-helmet";

const useStyles = makeStyles(theme => ({
  root: {
    top:"15%",
    width: "98%",
    position: "relative",
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  paper: {
    backgroundColor : '#69A98D', 
    boxShadow: 'none'
  },
  title: {
    fontSize: 22,
    flexGrow: 1,
  },
  spacer: {
    height: '20px'
  },
  profileDiv : {
    textAlign: 'center'
  },
  mainDiv: {
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '100px'
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  button: {
    "& > *": {
      margin: theme.spacing(2),
      background: "#69A98D",
     
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 50px",
    },

  },
   
  centered: {
    margin: '0 auto'
  }
}));

const Sd = () => {


  const classes = useStyles();

 
    return (
      <Paper className={classes.paper}>
        <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />
     
       <Container margin="auto" component="main" maxWidth="sm" >      
       <Grid item xs={5}>
      <img
            src=""
            alt="logo"
          />
        
      </Grid>
      </Container>
                  <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
  
                <Typography className={classes.heading}>
                    Average Salary
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                Your name - age - hobby - sex
                
                
      
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
  
                <Typography className={classes.heading}>
                    Food
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  foodddddd                
                
      
              </ExpansionPanelDetails>
            </ExpansionPanel>
  
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}> Fun things to do</Typography>
              </ExpansionPanelSummary>
              
              <ExpansionPanelDetails>
                You will be able to change your passwords right here
              </ExpansionPanelDetails>
            </ExpansionPanel>
  
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}> History </Typography>
              </ExpansionPanelSummary>
            
            <ExpansionPanelDetails>
              Here is the data of what city you mostly likely to move or travel to. 
            </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExitToAppIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                
              >
                <Typography className={classes.heading}> Open to reselect or request/become a Docent </Typography>
              </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Button className={classes.centered} variant="contained" color="blue" href="/becomedocent" >Become a Docent</Button>
              <Button className={classes.centered} variant="contained" color="dark blue" href="/talkdocent" >Request a Docent</Button>
              <Button className={classes.centered} variant="contained" color="secondary" href="/chooseTCity" >Reselect City</Button>
            </ExpansionPanelDetails>
            </ExpansionPanel>
  
       
      </Paper>
    );
  

};

export default Sd;
