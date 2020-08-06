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

export default function Foodie() {
  const classes = useStyles();

  return (
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />

    <Grid container spacing={4}>

    <List className={classes.paper}>

    <Grid>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.seriouseats.com/2018/10/20181015-state-of-slice-delmar-clay-williams.jpg" />
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
          <Avatar alt="Travis Howard" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singleimagebug-keto-taco-cups-pin-1559840682.jpg?crop=1.00xw:0.942xh;0,0&resize=480:*" />
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
          <Avatar alt="Cindy Baker" src="https://images.ctfassets.net/uexfe9h31g3m/41oXeXoL6bhpHXUydDHHez/f97a2a2210a5425f0c661c1c7a668b74/DeepDishPizza_1024x576.jpg?fm=jpg&fit=thumb&w=1200&h=630&fl=progressive" />
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
          <Avatar alt="Cindy Baker" src="https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg" />
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
          <Avatar alt="Cindy Baker" src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/1/27/1390822179922/Hotdog---how-do-you-eat-y-011.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fdbddfc8cce7aeb7326d70c397ab46f3" />
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
          <Avatar alt="Cindy Baker" src="https://cdn.tasteatlas.com/images/toplistarticles/cfc6f72a543e414086eca1fbcfe8e866.jpg?w=600&h=450" />
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