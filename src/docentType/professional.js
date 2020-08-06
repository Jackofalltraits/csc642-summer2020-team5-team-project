import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  paper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    flexGrow: 1,
    width: "50%",
  },
  title: {
    position: "absolute",
    left: "50%",
    top: "10%",
    transform: "translate(-50%, -50%)",
    fontSize: 28,
    flexGrow: 1,
  },
}));

export default function Professional() {
  const classes = useStyles();

  return (
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #37859E" }} />

      <Grid container spacing={4}>
        <List className={classes.paper}>
          <Grid>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://image.freepik.com/free-photo/beautiful-girl-face-perfect-skin_155003-6435.jpg"
                />
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
                <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1566810039093-63307ce3f6b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
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
                    {
                      " — Seafood, this is the right place + all kinds of Mexican Food…"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>

          <Divider variant="inset" component="li" />
          <Grid>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://image.shutterstock.com/image-photo/portrait-beautiful-smiling-man-showing-260nw-715845643.jpg" />
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
                    {" — Come to eat our thickest pizza ever made…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>

          <Divider variant="inset" component="li" />

          <Grid>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://i.pinimg.com/736x/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg" />
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
                    >
                      Lisa Duke/female
                    </Typography>
                    {
                      " — We have so many Itlatian food here, Wanna come and explore with me?…"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>

          <Divider variant="inset" component="li" />
          <Grid>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
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
                      William Zhang/male{" "}
                    </Typography>
                    {
                      " — We have the best hot dogs here, I will take you to explore…"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>

          <Divider variant="inset" component="li" />
          <Grid>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://www.goodfreephotos.com/albums/people/asian-pretty-girl-face-in-a-hate-long-hair.jpg" />
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
                    {
                      " — I will take u to eat all kinda england food till you cant take no more…"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              width="50%"
              variant="contained"
              color="primary"
              id="Search"
              href="/TalkDocent"
              style={{ backgroundColor: "Black" }}
            >
              Reselect
            </Button>
            <Button
              type="submit"
              width="50%"
              variant="contained"
              color="primary"
              id="Search"
              href="/"
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
