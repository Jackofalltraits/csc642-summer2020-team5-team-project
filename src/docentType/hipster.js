import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Grid,
  Container


} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    flexGrow: 1,
    width: '50%'
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, -50%)',
    fontSize: 28,
    flexGrow: 1
  },
}));

export default function Hipster() {
  const classes = useStyles();

  return (
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />

    <Grid container spacing={4}>

    <List className={classes.paper}>

    <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/a7/56/66/a7566642c351dabd925330d702e95066.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="NewYorkCity - qianzhao888@gmail.com"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Qian Zhao/male
              </Typography>
              {" — NewYorkPizza the best ever, the thinest ever!…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>

      <Divider variant="inset" component="li" />
      <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528" />
        </ListItemAvatar>
        <ListItemText
          primary="San Diego - calebz@sina.com"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Caleb Zhao/make
              </Typography>
              {" — Seafood, this is the right place + all kinds of Mexican Food…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>

      <Divider variant="inset" component="li" />
      <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Chicago - SandraAdams@outlook.com"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams/female
              </Typography>
              {' — Come to eat our thickest pizza ever made…'}
            </React.Fragment>
          }
        /> 
      </ListItem>
      </Grid>

      <Divider variant="inset" component="li" />

      <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.insider.com/5a8d77a5391d941d008b461a?width=750&format=jpeg&auto=webp" />
        </ListItemAvatar>
        <ListItemText
          primary="Seattle - LisaDuke@gmail.com"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >Lisa Duke/female
                              </Typography>
              {' — We have so many Itlatian food here, Wanna come and explore with me?…'}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>

      <Divider variant="inset" component="li" />
      <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://www.ties.com/blog/wp-content/uploads/2017/04/Sunglasses_for_Your_Face_Shape_01.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Atlantic city - williamzhang@gmail.com"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                 William Zhang/male              </Typography>
              {' — We have the best hot dogs here, I will take you to explore…'}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>

      <Divider variant="inset" component="li" />
      <Grid>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/originals/12/e4/14/12e4144db4ba587c0c191d1b492bf262.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="London - queenherself@englandmail.com"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                The Queen/female
              </Typography>
              {' — I will take u to eat all kinda england food till you cant take no more…'}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      <Grid item xs={12}>
      <Button
                type="submit"
                width ="50%"
                variant="contained"
                color="primary"
                id="Search"
                href = "/TalkDocent"
                style={{ backgroundColor: "Black" }}
              >
                Reselect
              </Button>
      <Button
                type="submit"
                width ="50%"
                variant="contained"
                color="primary"
                id="Search"
                href = "/"
                style={{ backgroundColor: "Red" }}
              >
                Go Back to Home
              </Button>
    </Grid>
    </List>  
    </Grid>
    </Container>
  );
}