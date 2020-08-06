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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
    backgroundColor : '#37859E', 
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

const Lo = () => {


  const classes = useStyles();

 
    return (
      <Paper className={classes.paper}>
        <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />
        <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/img/atlanta.jpg"
          title="Al"
        /> */}
        <CardMedia>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg"
            alt="logo"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            London
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          London is the capital and largest city of England and the United Kingdom.[7][8] The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" href ="https://en.wikipedia.org/wiki/London">
          Learn More
        </Button>
      </CardActions>
    </Card>
       <Container margin="auto" component="main" maxWidth="sm" >     
        
       <Grid item xs={5}>
 
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
              approximately $52,000
Living in London as a Professional    

          <Button size="small" color="primary" href ="https://www.investopedia.com/articles/personal-finance/091415/how-much-money-do-you-need-live-london.asp">
          Learn More
          </Button>
      
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
              Widely regarded as one of the most diverse cities in the world, London’s culinary scene offers an eclectic mixture of classic British and modern, multicultural cuisine                
                
      
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
              Harry Potter Walking Tour. Yes, we all know the famous platform 9 3/4 is located in Kings Cross Station. Hot Tub down London's Canals. Take a trip to Boogie Wonderland. Tower of London. Tiny Coffee Shops all over. 
              <Button size="small" color="primary" href ="https://hostelgeeks.com/31-fun-things-to-do-london/">
          Learn More
          </Button>
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

export default Lo;
