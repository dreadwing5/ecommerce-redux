import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import HistoryIcon from "@material-ui/icons/History";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        component={Link}
        to="/category"
        label="Category"
        value="category"
        icon={<CategoryIcon />}
        color="secondary"
      />
      <BottomNavigationAction
        label="Recent Order"
        value="recentOrder"
        icon={<HistoryIcon />}
      />
      <BottomNavigationAction
        label="My Account"
        value="account"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}

export default Navigation;
