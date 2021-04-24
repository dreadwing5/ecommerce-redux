import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
// import Banner from "../../cart/Banner";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Products = () => {
  const { product, addProduct } = useContext(CartContext);
  const [products] = product;
  if (!products.length) return <Spinner />;

  return (
    <div>
      <Container id="products">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
