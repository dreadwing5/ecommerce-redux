import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    padding: "32px",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function Category() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Navigation />
      <ThemeProvider theme={theme}>
        <GridList className={classes.root} cols={3} cellHeight={80}>
          <ListItem component={Link} to="/design" className={classes.link}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>

            <Typography>Cut and Style</Typography>
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <Typography>Texture</Typography>
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Color Lab" />
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Care" />
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Package" />
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Waxing" />
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pedi-Mani" />
          </ListItem>
          <ListItem component={Link} to="/design">
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Threading" />
          </ListItem>
        </GridList>
      </ThemeProvider>
    </div>
  );
}

export default Category;
