import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";
import Care from "../../img/icons/Care.jpeg";
import ColorLab from "../../img/icons/ColorLab.jpeg";
import CutStyle from "../../img/icons/Cut&Style.jpeg";
import Package from "../../img/icons/Package.jpeg";
import PediMani from "../../img/icons/Pedi-mani.jpeg";
import Texture from "../../img/icons/Texture.jpeg";
import Threading from "../../img/icons/Threading.jpeg";
import Waxing from "../../img/icons/Texture.jpeg";

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
          <ListItem component={Link} to="/cart" className={classes.link}>
            <ListItemAvatar>
              <Avatar src={CutStyle} />
            </ListItemAvatar>

            <Typography>Cut and Style</Typography>
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={Texture} />
            </ListItemAvatar>
            <Typography>Texture</Typography>
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={ColorLab} />
            </ListItemAvatar>
            <ListItemText primary="Color Lab" />
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={Care} />
            </ListItemAvatar>
            <ListItemText primary="Care" />
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={Package} />
            </ListItemAvatar>
            <ListItemText primary="Package" />
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={Waxing} />
            </ListItemAvatar>
            <ListItemText primary="Waxing" />
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={PediMani} />
            </ListItemAvatar>
            <ListItemText primary="Pedi-Mani" />
          </ListItem>
          <ListItem component={Link} to="/cart">
            <ListItemAvatar>
              <Avatar src={Threading} />
            </ListItemAvatar>
            <ListItemText primary="Threading" />
          </ListItem>
        </GridList>
      </ThemeProvider>
    </div>
  );
}

export default Category;
