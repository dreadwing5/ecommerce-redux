import React, { useState, createContext } from "react";
import { commerce } from "../../lib/Commerce";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [basketData, setBasketData] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();

    setProducts((response && response.data) || []);
  };
  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response.cart);
  };
  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };
  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response.cart);
  };
  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response.cart);
  };

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasketData(response.cart);
  };

  const deleteCart = async () => {
    await commerce.cart.delete();
  };

  return (
    <CartContext.Provider
      value={{
        product: [products, setProducts],
        basketdata: [basketData, setBasketData],
        fetchProducts,
        fetchBasketData,
        addProduct,
        updateProduct,
        RemoveItemFromBasket,
        handleEmptyBasket,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
