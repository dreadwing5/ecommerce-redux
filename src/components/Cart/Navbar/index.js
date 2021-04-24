import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../img/logo_sm.png";
import { useContext } from "react";
import { CartContext } from "../CartContext";

import "./style.css";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  const { basketdata } = useContext(CartContext);
  const [basketData, setBasketData] = basketdata;
  const basketItems = basketData.total_items;
  const totalCost =
    (basketData.subtotal && basketData.subtotal.formatted_with_symbol) ||
    "00.00";
  const location = useLocation();

  return (
    <HideOnScroll>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
              color="inherit"
            >
              <img
                src={Logo}
                alt="Straight saloon logo"
                height="25px"
                className="logo"
              />
            </Typography>
            {location.pathname === "/basket" ? (
              <div className="basket-wrapper">
                <h2>
                  Total cost: <strong>{totalCost}</strong>
                </h2>
              </div>
            ) : (
              <div className="basket-wrapper">
                <IconButton
                  component={Link}
                  to="/basket"
                  aria-label="Show basket contents"
                  color="inherit"
                >
                  <Badge badgeContent={basketItems} color="secondary">
                    <ShoppingCart className="custom-basket" />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
