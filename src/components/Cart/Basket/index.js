import { Grid, Button, Container } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useState, useContext } from "react";
import CustomCard from "../CustomCard";
import Spinner from "../Spinner";
import { CartContext } from "../CartContext";
import NavBar from "../Navbar";

import "./style.css";

const Basket = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const {
    basketdata,
    updateProduct,
    RemoveItemFromBasket,
    handleEmptyBasket,
  } = useContext(CartContext);

  const [basketData] = basketdata;

  if (!basketData.line_items || !basketData.line_items.length)
    return <Redirect to="/" />;

  return (
    <Container id="basket">
      <NavBar />
      <Grid container justify="center" spacing={4}>
        {basketData.line_items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <CustomCard
                basket
                product={item}
                updateProduct={updateProduct}
                RemoveItemFromBasket={RemoveItemFromBasket}
              />
            </Grid>
          );
        })}
      </Grid>

      <div className="actions">
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleEmptyBasket}
        >
          Empty Basket
        </Button>

        <Button
          size="small"
          variant="contained"
          component={Link}
          to="/checkout"
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Basket;
