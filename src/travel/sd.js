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

const Sd = () => {


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
            San Diego
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          San Diego (/ˌsæn diˈeɪɡoʊ/, Spanish: [san ˈdjeɣo]; Spanish for 'Saint Didacus') is a city in the U.S. state of California on the coast of the Pacific Ocean, approximately 120 miles (190 km) south of Los Angeles and immediately adjacent to the border with Mexico. With an estimated population of 1,423,851 as of July 1, 2019,[10] San Diego is the eighth-largest city in the United States and second-largest in California. It is part of the San Diego–Tijuana conurbation, the second-largest transborder agglomeration between the U.S. and a bordering country after Detroit–Windsor, with a population of 4,922,723 people.
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" href ="https://en.wikipedia.org/wiki/San_Diego">
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
              Average Salary in San Diego, California
$75k                
                
      
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
              Not to get all morbid and serious on you, but life is short. Too short, in fact, to spend time eating things that don’t taste amazing. To make sure that doesn’t happen to you, we painstakingly compiled these 50 things you absolutely have to eat before your time on this planet (or worse, your time in San Diego) comes to an end.                
              <Button size="small" color="primary" href ="https://www.thrillist.com/eat/san-diego/50-best-things-to-eat-in-san-diego-bucket-list">
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
              Let's explore the best things to do in San Diego: Balboa Park. Source: Andrew Zarivny / shutterstock. Food and Drink. Source: Teri Virbickis / shutterstock. Whale Watching. Source: Ronnie Chua / shutterstock. Coronado Beach. San Diego Museum of Art. San Diego Natural History Museum.               </ExpansionPanelDetails>
              <Button size="small" color="primary" href ="https://www.thecrazytourist.com/top-25-things-to-do-in-san-diego/">
          Learn More
        </Button>
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
