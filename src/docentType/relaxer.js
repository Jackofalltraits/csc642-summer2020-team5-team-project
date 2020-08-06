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

export default function Relaxer() {
  const classes = useStyles();

  return (
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />

    <Grid container spacing={4}>

    <List className={classes.paper}>

    <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://c.stocksy.com/a/jWM500/z9/1278237.jpg" />
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
          <Avatar alt="Travis Howard" src="https://s2.best-wallpaper.net/wallpaper/iphone/1704/Curly-hair-girl-face-eyes_iphone_640x960.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://ath2.unileverservices.com/wp-content/uploads/sites/8/2019/09/hairstyles-for-men-with-round-faces-jagged-spikes-shutterstock.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://www.fitnessin10formen.com/wp-content/themes/f10m/images/about_the_author/colin_mcalpin.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://www.gannett-cdn.com/presto/2020/05/15/PGRF/dc0f127c-c38b-45a3-812e-f11ac35b3758-HELLEN_CHAD_JOSEPH.jpg?crop=1693,2258,x0,y0&quality=50&width=640" />
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
          <Avatar alt="Cindy Baker" src="https://storage.needpix.com/rsynced_images/girl-face-3789933_1280.jpg" />
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