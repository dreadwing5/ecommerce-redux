import Products from "./Products";
import NavBar from "./Navbar";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { fetchBasketData, fetchProducts } = useContext(CartContext);
  useEffect(() => {
    fetchProducts();
    fetchBasketData();
    // deleteCart();
  }, []);

  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
};

export default Cart;
