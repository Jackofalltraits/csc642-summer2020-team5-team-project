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

export default function Thrill() {
  const classes = useStyles();

  return (
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />

    <Grid container spacing={4}>

    <List className={classes.paper}>

    <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cdn.shopify.com/s/files/1/1426/3862/products/NB_M_Face_Oil_Image_Final_01_900x.jpg?v=1592421103" />
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
          <Avatar alt="Travis Howard" src="https://c.stocksy.com/a/LXL500/z9/1274431.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/236x/fe/dd/a6/fedda6e0a168a1cabad3c71b61c47c7b.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://previews.123rf.com/images/tomwang/tomwang1602/tomwang160200264/52584584-closeup-portrait-of-attractive-young-man-face.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
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