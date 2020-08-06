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

const Se = () => {


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
            src="https://www.hotelpalomar-sandiego.com/images/1700-960/istock-833705372-4410d5d4.jpg"
            alt="logo"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Seattle
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Seattle (/siˈætəl/ (About this soundlisten) see-AT-əl) is a seaport city on the West Coast of the United States. It is the seat of King County, Washington. Seattle is the largest city in both the state of Washington and the Pacific Northwest region of North America. According to U.S. Census data released in 2019, the Seattle metropolitan area's population stands at 3.98 million, and ranks as the 15th-largest in the United States.
                   </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" href ="https://en.wikipedia.org/wiki/Seattle">
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
               Average Salary in Seattle, Washington
$79k
                
                
      
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
              Seattle is known for its beautiful natural surroundings and its international population, both of which are reflected in its food. In a city that embraces and respects its ecological and cultural diversity, here are 12 foods you’ve got to try when in Seattle.                
              <Button size="small" color="primary" href ="https://theculturetrip.com/north-america/usa/washington/articles/12-foods-you-must-try-in-seattle/">
          Learn More
        </Button>
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
              From a now-iconic Ferris wheel to an underground tour, these are the best things to do in Seattle right now
              <Button size="small" color="primary" href ="https://www.timeout.com/seattle/things-to-do/best-things-to-do-in-seattle">
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

export default Se;
