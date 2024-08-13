/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart"))?.cartItems || [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext can only be used under CartProvider");
  return context;
}

export { CartProvider, useCart };
