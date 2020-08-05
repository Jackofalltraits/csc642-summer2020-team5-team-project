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
    
    maxWidth: 800,
  },

  media: {
    height: 140,
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

const Al = () => {


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
            src="https://images4.newscred.com/Zz0xZmQwYzliMTU1YzkzNTM5ZTZmN2Q0NWQ3ZWFlMDFiMw==?height=480&width=800"
            alt="logo"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Atlanta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Atlanta is the capital and most populous city of the U.S. state of Georgia. With an estimated 2019 population of 506,811, it is also the 37th most populous city in the United States. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" href ="https://en.wikipedia.org/wiki/Atlanta">
          Learn More
        </Button>
      </CardActions>
    </Card>
       <Container margin="auto" component="main" maxWidth="sm" >      
       
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
              Average Salary in Atlanta, Georgia $68k 
               <Button className={classes.centered} variant="contained" color="secondary" href="https://www.payscale.com/research/US/Location=Atlanta-GA/Salary" >Learn more</Button>
      
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
              We're talking fried chicken, pot likker with cracklin' cornbread, fried green tomatoes and Brunswick stew. Take home a dozen cinnamon rolls. Two of Atlanta's best spots for a meat-and-three meal are the Busy Bee Cafe and the Colonnade.                 
                  <Button className={classes.centered} variant="contained" color="secondary" href="https://www.atlanta.net/Blog/What-Food-is-Atlanta-Known-For--Try-These-/" >Learn more</Button>
      
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
              55 Best Things to Do in Atlanta (Georgia) Martin Luther King Jr. National Historical Park. Birth Home of Martin Luther King Jr. Source: alisafarov / shutterstock. World of Coca-Cola. Etc  
              <Button className={classes.centered} variant="contained" color="secondary" href="https://www.thecrazytourist.com/25-best-things-atlanta-georgia/" >Learn more</Button>

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

export default Al;
